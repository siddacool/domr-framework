import ConfigContainer from '../containers/ConfigContainer';

const configArr = [
  {
    id: 'install',
    name: 'Install',
  },
  {
    id: 'router',
    name: 'Router',
  },
  {
    id: 'view',
    name: 'View',
  },
  {
    id: 'component',
    name: 'Component',
  },
  {
    id: 'render',
    name: 'Render Methods',
  },
];

export default function (data) {
  const wrapper = document.getElementById('wrapper');
  const defaultTopic = 'install';
  const getTopic = data && data.metadata && data.metadata.topic
                   ? data.metadata.topic
                   : defaultTopic;
  const isTopicPresent = configArr.filter(obj => obj.id === getTopic);
  const activeTopic = isTopicPresent.length !== 0 ? isTopicPresent[0].id : defaultTopic;
  const config = new ConfigContainer(configArr, activeTopic);

  wrapper.innerHTML = config.Render();
}
