// Class static methods.
import getInput from '../class_static_methods/get_input.js';
import getInputsNames from '../class_static_methods/get_inputs_names.js';
import getInputs from '../class_static_methods/get_inputs.js';
import getInputByType from '../class_static_methods/get_input_by_type.js';
import hasInput from '../class_static_methods/has_input.js';

function onInitClass(Class, className) {
  // Class static methods.
  Class.getInput = getInput;
  Class.getInputsNames = getInputsNames;
  Class.getInputs = getInputs;
  Class.getInputByType = getInputByType;
  Class.hasInput = hasInput;
}

export default onInitClass;
