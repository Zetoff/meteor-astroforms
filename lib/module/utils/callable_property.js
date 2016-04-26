
function callableProperty(value, ...args) {
  if (_.isFunction(value)) {
    return value.call(this, ...args);
  }
  return value;
}

export default callableProperty;
