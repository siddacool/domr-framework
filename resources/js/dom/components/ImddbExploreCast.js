import { Component } from '../DOMRFramework/source/';
import goodOlAjax from '../utils/good-ol-ajax-promise';

function populateCastInfo(castObj, target) {
  const thisSelf = target;
  const castInfo = castObj;

  thisSelf.innerHTML = `
    ${castInfo.map(cast => `
      <li class="show__cast__list" data-person="${cast.person.id}" data-character="${cast.character.id}">
        <div class="image">
          <img src="${cast.person.image.medium}" alt="" />
        </div>
        <div class="name">
          <span class="character">${cast.character.name}</span>
          <span class="person">${cast.person.name}</span>
        </div>
      </li>
    `).join('')}
  `;
}

export default class extends Component {
  constructor(api, showId) {
    super();
    this.api = api;
    this.show_id = showId;
  }

  Markup() {
    return `
      <ul class="show__cast" data-alt="${this.show_id}">
      </ul>
    `;
  }

  AfterRenderDone() {
    const thisSelf = this.GetThisComponent();
    const api = this.api;
    const showId = this.show_id;
    const searchApi = `${api}/shows/${showId}/cast`;

    goodOlAjax(searchApi)
    .then((cast) => {
      if (cast.length) {
        populateCastInfo(cast, thisSelf);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
