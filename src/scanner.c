#include "tree_sitter/parser.h"
#include <wctype.h>

enum TokenType { MULTILINE_COMMENT };

void *tree_sitter_lolcode_external_scanner_create(void) { return NULL; }
void tree_sitter_lolcode_external_scanner_destroy(void *payload) { (void)payload; }
unsigned tree_sitter_lolcode_external_scanner_serialize(void *payload, char *buffer) {
    (void)payload;
    (void)buffer;
    return 0;
}
void tree_sitter_lolcode_external_scanner_deserialize(void *payload, const char *buffer, unsigned length) {
    (void)payload;
    (void)buffer;
    (void)length;
}

bool tree_sitter_lolcode_external_scanner_scan(void *payload, TSLexer *lexer, const bool *valid_symbols) {
    (void)payload;
    if (!valid_symbols[MULTILINE_COMMENT]) return false;
    while (iswspace(lexer->lookahead)) lexer->advance(lexer, true);
    const char *opening = "OBTW";
    for (const char *p = opening; *p; p++) {
        if (lexer->lookahead != *p) return false;
        lexer->advance(lexer, false);
    }
    if (!iswspace(lexer->lookahead) && lexer->lookahead != ',') return false;

    bool boundary = true;
    while (!lexer->eof(lexer)) {
        if (boundary && lexer->lookahead == 'T') {
            const char *end = "TLDR";
            while (*end && lexer->lookahead == *end) {
                lexer->advance(lexer, false);
                end++;
            }
            if (!*end && (lexer->eof(lexer) || iswspace(lexer->lookahead) || lexer->lookahead == ',')) {
                lexer->mark_end(lexer);
                lexer->result_symbol = MULTILINE_COMMENT;
                return true;
            }
            boundary = false;
        } else {
            boundary = iswspace(lexer->lookahead) || lexer->lookahead == ',';
            lexer->advance(lexer, false);
        }
    }
    return false;
}
