use tree_sitter_language::LanguageFn;

extern "C" {
    fn tree_sitter_lolcode() -> *const ();
}

pub const LANGUAGE: LanguageFn = unsafe { LanguageFn::from_raw(tree_sitter_lolcode) };

pub const HIGHLIGHTS_QUERY: &str = "";

#[cfg(test)]
mod tests {
    #[test]
    fn parses_multiline_comments() {
        let mut parser = tree_sitter::Parser::new();
        parser.set_language(&super::LANGUAGE.into()).unwrap();
        let tree = parser
            .parse(
                "HAI 1.2\nOBTW first\nsecond\nTLDR\nVISIBLE \"ok\"\nKTHXBYE\n",
                None,
            )
            .unwrap();
        assert!(
            !tree.root_node().has_error(),
            "{}",
            tree.root_node().to_sexp()
        );
        assert!(tree.root_node().to_sexp().contains("(multiline_comment)"));
    }
}
