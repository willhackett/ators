// @flow
import operators, { type mathOperatorTypes } from './_operators'

/**
 * Calculate a value.
 *
 * @static
 * @memberOf ators
 * @since 1.0.0
 * @category Function
 * @param {any} a Value to return if the evaluation is true
 * @param {boolean} operator One of either **, *, /, %, +, -
 * @param {any} b Value to return if the evaluation is false
 * @returns {any} Either a or b
 *
 * ators.ternary(true, 'apples' 'oranges')
 * // => 'apples'
 *
 * ators.evaluate(false, 'apples', 'oranges')
 * // => 'oranges'
 *
 */
const calc = (a: any, operator: mathOperatorTypes, b: any) => {
  return (operators[operator])(a, b)
}

export default calc