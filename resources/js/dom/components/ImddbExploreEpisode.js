import { Component } from '../DOMRFramework/source/';
import goodOlAjax from '../utils/good-ol-ajax-promise';

export default class extends Component {
  constructor(api, episode) {
    super();
    this.api = api;
    this.episode = episode;
  }

  Markup() {
    return `
      <a href="#" class="name" data-alt="${this.episode.name}" data-ep-id="${this.episode.id}"">
        ${this.episode.name}
      </a>
    `;
  }

  Events() {
    const api = this.api;
    this.Click((self, e) => {
      e.preventDefault();
      const thisSelf = self;
      const li = thisSelf.parentElement;
      const ul = li.parentElement.parentElement.parentElement;
      const epId = thisSelf.getAttribute('data-ep-id');
      const searchApi = `${api}/episodes/${epId}`;

      goodOlAjax(searchApi)
      .then((data) => {
        const allLi = ul.querySelectorAll('li');

        allLi.forEach((lielm) => {
          if (lielm.querySelector('.description')) {
            const description = lielm.querySelector('.description');
            description.parentElement.removeChild(description);
          }
        });

        li.innerHTML += `
          <div class="description">${data.summary ? data.summary.replace(/<\/?[^>]+(>|$)/g, '') : ''}</div>
        `;
      })
      .catch((err) => {
        console.log(err);
      });
    });
  }
}
