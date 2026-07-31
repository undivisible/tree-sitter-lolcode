module.exports = grammar({
  name: 'lolcat',

  extras: $ => [
    /\s/,
    $.comment,
  ],

  conflicts: $ => [
    [$.function_call],
  ],

  rules: {
    source_file: $ => seq(
      'HAI',
      optional($.version),
      repeat($._statement),
      'KTHXBYE'
    ),

    version: $ => /[0-9]+(\.[0-9]+)*/,

    comment: $ => choice(
      seq('BTW', /[^\n]*/),
      seq('OBTW', /[^\n]*/, 'TLDR')
    ),

    _statement: $ => choice(
      $.variable_declaration,
      $.assignment,
      $.print_statement,
      $.input_statement,
      $.function_declaration,
      $.if_statement,
      $.return_statement,
      $.expression_statement
    ),

    variable_declaration: $ => seq(
      'I HAS A',
      field('name', $.identifier),
      optional(seq('ITZ', field('value', $._expression)))
    ),

    assignment: $ => seq(
      field('name', $.identifier),
      'R',
      field('value', $._expression)
    ),

    print_statement: $ => seq(
      'VISIBLE',
      field('value', $._expression)
    ),

    input_statement: $ => seq(
      'GIMMEH',
      field('name', $.identifier)
    ),

    function_declaration: $ => seq(
      'HOW IZ I',
      field('name', $.identifier),
      repeat(seq('YR', $.identifier)),
      repeat($._statement),
      'IF U SAY SO'
    ),

    function_call: $ => seq(
      'I IZ',
      field('name', $.identifier),
      repeat(seq('YR', $._expression)),
      optional('MKAY')
    ),

    if_statement: $ => seq(
      'O RLY?',
      'YA RLY',
      repeat($._statement),
      optional(seq('NO WAI', repeat($._statement))),
      'OIC'
    ),

    return_statement: $ => seq(
      'FOUND YARN',
      field('value', $._expression)
    ),

    expression_statement: $ => prec(-1, $._expression),

    _expression: $ => choice(
      $.binary_expression,
      $.unary_expression,
      $.function_call,
      $.identifier,
      $.number,
      $.string,
      $.boolean
    ),

    binary_expression: $ => choice(
      seq('SUM OF', $._expression, 'AN', $._expression),
      seq('DIFF OF', $._expression, 'AN', $._expression),
      seq('PRODUKT OF', $._expression, 'AN', $._expression),
      seq('QUOSHUNT OF', $._expression, 'AN', $._expression),
      seq('MOD OF', $._expression, 'AN', $._expression),
      seq('BOTH OF', $._expression, 'AN', $._expression),
      seq('EITHER OF', $._expression, 'AN', $._expression),
      seq('BOTH SAEM', $._expression, 'AN', $._expression),
      seq('DIFFRINT', $._expression, 'AN', $._expression)
    ),

    unary_expression: $ => seq(
      'NOT',
      $._expression
    ),

    identifier: $ => /[a-zA-Z_][a-zA-Z0-9_]*/,

    number: $ => /-?[0-9]+(\.[0-9]+)?/,

    string: $ => /"[^"]*"/,

    boolean: $ => choice('WIN', 'FAIL')
  }
});
