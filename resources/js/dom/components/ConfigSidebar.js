function populateList(obj, activeLink) {
  return `
    <li><a href="#/config/${obj.id}" ${activeLink === obj.id ? 'class="active"' : ''}>${obj.name}</a></li>
  `;
}

export default function (configArr, activeLink = 'install') {
  return `
    <ul class="sidebar">
      ${configArr.map(l => populateList(l, activeLink)).join('')}
    </ul>
  `;
}
