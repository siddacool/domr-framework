import { Component } from '../DOMRFramework/source/';
import Storage from '../utils/Storage';
import processChecklist from '../utils/checklist-process';

function storage(cookie) {
  return new Storage(cookie);
}

export default class extends Component {
  constructor(cookie) {
    super();
    this.storage = storage(cookie);
  }

  Markup() {
    return `
      <div class="checklist__add">
        <input type="text" id="checklist-add-input" placeholder="Type and hit enter"/>
      </div>
    `;
  }

  AfterRenderDone() {
    const add = document.getElementById('checklist-add-input');
    const cookie = this.storage;

    add.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.which === 13) && e.target.value && e.target.value.trim() !== '') {
        e.preventDefault();

        cookie.add({
          text: e.target.value,
          isChecked: false,
        });

        processChecklist(cookie);

        e.target.value = '';
      }
    });
  }
}
