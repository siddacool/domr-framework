import subPath from './utils/sub-path-route-maker';
import HomePageView from './views/HomePageView';
import ConfigView from './views/ConfigView';
import CheckListView from './views/CheckListView';
import ImdbExploreView from './views/ImdbExploreView';

const main = [
  {
    path: '/',
    view: HomePageView,
    title: 'homepage',
    isDefault: true,
  },
  {
    path: '/config/',
    view: ConfigView,
    title: 'Get Started',
  },
  {
    path: '/config/:topic',
    view: ConfigView,
    title: 'Get Started',
  },
];

const examples = subPath('/eg', [
  {
    path: '',
    view: console.log('examples list'),
    title: 'examples list',
  },
  {
    path: '/list',
    view: CheckListView,
    title: 'List',
  },
  {
    path: '/imdbx',
    view: ImdbExploreView,
    title: 'IMDB Explore',
  },
]);

const routes = [...main, ...examples];

export default routes;
