import isValidInputType from '../utils/is_valid_input_type.js';

function getInputByType(inputType) {
	if (!isValidInputType(inputType)) {
		throw new TypeError("Invalid Input type");
	}
	return _.filter(this.getInputs(), function(input) {
		return input instanceof inputType;
	});
}

export default getInputByType;
