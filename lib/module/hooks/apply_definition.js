import validateInput from '../utils/validate_input.js';

function onApplyDefinition(Class, parsedDefinition, className) {
  _.each(parsedDefinition.inputs, function(inputDefinition, inputName) {
    const input = validateInput(inputDefinition);
    Class.schema.inputs[inputName] = input;
  });
}

export default onApplyDefinition;
