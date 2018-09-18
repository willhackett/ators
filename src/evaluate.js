// @flow
import operators, { type evaluationOperatorTypes } from './_operators'

/**
 * Evaluate one or two values and return the evaluation value or boolean.
 *
 * @static
 * @memberOf ators
 * @since 1.0.0
 * @category Function
 * @param {any} a The first value to evaluate
 * @param {string} operator A string based evaluation operator of either &&, !!, !, ||
 * @param {any} b The second value to evaluate, not used with !! or ! comparisons
 * @returns {any} The result of the evaluation
 *
 * ators.evaluate('apples', '&&', 'oranges')
 * // => 'oranges'
 *
 * ators.evaluate('apples', '||', 'apples')
 * // => 'apples'
 *
 * ators.evaluate('apples', '!')
 * // => false
 *
 * Evaluate accepts the following operators:
 * - &&
 * - ||
 * - !
 * - !!
 * - typeof
 *
 */
const evaluate = (a: any, operator: evaluationOperatorTypes, b: any) => {
  return ['!', '!!'].includes(operator)
    ? (operators[operator])(a)
    : (operators[operator])(a, b)
}

export default evaluate