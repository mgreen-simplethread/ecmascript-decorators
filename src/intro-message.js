import { defineElement } from "./decorators";

@defineElement("intro-message")
class IntroMessage extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    this.wrapper = this.createElement("div", "intro-message");
    this.header = this.createElement("h1", "intro-message__title");
    this.content = this.createElement("div", "intro-message__text");

    this.header.textContent = this.getAttribute("header");
    this.content.innerHTML = this.innerHTML;

    shadow.appendChild(this.wrapper);
    this.wrapper.appendChild(this.header);
    this.wrapper.appendChild(this.content);
  }

  createElement(tag, klass) {
    const elem = document.createElement(tag);
    elem.classList.add(klass);
    return elem;
  }
}

export default IntroMessage;
