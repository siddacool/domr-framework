import ChecklistContainer from '../containers/ChecklistContainer';

export default function () {
  const wrapper = document.getElementById('wrapper');
  const checklistContainer = new ChecklistContainer();

  wrapper.innerHTML = checklistContainer.Render();
}
