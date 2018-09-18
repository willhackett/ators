// @flow
import operators, { type comparisonOperatorTypes } from './_operators'

/**
 * Compare two values using a string-based comparison operator.
 *
 * @static
 * @memberOf ators
 * @since 1.0.0
 * @category Function
 * @param {any} a The first value to evaluate
 * @param {string} comparator A string based comparison operator of either ==, ===, !=, !==, >=, <=, in, instanceof
 * @param {any} b The second value to evaluate
 * @returns {boolean} The result of the evaluation
 *
 * ators.compare('apples', '===', 'oranges')
 * // => false
 *
 * ators.compare('apples', '===', 'apples')
 * // => true
 *
 * ators.compare('123', '==', 123)
 * // => true
 *
 * Compare accepts comparators that are one of:
 * - ===
 * - ==
 * - >=
 * - <=
 * - !=
 * - !==
 * - in
 * - instanceof
 *
 */
const compare = (a: any, comparator: comparisonOperatorTypes, b: any) => {
  return (operators[comparator])(a, b)
}

export default compare