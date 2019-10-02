export function logged(target, key, descriptor) {
  console.log("Decorated method descriptor:", descriptor);
  console.log("Target:", target);
  const oldValue = descriptor.value;
  const newValue = function logDecorator(...args) {
    console.log("Before run %s", key);
    oldValue(...args);
    console.log("After run %s", key);
  };
  descriptor.value = newValue;
  return descriptor;
}

export function wrap(fn) {
  return function(target, key, descriptor) {
    console.log("property descriptor:", descriptor);
    const prevFunc = descriptor.value;
    const newValue = function wrapped(...args) {
      fn(prevFunc, ...args);
    };
    descriptor.value = newValue;
    return descriptor;
  };
}
