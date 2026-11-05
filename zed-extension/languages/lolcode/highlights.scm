[(comment) (multiline_comment)] @comment
(string) @string
(number) @number
(boolean) @boolean
(function_declaration name: (identifier) @function)
(function_call name: (identifier) @function)
(break_statement) @keyword
["HAI" "KTHXBYE" "I HAS A" "ITZ" "VISIBLE" "GIMMEH" "HOW IZ I" "IF U SAY SO" "I IZ" "O RLY?" "YA RLY" "MEBBE" "NO WAI" "OIC" "IM IN YR" "IM OUTTA YR"] @keyword
