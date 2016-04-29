import Input from './input.js';

class CheckBox extends Input {
  constructor(definition = {}) {
    super(definition);

    this.options = definition.options;
  }

  //getters and setters
  get type() {
    return 'checkbox';
  }
  set options(value) {
    // this.constructor.checkOptions(value);
    this._props.options = value;
  }
  get options() {
    return this._props.options;
  }
}

export default CheckBox;
