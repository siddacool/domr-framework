import ImdbExploreView from './views/ImdbExploreView';

const routes = [
  {
    path: '/',
    view: console.log('called'),
    title: 'homepage',
    isDefault: true,
  },
  {
    path: '/eg',
    view: console.log('examples list'),
    title: 'examples list',
  },
  {
    path: '/eg/imdbx',
    view: ImdbExploreView,
    title: 'IMDB Explore',
  },
];

export default routes;
