import generateId from './make-time-based-id';

class Storage {
  constructor(cookie) {
    this.cookie = cookie;
  }

  create(data = []) {
    localStorage.setItem(this.cookie, JSON.stringify(data));
  }

  set(data) {
    this.create(data);
  }

  clear() {
    localStorage.removeItem(this.cookie);
  }

  get() {
    if (!localStorage.getItem(this.cookie)) {
      this.create();
    }

    return JSON.parse(localStorage.getItem(this.cookie));
  }

  add(obj) {
    const cookie = this.get();
    const thisObj = obj;

    thisObj.id = generateId();
    cookie.push(thisObj);
    this.set(cookie);
  }

  remove(id) {
    const cookie = this.get();

    cookie.forEach((c, i) => {
      if (c.id === id) {
        cookie.splice(i, 1);
      }
    });

    this.set(cookie);
  }

  update(id, obj) {
    const cookie = this.get();

    cookie.forEach((c, i) => {
      if (c.id === id) {
        Object.keys(obj).forEach((key) => {
          const data = obj[key];
          cookie[i][key] = data;
        });
      }
    });

    this.set(cookie);
  }

  fetch(fieldName, data) {
    const cookie = this.get();
    const arr = [];

    cookie.forEach((c) => {
      if (c[fieldName] && c[fieldName] === data) {
        arr.push(c);
      }
    });

    return arr;
  }

  fetchById(id) {
    const toFetch = this.fetch('id', id);
    return toFetch[0] || '';
  }
}

export default Storage;
