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

export function readOnly(_target, _key, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

export function freeze(_target, key, descriptor) {
  descriptor.writable = false;
  descriptor.configurable = false;
  return descriptor;
}

export function enumerable(value) {
  return function(target, key, descriptor) {
    descriptor.enumerable = Boolean(value);
    return descriptor;
  }
}

export function customElement(elemName) {
  return function(target) {
    console.log(target);
    customElements.define(elemName, target);
  };
}

export function debug(target, key, descriptor) {
  console.group('Debug Decorator Output');
  console.log('Target: %O', target);
  console.log('Key: %s', key);
  console.log('Descriptor: %O', descriptor);
  console.groupEnd('Debug Decorator Output');
  return descriptor;
}
