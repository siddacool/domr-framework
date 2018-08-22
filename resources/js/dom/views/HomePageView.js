import HomePageContainer from '../containers/HomePageContainer';

export default function () {
  const wrapper = document.getElementById('wrapper');
  const home = new HomePageContainer();

  wrapper.innerHTML = home.Render();
}
