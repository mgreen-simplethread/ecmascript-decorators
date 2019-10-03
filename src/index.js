import "./styles.css";
import { logged, wrap } from "./decorators";
import "./intro-message";

function logBeforeAfter(func, ...args) {
  console.log("Before run func", func.name);
  console.log("With args:", ...args);
  const result = func(...args);
  console.log("after run func");
  return result;
}

class DecoratorExamples {
  @logged sayHello(name) {
    console.log("Saying hi to %s", name);
  }

  @wrap(logBeforeAfter) sayMessage(name, message) {
    console.log(`${message}, ${name}`);
  }
}

const test = new DecoratorExamples();
test.sayHello("Mike");
test.sayMessage("Jimbo", "Yo!");
