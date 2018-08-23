import { Component } from '../DOMRFramework/source/';
import Sidebar from '../components/ConfigSidebar';
import ConfigDescription from '../components/ConfigDescription';
import Navbar from '../components/Navbar';

export default class extends Component {
  constructor(configArr, activeTopic) {
    super();
    this.arr = configArr;
    this.topic = activeTopic;
  }

  Markup() {
    const sidebar = Sidebar(this.arr, this.topic);
    const description = ConfigDescription[this.topic];
    const navbar = Navbar('Getting Started..', true);

    return `
      <div class="config">
        ${navbar}
        ${sidebar}
        <div class="description">
          <div class="container">
             ${description()}
          </div>
        </div>
      </div>
    `;
  }

  AfterRenderDone() {
    const thisSelf = this.GetThisComponent();
    const pre = thisSelf.querySelectorAll('pre');

    pre.forEach((p) => {
      const code = p.querySelector('code');
      if (code) {
        hljs.highlightBlock(code);
      }
    });
  }
}
