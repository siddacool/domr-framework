import groupBy from 'lodash/groupBy';
import { Component } from '../DOMRFramework/source/';
import Episode from './ImddbExploreEpisode';
import goodOlAjax from '../utils/good-ol-ajax-promise';

let curruntColor;
const chooseRandom = (number) => {
  return Math.floor(Math.random() * number);
};

function randomColor() {
  const colors = ['#ff5630', '#36b37e', '#00b8d9', '#0065ff', '#6554c0'];
  const number = colors.length;
  let random = chooseRandom(number);

  if (curruntColor && curruntColor === colors[random]) {
    if (colors[random + 1]) {
      random += 1;
    } else {
      random -= 1;
    }
  }

  return colors[random];
}

function makeEpisodes(api, episodeData, bgColor) {
  const episode = new Episode(api, episodeData);

  return `
    <li class="show__episodes__sub-list" data-episode="${episodeData.id}">
      <span class="episode pill" style="color:#fff; background-color:${bgColor};" data-season="${episodeData.season}" data-episode="${episode.number}">
        E${episodeData.number < 10 ? `0${episodeData.number}` : episodeData.number}
      </span>
      ${episode.Render()}
    </li>
  `;
}

function populateEpisodeInfo(api, episodesObj, target) {
  const thisSelf = target;
  const episodesInfo = episodesObj;
  const seasons = groupBy(episodesInfo, 'season');

  thisSelf.innerHTML = '';

  Object.keys(seasons).forEach((k) => {
    const key = k;
    const episodesArr = seasons[key];
    const bgColor = randomColor();

    curruntColor = bgColor;

    thisSelf.innerHTML += `
      <li class="show__episodes__list">
        <ol>
          <span class="season pill" style="color:#fff; background-color:${bgColor};">Season ${key < 10 ? `0${key}` : key}</span>
          ${episodesArr.map(episode => makeEpisodes(api, episode, bgColor)).join('')}
        </ol>
      </li>
    `;
  });
}

export default class extends Component {
  constructor(api, showId) {
    super();
    this.api = api;
    this.show_id = showId;
  }

  Markup() {
    return `
      <ul class="show__episodes" data-alt="${this.show_id}">
      </ul>
    `;
  }

  AfterRenderDone() {
    const thisSelf = this.GetThisComponent();
    const api = this.api;
    const showId = this.show_id;
    const searchApi = `${api}/shows/${showId}/episodes`;

    goodOlAjax(searchApi)
    .then((episodes) => {
      if (episodes.length) {
        populateEpisodeInfo(api, episodes, thisSelf);
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
}
