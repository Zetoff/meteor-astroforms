import validateInput from '../utils/validate_input.js';

function onApplyDefinition(Class, parsedDefinition, className) {
  _.each(parsedDefinition.inputs, function(inputDefinition, inputName) {
    const input = validateInput(inputDefinition, [
      {
        'class': className
      }, {
        'property': 'fields'
      }, {
        'field': inputName
      }, {
        'property': 'input'
      }, {
        'property': 'type'
      }
    ]);
    Class.schema.inputs[inputName] = input;
  });
}

export default onApplyDefinition;
