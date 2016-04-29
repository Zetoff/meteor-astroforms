import Input from './input.js';

class Radio extends Input {
  constructor(definition = {}) {
    super(definition);

    this.options = definition.options;
  }

  //getters and setters
  get type() {
    return 'radio';
  }
  set options(value) {
    // this.constructor.checkOptions(value);
    this._props.options = value;
  }
  get options() {
    return this._props.options;
  }
}

export default Radio;
