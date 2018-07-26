import { Component } from '../DOMRFramework/source/';
import goodOlAjax from '../utils/good-ol-ajax-promise';
import Search from '../components/ImdbExploreSearch';
import Image from '../components/Image';

function populateShowInfo(show) {
  const imdbxBody = document.getElementById('imdx-main-body');
  const thisShow = show;
  const genres = thisShow.genres ? thisShow.genres.join(',') : '';
  const img = new Image(thisShow.image.medium);

  thisShow.genres = genres;

  imdbxBody.innerHTML = `
    <span class="show__name" data-alt="${thisShow.name}">${thisShow.name}</span>
    <span class="show__runtime" data-alt="${thisShow.runtime}">${thisShow.runtime} Mins</span>
    <span class="show__status" data-alt="${thisShow.status}">${thisShow.status}</span>
    <span class="show__genres" data-alt="${thisShow.genres}">${thisShow.genres}</span>
    <span class="show__rating" data-alt="${thisShow.rating.average || ''}">${thisShow.rating.average || ''}</span>
    <div class="show__description">${thisShow.summary ? thisShow.summary.replace(/<\/?[^>]+(>|$)/g, '') : ''}</div>
    ${img.Render()}
  `;
}

export default class extends Component {
  constructor(api, title = '') {
    super();
    this.api = api;
    this.title = title;
  }

  Markup() {
    const search = new Search(this.api);

    if (this.title) {
      console.log('yes');
    } else {
      console.log('no');
    }

    return `
      <div class="imdbx">
        <div class="imdbx__header">
          ${search.Render()}
        </div>
        <div class="imdbx__body show" id="imdx-main-body">
        </div>
      </div>
    `;
  }

  AfterRenderDone() {
    const api = this.api;
    const title = this.title;

    if (title) {
      const endpoint = title.startsWith('tt') ? 'lookup/shows?imdb=' : 'shows/';
      const showApi = `${api}/${endpoint}${title}`;

      goodOlAjax(showApi)
      .then((imdb) => {
        populateShowInfo(imdb);
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      console.log('no');
    }
  }
}
