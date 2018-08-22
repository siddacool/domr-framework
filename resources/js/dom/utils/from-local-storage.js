function fromLocalStorage(cookie, data = '') {
  const empty = [];
  const emptyData = JSON.stringify(empty);
  if (data !== '') {
    const stringifyData = JSON.stringify(data);
    localStorage.setItem(cookie, stringifyData);
  } else if (localStorage.getItem(cookie)) {
    return JSON.parse(localStorage.getItem(cookie));
  } else {
    localStorage.setItem(cookie, emptyData);

    return JSON.parse(localStorage.getItem(cookie));
  }
}

export default fromLocalStorage;

