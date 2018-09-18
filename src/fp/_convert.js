/**
 * Create a function with `n` arguments that invokes `fn` with the args it receives
 *
 * @private
 * @param {Function} fn The function to wrap
 * @param {number} n The arity of the next function
 * @returns {Function} The new function
 */
const toFpCurry = (fn, aryOrder, arity = null) => {
  const maxArity = arity || fn.length
  const arguments = []

  const invoke = () => {
    if (aryOrder) {
      return fn(...aryOrder.map(k => arguments[k]))
    }
    return fn(...arguments)
  }

  const nextArgument (...args) => {
    args.forEach(arguments.push)
    if (arguments.length >= maxArity) return invoke()
    return nextArgument
  }
  return nextArgument
}
