
export type comparisonOperatorTypes = '===' | '==' | '==!' | '=!' | '>=' | '<=' | 'in' | 'instanceof'
export type mathOperatorTypes = '**' | '*' | '/' | '%' | '+' | '-'
export type evaluationOperatorTypes = '&&' | '||' | '!' | '!!' | 'typeof'

export type operatorTypes = comparisonOperatorTypes & mathOperatorTypes & evaluationOperatorTypes

/**
 * @private
 * List of comparison operators and associated functions to invoke evaluation.
 */
const operators = {
  // And
  "&&": (a, b) => a && b,
  // Or
  "||": (a, b) => a || b,
  // Not equal
  "!": (a) => !a,
  // Double not - used to return truth
  "!!": (a) => !!a,
  // Equal value & equal type
  "===": (a, b) => a === b,
  // Equal value
  "==": (a, b) => a == b,
  // Not equal value or not equal type
  "!==": (a, b) => a !== b,
  // Not equal value
  "!=": (a, b) => a != b,
  // Greater than
  ">": (a, b) => a > b,
  // Less than
  "<": (a, b) => a < b,
  // Greater than or equal
  ">=": (a, b) => a >= b,
  // Less than or equal
  "<=": (a, b) => a <= b,
  // In
  "in": (a, b) => a in b,
  // Instanceof
  "instanceof": (a, b) => a instanceof b,
  // Exponentiation
  "**": (a, b) => a ** b,
  // Multiplication
  "*": (a, b) => a * b,
  // Division
  "/": (a, b) => a / b,
  // Remainder
  "%": (a, b) => a % b,
  // Addition
  "+": (a, b) => a + b,
  // Subtraction
  "-": (a, b) => a - b,
  // Typeof
  "typeof": (a) => typeof a
}

export default operators