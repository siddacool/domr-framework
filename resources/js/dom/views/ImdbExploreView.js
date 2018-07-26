import ImdbExploreContainer from '../containers/ImdbExploreContainer';

export default function (data) {
  const title = data
                && data.query
                && data.query.title
                && data.query.title.trim() !== ''
                ? data.query.title
                : '';

  const wrapper = document.getElementById('wrapper');
  const imdbX = new ImdbExploreContainer('http://api.tvmaze.com', title);


  wrapper.innerHTML = imdbX.Render();
}
