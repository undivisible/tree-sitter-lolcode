# tree-sitter-lolcat

Tree-sitter grammar for **LOLCAT / LOLCODE** language.

## Features
- Full support for `HAI` / `KTHXBYE` program blocks.
- Variable declarations (`I HAS A ... ITZ ...`).
- Assignment (`R`).
- Input / Output (`VISIBLE`, `GIMMEH`).
- Binary & Unary expressions (`SUM OF`, `DIFF OF`, `PRODUKT OF`, `QUOSHUNT OF`, `MOD OF`, `BOTH OF`, `EITHER OF`, `BOTH SAEM`, `DIFFRINT`, `NOT`).
- Control flow (`O RLY?` / `YA RLY` / `NO WAI` / `OIC`).
- Functions (`HOW IZ I` / `IF U SAY SO`).
- Comments (`BTW`, `OBTW ... TLDR`).

## Usage
### Rust
```rust
use tree_sitter::Parser;

let mut parser = Parser::new();
parser.set_language(&tree_sitter_lolcat::LANGUAGE.into()).unwrap();
```
