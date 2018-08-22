import Sidebar from '../components/ConfigSidebar';
import ConfigDescription from '../components/ConfigDescription';
import Navbar from '../components/Navbar';

export default function (configArr, activeTopic) {
  const sidebar = Sidebar(configArr, activeTopic);
  const description = ConfigDescription[activeTopic];
  const navbar = Navbar('Getting Started..', true);

  return `
    <div class="config">
      ${navbar}
      ${sidebar}
      <div class="description">
        <div class="container">
           ${description()}
        </div>
      </div>
    </div>
  `;
}
