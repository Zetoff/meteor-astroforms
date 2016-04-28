import { Module } from 'meteor/jagi:astronomy';

import isValidInputType from './is_valid_input_type.js';

const throwParseError = Module.get('core').utils.throwParseError;

/**
 * Validates an input.
 *
 * @param  {Input|Object} input
 *  Object to validate
 * @param  {Array} parseContext
 *  Parse context so it can be shown to the user if an error is thrown. See
 *  details parameter in {@see throwParseError}.
 * @return {Input}
 *  Validated Input instance.
 * @throws {TypeError}
 */
function validateInput(input, parseContext = []) {
  if (isValidInputType(input)) {
    return input;
  } else if (Match.test(input, Object)) {
    // is not a valid input, check if it can be created
    if (!_.has(input, 'type')) {
      throwParseError(_.union(parseContext, ["Type not defined"]));
    }
    if (!isValidInputType(input.type)) {
      throwParseError(_.union(parseContext, ["Type must be a valid Input class"]));
    }
    // create it
    return new input.type(input);
  } else {
    throwParseError(_.union(parseContext, ["Input must be an object or a valid Input class"]));
  }
}

export default validateInput;
