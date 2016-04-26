import isValidInputType from './is_valid_input_type.js';

/**
 * Validates an input.
 *
 * @param  {Input|Object} input
 *  Object to validate
 * @return {Input}
 *  Validated Input instance.
 * @throws {TypeError}
 */
function validateInput(input) {
  if (isValidInputType(input)) {
    return input;
  } else if (Match.test(input, Object)) {
    if (!_.has(input, 'type')) {
      throw new TypeError("Type property not defined");
    }
    if (!isValidInputType(input.type)) {
      throw new TypeError("Type property must be a valid Input class");
    }
    return new input.type(input);
  } else {
    throw new TypeError("Input must be an object or a valid Input class");
  }
}

export default validateInput;
