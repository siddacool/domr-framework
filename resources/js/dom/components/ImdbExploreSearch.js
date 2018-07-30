import { Component } from '../DOMRFramework/source/';
import goodOlAjax from '../utils/good-ol-ajax-promise';

/*http://api.tvmaze.com/lookup/shows?imdb=tt0944947*/

function populateShowInfo(show) {
  const thisShow = show.show;
  const imdbid = thisShow.id;

  thisShow.imdbid = imdbid;

  return `
    <li class="list" data-tvamaze-id="${thisShow.id}">
      <a href="#/eg/imdbx?title=${thisShow.imdbid}" data-tvamaze-id="${thisShow.id}" data-imdb-id="${thisShow.imdbid}">
        <span class="list__name" data-alt="${thisShow.name}">${thisShow.name}</span>
      </a>
    </li>
  `;
}

function fillSearchList(data) {
  const list = document.getElementById('imdbx-search-list');

  list.innerHTML = '';

  if (data.length && data.length > 0) {
    list.innerHTML = `
      ${data.map(show => populateShowInfo(show)).join('')}
    `;
  } else {
    list.innerHTML = '<li class="no-data">No Reuslts</li>';
  }
}

export default class extends Component {
  constructor(api) {
    super();
    this.api = api;
  }

  Markup() {
    return `
      <div class="imdbx__search">
        <input type="text" id="imdbx-search-input" placeholder="Search Tv Shows"/>
        <ul id="imdbx-search-list"></ul>
      </div>
    `;
  }

  AfterRenderDone() {
    const search = document.getElementById('imdbx-search-input');
    const api = this.api;
    const timeInterval = 1000;
    let typeTimer;

    search.addEventListener('input', (e) => {
      clearTimeout(typeTimer);
      typeTimer = setTimeout(() => {
        const thisSelf = e.target;

        if (thisSelf.value && thisSelf.value.trim() !== '') {
          const searchApi = `${api}/search/shows?q=${thisSelf.value}`;

          goodOlAjax(searchApi)
          .then((imdb) => {
            fillSearchList(imdb);
          })
          .catch((err) => {
            console.log(err);
          });
        } else {
          const list = document.getElementById('imdbx-search-list');
          list.innerHTML = '';
        }
      }, timeInterval);
    });
  }
}
