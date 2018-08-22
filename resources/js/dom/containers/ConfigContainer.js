import Sidebar from '../components/ConfigSidebar';
import ConfigDescription from '../components/ConfigDescription';
import ConfigToggle from '../components/ConfigToggle';

export default function (configArr, activeTopic) {
  const sidebar = Sidebar(configArr, activeTopic);
  const description = ConfigDescription[activeTopic];
  const configToggle = new ConfigToggle();

  return `
    <div class="config">
      <div class="nav">
        ${configToggle.Render()}
        <b><a href="#/">DOMR</a></b>Getting Started..
      </div>
      ${sidebar}
      <div class="description">
        <div class="container">
           ${description()}
        </div>
      </div>
    </div>
  `;
}
