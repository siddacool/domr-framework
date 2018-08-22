import { Component } from '../DOMRFramework/source/';

export default class extends Component {
  constructor() {
    super();
  }

  Markup() {
    return `
      <a href="#" class="toggle active">
        <svg role="img" data-id="full" class="icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconmonstr-fast-food-1"></use>
        </svg>
        <svg role="img" data-id="empty" class="icon" style="display:none">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconmonstr-fast-food-2"></use>
        </svg>
      </a>
    `;
  }

  Events() {
    this.Click((self, e) => {
      e.preventDefault();
      const thisSelf = self;
      const nav = thisSelf.parentElement;
      const config = nav.parentElement;
      const sidebar = config.querySelector('.sidebar');
      const full = thisSelf.querySelector('[data-id="full"]');
      const empty = thisSelf.querySelector('[data-id="empty"]');

      if (thisSelf.classList.contains('active')) {
        sidebar.style.display = 'none';
        full.style.display = 'none';
        empty.style.display = '';
        thisSelf.classList.remove('active');
      } else {
        sidebar.style.display = '';
        full.style.display = '';
        empty.style.display = 'none';
        thisSelf.classList.add('active');
      }
    });
  }
}
