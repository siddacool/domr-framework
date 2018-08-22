import { Component } from '../DOMRFramework/source/';
import Storage from '../utils/Storage';
import processChecklist from '../utils/checklist-process';
import ChecklistAdd from '../components/ChecklistAdd';

function storage(cookie) {
  return new Storage(cookie);
}

function syncListItems(cookie) {
  const ul = document.getElementById('checklist-ul');
  const thisCookie = cookie;

  if (ul.querySelectorAll('li')[0]) {
    const li = ul.querySelectorAll('li');

    li.forEach((list) => {
      const thisLi = list;
      const id = thisLi.getAttribute('data-id');

      if (thisCookie.fetchById(id)) {
        const text = thisLi.textContent.trim();
        const isChecked = thisLi.querySelector('input').checked;

        thisCookie.update(id, {
          text,
          isChecked,
        });
      } else {
        thisCookie.remove(id);
      }
    });
  } else {
    thisCookie.clear();
  }
}

export default class extends Component {
  constructor() {
    super();
    this.cookie = 'domr-framework-001-cookie-checklist';
    this.storage = storage(this.cookie);
  }

  Markup() {
    const add = new ChecklistAdd(this.cookie);

    return `
      <div class="checklist">
        <div class="checklist__header">
          <div class="container">
            ${add.Render()}
          </div>
        </div>
        <div class="checklist__body show">
          <div class="container">
            <ul id="checklist-ul"></ul>
          </div>
        </div>
      </div>
    `;
  }

  AfterRenderDone() {
    const ul = document.getElementById('checklist-ul');
    const cookie = this.storage;

    processChecklist(cookie);

    ul.addEventListener('click', (e) => {
      if (e.target.matches('input')) {
        syncListItems(cookie);
      } else if (e.target.matches('span')) {
        const li = e.target.parentElement;
        const id = li.getAttribute('data-id');
        const text = li.textContent.trim();
        cookie.update(id, {
          history: text,
        });
        e.target.setAttribute('contenteditable', true);
        e.target.focus();
      } else if (e.target.matches('a.close')) {
        e.preventDefault();
        const li = e.target.parentElement;
        const id = li.getAttribute('data-id');

        li.parentElement.removeChild(li);
        cookie.remove(id);
      } else if (e.target.matches('a.undo')) {
        e.preventDefault();
        const li = e.target.parentElement;
        const id = li.getAttribute('data-id');
        const span = li.querySelector('span');
        const fetch = cookie.fetchById(id);

        if (fetch.history && fetch.history !== '') {
          span.textContent = fetch.history;

          cookie.update(id, {
            text: fetch.history,
          });
        }
      }
    });

    ul.addEventListener('focusout', () => {
      ul.querySelectorAll('span').forEach((s) => {
        s.setAttribute('contenteditable', false);
      });
      syncListItems(cookie);
    });
  }
}
