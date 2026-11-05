fn main() {
    println!("cargo:rerun-if-changed=src/parser.c");
    println!("cargo:rerun-if-changed=src/scanner.c");
    let src_dir = std::path::Path::new("src");
    let mut c_config = cc::Build::new();
    c_config.include(src_dir);
    c_config.file(src_dir.join("parser.c"));
    c_config.file(src_dir.join("scanner.c"));
    c_config.compile("tree-sitter-lolcode");
}
