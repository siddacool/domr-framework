import { Component } from '../DOMRFramework/source/';
import goodOlAjax from '../utils/good-ol-ajax-promise';
import Search from '../components/ImdbExploreSearch';
import ShowCast from '../components/ImddbExploreCast';
import ShowEpisodes from '../components/ImddbExploreEpisodes';

function populateShowInfo(show, api) {
  const thisShow = show;
  const thisApi = api;
  const showCast = new ShowCast(thisApi, thisShow.id);
  const showEpisodes = new ShowEpisodes(thisApi, thisShow.id);
  const imdbxBody = document.getElementById('imdx-main-body');
  const genres = thisShow.genres
                 && thisShow.genres.length
                 ? thisShow.genres
                 : [];
  thisShow.genres = genres;

  imdbxBody.innerHTML = `
    <div class="container">
      <div class="show__block">
        <div class="show__poster">
          <img src="${thisShow.image.medium}" alt="" />
        </div>
      </div>
      <div class="show__block">
        <span class="show__name" data-alt="${thisShow.name}">${thisShow.name}</span>
        <div class="show__info">
          <div class="show__time"></div>
          <div class="show__genre">
            ${thisShow.genres.length ? `
              ${thisShow.genres.map(genre => `<span class="pill pill--info">${genre}</span>`).join('')}
            ` : ''}
          </div>
        </div>
        <div class="show__rating">
          ${thisShow.rating && thisShow.rating.average ?
            `
              <div class="star">
                <svg role="img" class="icon">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconmonstr-star-3"></use>
                </svg>
                <span class="rating" data-alt="${thisShow.rating.average}">${thisShow.rating.average}</span>
              </div>
            ` : ''
          }
        </div>
        <div class="show__description">${thisShow.summary ? thisShow.summary.replace(/<\/?[^>]+(>|$)/g, '') : ''}</div>
      </div>
      <div class="show__block">
        ${showCast.Render()}
      </div>
      <div class="show__block">
        ${showEpisodes.Render()}
      </div>
    </div>
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
          <div class="container">
            ${search.Render()}
          </div>
        </div>
        <div class="imdbx__body show" id="imdx-main-body"></div>
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
        populateShowInfo(imdb, api);
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      console.log('no');
    }
  }
}
