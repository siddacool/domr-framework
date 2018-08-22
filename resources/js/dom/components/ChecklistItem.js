export default function (id, text, checked = false) {
  return `
    <li data-id="${id}">
      <input type="checkbox" ${checked ? 'checked' : ''}/>
      <span>${text}</span>
      <a href="#" class="undo">
        <svg role="img" class="icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconmonstr-undo-7"></use>
        </svg>
      </a>
      <a href="#" class="close">
        <svg role="img" class="icon">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconmonstr-x-mark-2"></use>
        </svg>
      </a>
    </li>
  `;
}
