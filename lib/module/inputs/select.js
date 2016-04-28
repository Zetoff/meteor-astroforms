import Input from './input.js';

class Select extends Input {
  constructor(definition = {}){
    super(definition);

    this.options = definition.options;
    this.multiple = definition.multiple;
  }

  getHtmlAttributes() {
    return _.extend(super.getHtmlAttributes(),{
      multiple: this.multiple
    });
  }

  //getters and setters
  get type(){
    return 'select';
  }
  set options(value) {
    // this.constructor.checkOptions(value);
    this._props.options = value;
  }
  get options(){
    return this._props.options;
  }
  set multiple(value) {
    this._props.multiple = value;
  }
  get multiple() {
    return this._props.multiple || false;
  }
  // static methods
  static validateOptions(options) {

  }
  static checkOptions(options) {
    if(!this.validateOptions(options)) {
      throw new Error("adsjkhfl");
    }
  }
}

export default Select;
