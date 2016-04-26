function hasInput(inputName) {
	return _.has(this.schema.inputs, inputName);
}

export default hasInput;
