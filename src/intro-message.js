import { defineElement } from "./decorators";

@defineElement("intro-message")
class IntroMessage extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    this.wrapper = this.createElement("div", "intro-message");
    this.title = this.createElement("h1", "intro-message__title");
    this.text = this.createElement("div", "intro-message__text");

    this.title.textContent = this.getAttribute("title");
    this.text.textContent = this.getAttribute("text");

    shadow.appendChild(this.wrapper);
    this.wrapper.appendChild(this.title);
    this.wrapper.appendChild(this.text);
  }

  createWrapper() {
    const elem = document.createElement("div");
    elem.classList.add("intro-message");
    return elem;
  }

  createTitle() {
    const elem = document.createElement("h1");
    elem.classList.add("intro-message__title");
    return elem;
  }

  createElement(tag, klass) {
    const elem = document.createElement(tag);
    elem.classList.add(klass);
    return elem;
  }
}

export default IntroMessage;
