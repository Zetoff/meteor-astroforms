import callableProperty from '../utils/callable_property.js';

class Input {
  constructor(definition = {}) {
    _.defaults(definition, {
      optional: false,
      immutable: false,
      validators: [],
    });
    this._props = {
      name: definition.name, //TODO name is required
      validators: definition.validators, //TODO
    };
    this.label = definition.label;
    this.description = definition.description;
    this.optional = definition.optional;
    this.immutable = definition.immutable;
  }
  getProps() {
    const props = {};
    _.each(this._props, (value, name) => {
      props[name] = this[name] || value;
    });
    return props;
  }
  getHtmlAttributes() {
    return {
      type: this.type,
      required: !this.optional,
      disabled: this.immutable,
    };
  }
  // getters and setters
  get name() {
    return this._props.name;
  }
  get type() {}
  set label(value) {
    this._props.label = value;
  }
  get label() {
    return this._props.label;
  }
  set description(value) {
    this._props.description = value;
  }
  get description() {
    return this._props.description;
  }
  set optional(value) {
    this._props.optional = value;
  }
  get optional() {
    return callableProperty.call(this, this._props.optional);
  }
  set immutable(value) {
    this._props.immutable = value;
  }
  get immutable() {
    return callableProperty.call(this, this._props.immutable);
  }
}

export default Input;
