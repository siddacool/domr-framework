import ImdbExploreContainer from '../containers/ImdbExploreContainer';
import env from '../../../../env';

const protocol = env.APP_ENV === 'production' ? 'https' : 'http';

export default function (data) {
  const title = data
                && data.query
                && data.query.title
                && data.query.title.trim() !== ''
                ? data.query.title
                : '';

  const wrapper = document.getElementById('wrapper');
  const imdbX = new ImdbExploreContainer(`${protocol}://api.tvmaze.com`, title);

  wrapper.innerHTML = imdbX.Render();
}
