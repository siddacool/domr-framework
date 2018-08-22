import { Component } from '../DOMRFramework/source/';

export default class extends Component {
  constructor() {
    super();
  }

  Markup() {
    return `
      <div class="home">
        <div class="container">
          <h1>DOMR Framework</h1>
          <p>Component based JavaScript micro framework equipped with a static router.</p>
          <div class="code code--single">npm install domr-framework</div>
          <a href="#/config" class="btn">Get Started</a>
        </div>
      </div>
    `;
  }
}
