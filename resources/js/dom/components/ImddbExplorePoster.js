import { Component } from '../DOMRFramework/source/';

export default class extends Component {
  constructor(show) {
    super();
    this.show = show;
  }

  Markup() {
    return `
      <div class="show__poster">
        <img src="${this.show.image.medium}" data-src="${this.show.image.original}" alt="" />
      </div>
    `;
  }

  AfterRenderDone() {
    const thisSelf = this.GetThisComponent();
    const img = thisSelf.querySelector('img');

    if (img.getAttribute('data-src') && img.getAttribute('data-src') !== '') {
      const ogImage = img.getAttribute('data-src');

      setTimeout(() => {
        img.setAttribute('src', ogImage);
      }, 1400);
    }
  }
}
