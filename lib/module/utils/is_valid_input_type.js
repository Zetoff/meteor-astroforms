import Input from '../inputs/input.js';

function isValidInputType(inputType) {
  try {
    return inputType.prototype instanceof Input;
  } catch(ex) {
    return false;
  }
}

export default isValidInputType;
