// @flow

/**
 * Evaluate one or two values and return the evaluation value or boolean.
 *
 * @static
 * @memberOf ators
 * @since 1.0.0
 * @category Function
 * @param {boolean} evaluation The result of an evaluation
 * @param {any} a Value to return if the evaluation is true
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
const ternary = (evaluation: boolean, a: any, b: any) => {
  return evaluation ? a : b
}

export default ternary