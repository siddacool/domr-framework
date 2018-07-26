import { Component } from '../DOMRFramework/source/';

export default class extends Component {
  constructor(src) {
    super();
    this.src = src;
  }

  Markup() {
    return `
      <a href="">
        <img src="${this.src}" alt="" />
        <img src="${this.src}" alt="" />
      </a>
    `;
  }

  Events() {
    this.Click((self, e) => {
      e.preventDefault();
      console.log(e);
      console.log(e.closestDomrId);
      console.log(e.closestElm);
    });
  }
}
