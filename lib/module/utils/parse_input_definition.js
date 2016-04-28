import { Module } from 'meteor/jagi:astronomy';
import { Match } from 'meteor/check';

const typePattern = Match.OneOf(Function, [Function]);
const throwParseError = Module.get('core').utils.throwParseError;
const parseValidators = Module.get('validators').utils.parseValidators;

function parseInputDefinition(fieldDefinition, fieldName, className) {
  if (!Match.test(fieldDefinition, Object)) {
    return;
  }
  if (!fieldDefinition.hasOwnProperty('input')) {
    return;
  }

  let inputDefinition = fieldDefinition.input;
  if (Match.test(inputDefinition, typePattern)) {
    inputDefinition = {
      name: fieldName,
      type: fieldDefinition
    };
  } else if (Match.test(inputDefinition, Object)) {
    inputDefinition = _.extend(
      _.omit(fieldDefinition, 'input'),
      inputDefinition, {
      name: fieldName,
    });

		if (_.has(inputDefinition, 'validators')) {
			parseValidators(
				inputDefinition.validators, [{
					'class': className
				}, {
          'property': 'fields'
        }, {
					'field': fieldName
				}, {
          'property': 'input'
				}, {
					'property': 'validators'
				}]
			);
    }
  } else {
    throwParseError([{
        'class': className
      }, {
        'property': 'fields'
      }, {
        'field': fieldName
      }, {
        'property': 'input'
      },
      'Input definition has to be an object or type'
    ]);
  }
  return inputDefinition;
}

export default parseInputDefinition;
