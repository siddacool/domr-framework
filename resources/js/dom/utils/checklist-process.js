import Item from '../components/ChecklistItem';

function makeLi(data) {
  const item = Item(data.id, data.text, data.isChecked);

  return item;
}

function processChecklist(cookie) {
  const ul = document.getElementById('checklist-ul');

  const thisCookie = cookie.get();

  ul.innerHTML = `
    ${thisCookie.map(data => makeLi(data)).join('')}
  `;
}

export default processChecklist;
