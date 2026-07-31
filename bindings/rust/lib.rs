use tree_sitter_language::LanguageFn;

extern "C" {
    fn tree_sitter_lolcat() -> *const ();
}

pub const LANGUAGE: LanguageFn = unsafe { LanguageFn::from_raw(tree_sitter_lolcat) };

pub const HIGHLIGHTS_QUERY: &str = "";
