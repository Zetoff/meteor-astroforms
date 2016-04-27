import Input from './input.js';

class TextField extends Input {
  constructor(definition = {}) {
    super(definition);

    this.placeholder = definition.placeholder;
    this.size = definition.size;
    this.maxLength = definition.maxLength;
    this.prefix = definition.prefix || "";
    this.suffix = definition.suffix || "";
  }
  getHtmlAttributes() {
    return _.extend(super.getHtmlAttributes(), {
      placeholder: this.placeholder,
      size: this.size,
      maxLength: this.maxLength,
    });
  }
  // getters and setters
  get type() {
    return 'text';
  }
  set placeholder(value) {
    this._props.placeholder = value;
  }
  get placeholder() {
    return this._props.placeholder;
  }
  set size(value) {
    this._props.size = value;
  }
  get size() {
    return this._props.size;
  }
  set maxLength(value) {
    this._props.maxLength = value;
  }
  get maxLength() {
    return this._props.maxLength;
  }
  set prefix(value) {
    this._props.prefix = value;
  }
  get prefix() {
    return this._props.prefix;
  }
  set suffix(value) {
    this._props.suffix = value;
  }
  get suffix() {
    return this._props.suffix;
  }
}

export default TextField;
