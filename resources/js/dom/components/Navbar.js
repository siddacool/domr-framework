import ConfigToggle from '../components/ConfigToggle';

export default function (title = '', isHamburger = false) {
  const configToggle = new ConfigToggle();

  return `
    <nav class="navbar">
      ${isHamburger ? configToggle.Render() : ''}
      <span class="navbar__title">${title}</span>
      <ol class="navbar__links">
        <li class="navbar__links__li navbar__links__li--homepage">
          <b><a href="#/" title="Homepage">DOMR</a></b>
        </li>
        <li class="navbar__links__li navbar__links__li--github">
          <a href="https://github.com/siddacool/domr-framework" title="Github Repo" target="_blank" rel="noopener">
            <svg role="img" data-id="full" class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconmonstr-github-1"></use>
            </svg>
          </a>
        </li>
        <li class="navbar__links__li navbar__links__li--npm">
          <a href="https://www.npmjs.com/package/domr-framework" title="NPM Package" target="_blank" rel="noopener">
            <svg role="img" data-id="full" class="icon">
              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-npm-svg-icon"></use>
            </svg>
          </a>
        </li>
      </ol>
    </nav>
  `;
}
