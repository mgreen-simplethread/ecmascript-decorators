import "./styles.css";
import { debug, logged, wrap, readOnly, enumerable, freeze  } from "./decorators";
import "./intro-message";

function logBeforeAfter(func, ...args) {
  console.log("Before run func", func.name);
  console.log("With args:", ...args);
  const result = func(...args);
  console.log("after run func");
  return result;
}

class DecoratorExamples {
  @debug test = 'hello';

  @readOnly permanentId = 123;
  @freeze cantDeleteMe = 'nya nya';

  @logged sayHello(name) {
    console.log("Saying hi to %s", name);
  }

  @wrap(logBeforeAfter) sayMessage(name, message) {
    console.log(`${message}, ${name}`);
  }
}

window.example = new DecoratorExamples();

console.log(`
░█▀▄░█▀▀░█▀▀░█▀█░█▀▄░█▀█░▀█▀░█▀█░█▀▄░█▀▀░█
░█░█░█▀▀░█░░░█░█░█▀▄░█▀█░░█░░█░█░█▀▄░▀▀█░▀
░▀▀░░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀░▀░░▀░░▀▀▀░▀░▀░▀▀▀░▀
`);
console.log('%cWelcome to the ECMAScript decorators example playground!', 'font-weight:bold;color:#ff0000;');
console.log(`There's a global object called example that you can interact with. This is it, right down here:`);
console.log('window.example = %O', example);
