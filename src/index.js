import "./styles.css";
import { debug, logged, wrap, readOnly, enumerable, freeze  } from "./decorators";
import { Porridge, Oatmeal } from './oatmeal-example';
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
  @enumerable(false) notInLoops = 'this is passed over during iteration';

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

window.oatmeal = new Oatmeal();

console.log(`I've got an oatmeal object here: %O`, oatmeal);
console.log('Its viscosity is %d', oatmeal.viscosity);
console.log('That property is marked read-only. Try changing it and see what happens.');
