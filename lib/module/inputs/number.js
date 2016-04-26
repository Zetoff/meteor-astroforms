import TextField from './textfield.js';

class InputNumber extends TextField {
  constructor(definition = {}) {
    super(definition);

    this.max = definition.max;
    this.min = definition.min;
    this.step = definition.step;
  }
  getHtmlAttributes() {
    return _.extend(super.getHtmlAttributes(), {
      max: this.max,
      min: this.min,
      step: this.step,
    });
  }
  // getters and setters
  get type() {
    return 'number';
  }
  set max(value) {
    this._props.max = value;
  }
  get max() {
    return this._props.max;
  }
  set min(value) {
    this._props.min = value;
  }
  get min() {
    return this._props.min;
  }
  set step(value) {
    this._props.step = value;
  }
  get step() {
    return this._props.step;
  }
}

export default InputNumber;
