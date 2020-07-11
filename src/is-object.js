export default isObject

/**
 * This method test if a given paramter is of type "object"
 * @param {Object}    - parameter is evaluated
 * @returns {Boolean} - True if parameter is of type object
 */

function isObject(data) {
  return !!(typeof data === 'object' && data && data.toString() === '[object Object]')
}
