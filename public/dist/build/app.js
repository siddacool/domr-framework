/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public/dist/build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocationSet = __webpack_require__(12);

var _hashLocationSet2 = _interopRequireDefault(_hashLocationSet);

var _hashLocationGet = __webpack_require__(13);

var _hashLocationGet2 = _interopRequireDefault(_hashLocationGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function loc() {
  var originalHash = location.hash;
  var path = originalHash;
  var search = '';
  var query = '';

  if (path.includes('?')) {
    var searchQuery = path.split('?');
    path = searchQuery[0];
    search = searchQuery[1].replace(/\//g, '');

    if (search !== '') {
      var obj = {};
      var filterString = search.split('&');

      for (var i = 0; i < filterString.length; i++) {
        var splitString = filterString[i].split('=');
        var field = splitString[0];
        var value = splitString[1];

        obj[field] = value;
      }
      query = obj;
    }
  }

  if (path.endsWith('/') && !path.endsWith('#/')) {
    var pathSlice = path.slice(0, -1);

    path = pathSlice.replace('#', '');
  } else {
    path = path.replace('#', '');
  }

  return {
    hash: originalHash.replace('#', ''),
    path: path,
    search: search,
    query: query,
    set: _hashLocationSet2.default,
    get: _hashLocationGet2.default
  };
}

var hashLocation = loc;

exports.default = hashLocation;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.utils = exports.Router = exports.Component = undefined;

var _Component = __webpack_require__(5);

var _Component2 = _interopRequireDefault(_Component);

var _Router = __webpack_require__(9);

var _Router2 = _interopRequireDefault(_Router);

var _utils = __webpack_require__(14);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Component = _Component2.default;
exports.Router = _Router2.default;
exports.utils = _utils2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var isHamburger = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var configToggle = new _ConfigToggle2.default();

  return '\n    <nav class="navbar">\n      ' + (isHamburger ? configToggle.Render() : '') + '\n      <span class="navbar__title">' + title + '</span>\n      <ol class="navbar__links">\n        <li class="navbar__links__li navbar__links__li--homepage">\n          <b><a href="#/" title="Homepage">DOMR</a></b>\n        </li>\n        <li class="navbar__links__li navbar__links__li--github">\n          <a href="https://github.com/siddacool/domr-framework" title="Github Repo" target="_blank" rel="noopener">\n            <svg role="img" data-id="full" class="icon">\n              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconmonstr-github-1"></use>\n            </svg>\n          </a>\n        </li>\n        <li class="navbar__links__li navbar__links__li--npm">\n          <a href="https://www.npmjs.com/package/domr-framework" title="NPM Package" target="_blank" rel="noopener">\n            <svg role="img" data-id="full" class="icon">\n              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-npm-svg-icon"></use>\n            </svg>\n          </a>\n        </li>\n      </ol>\n    </nav>\n  ';
};

var _ConfigToggle = __webpack_require__(18);

var _ConfigToggle2 = _interopRequireDefault(_ConfigToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

__webpack_require__(28);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _source = __webpack_require__(1);

var _routes = __webpack_require__(15);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _source.Router(_routes2.default);

router.Start();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createElement = __webpack_require__(6);

var _createElement2 = _interopRequireDefault(_createElement);

var _lookup = __webpack_require__(7);

var _lookup2 = _interopRequireDefault(_lookup);

var _randomizer = __webpack_require__(8);

var _randomizer2 = _interopRequireDefault(_randomizer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class {
  constructor() {
    var _this = this;

    var domrid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'domr-component';

    this.createElement = _createElement2.default;
    this.domrid = domrid + '-' + (0, _randomizer2.default)(7);
    this.target = function () {
      return (0, _lookup2.default)(_this.domrid);
    };
    this.GetThisComponent = this.target;
    this.GetDomrID = this.domrid;
    this.handlingParent = document.querySelector('body');
  }

  // debug
  errorHandler(field, error) {
    var err = '_ ' + field + ': ' + error;
    this.ErrorLog(err);
  }
  // OnError
  ErrorLog(err) {}

  // Markup
  Markup() {
    // HTML DOM/Markup goes here
    return '';
  }

  // Events
  deligateEvents(childen, eventName, eventAction) {
    var _this2 = this;

    this.handlingParent.addEventListener(eventName, function (e) {
      var event = e;
      if (event.target) {
        if (event.target.matches(childen)) {
          event.closest = false;
          eventAction(event.target, event);
          return;
        } else if (event.target.closest(childen)) {
          event.closest = true;
          event.closestDomrId = _this2.domrid;
          event.closestElm = childen;
          eventAction(event.target.closest(childen), event);
          return;
        }
      }
    });
  }

  On(eventName, eventAction) {
    this.deligateEvents('[data-domr-id="' + this.domrid + '"]', eventName, eventAction);
  }

  Click(eventAction) {
    this.On('click', eventAction);
  }

  Mouseover(eventAction) {
    this.On('mouseover', eventAction);
  }

  Mouseout(eventAction) {
    this.On('mouseout', eventAction);
  }

  Input(eventAction) {
    this.On('input', eventAction);
  }

  Blur(eventAction) {
    this.On('blur', eventAction);
  }

  Keydown(eventAction) {
    this.On('keydown', eventAction);
  }

  Keypress(eventAction) {
    this.On('keypress', eventAction);
  }

  Keyup(eventAction) {
    this.On('keyup', eventAction);
  }

  Events() {}
  // This one will house the events


  // AfterRender
  AfterRenderDone() {}

  delayedContent() {
    var _this3 = this;

    setTimeout(function () {
      if (_this3.target()) {
        _this3.AfterRenderDone();
      }
    }, 50);
  }

  optimizedDom() {
    this.Events();
    return this.createElement(this.Markup(), this.domrid);
  }

  // Add Events
  // Render
  Render() {
    this.delayedContent();
    return this.optimizedDom();
  }

  AddTo(parent) {
    if (parent) {
      parent.insertAdjacentHTML('beforeend', this.optimizedDom());
      this.delayedContent();
    } else {
      this.errorHandler('AddTo', 'parent not found');
    }
  }

  AddFromStartTo(parent) {
    if (parent) {
      parent.insertAdjacentHTML('afterbegin', this.optimizedDom());
      this.delayedContent();
    } else {
      this.errorHandler('AddFromStartTo', 'parent not found');
    }
  }

  Before(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('beforebegin', this.optimizedDom());
      this.delayedContent();
    } else {
      this.errorHandler('Before', 'sibling not found');
    }
  }

  After(sibling) {
    if (sibling) {
      sibling.insertAdjacentHTML('afterend', this.optimizedDom());
      this.delayedContent();
    } else {
      this.errorHandler('After', 'sibling not found');
    }
  }

  Replace(sibling) {
    if (sibling) {
      var parent = sibling.parentElement;

      if (parent) {
        sibling.insertAdjacentHTML('afterend', this.optimizedDom());
        parent.removeChild(sibling);
        this.delayedContent();
      } else {
        this.errorHandler('Replace', 'sibling has no parentElement');
      }
    } else {
      this.errorHandler('Replace', 'sibling not found');
    }
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function createElement(str, domrDataId) {
  var div = document.createElement('div');
  div.innerHTML = str;
  var container = document.createDocumentFragment();
  for (var i = 0; i < div.childNodes.length; i++) {
    var node = div.childNodes[i].cloneNode(true);
    container.appendChild(node);
  }

  if (domrDataId) {
    container.childNodes[1].setAttribute('data-domr-id', domrDataId);
  }
  return container.childNodes[1].outerHTML;
}

exports.default = createElement;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function Lookup(elmId) {
  var targetSelector = document.querySelector("[data-domr-id=\"" + elmId + "\"]");

  if (targetSelector) {
    return targetSelector;
  }
}

exports.default = Lookup;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function randomizer() {
  var stringLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 7;

  return Math.random().toString(36).substr(2, stringLength);
}

exports.default = randomizer;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _addView = __webpack_require__(10);

var _addView2 = _interopRequireDefault(_addView);

var _hashLocation = __webpack_require__(0);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterRoutes = function filterRoutes(routes) {
  var arr = [];
  routes.forEach(function (route) {
    if (route.path && route.view) {
      arr.push(route);
    }
  });

  return arr;
};
var defaults = {
  routes: [],
  config: {
    refreshPage: false
  }
};

exports.default = class {
  constructor() {
    var routes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults.routes;
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaults.config;

    this.routes = filterRoutes(routes);
    this.refreshPage = config.refreshPage || false;
    this.addView = _addView2.default;
  }

  ShowRoutes() {
    console.log(this.routes);
  }

  reloadOnHashChange() {
    var _this = this;

    addEventListener('hashchange', function (e) {
      if (_this.refreshPage) {
        location.reload();
      } else {
        _this.Start();
        e.stopImmediatePropagation();
      }
    });
  }

  Start() {
    var loc = (0, _hashLocation2.default)();
    var locPath = loc.path;
    var candidate = void 0;

    if (locPath === '') {
      location.hash = '#/';
    }

    this.routes.forEach(function (route) {
      var path = route.path;
      if (path.endsWith('/') && path !== '/') {
        path = path.slice(0, -1);
      }

      var routeDataVal = [];
      var routePathMod = path.replace(/([:*])(\w+)/g, function (full, dots, name) {
        routeDataVal.push(name);
        return '([^/]+)';
      }) + '(?:/|$)';
      var routePathModRegEx = locPath.match(new RegExp(routePathMod));

      if (routePathModRegEx) {
        var params = routePathModRegEx.slice(1, routePathModRegEx.length).reduce(function (params, value, index) {
          if (params === null) params = {};
          params[routeDataVal[index]] = value;
          return params;
        }, null);

        route.metadata = params || '';
        route.query = loc.query;
        candidate = route;
      }
    });

    if (candidate) {
      this.addView(candidate);
    } else {
      var routeDefault = this.routes.find(function (o) {
        return o.isDefault === true;
      });
      if (routeDefault) {
        this.addView(routeDefault);
      } else {
        console.error('Page Not Found');
      }
    }

    this.reloadOnHashChange();
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cloneObject = __webpack_require__(11);

var _cloneObject2 = _interopRequireDefault(_cloneObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addView(candidate) {
  var view = candidate.view;
  var skiplist = ['view'];
  var routeData = (0, _cloneObject2.default)(candidate, skiplist);

  if (candidate && view) {
    if (typeof view === 'function') {
      view(routeData);
    } else {
      view;
    }
  }
}

exports.default = addView;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultSkipList = ['view'];

function findInArr(arr, itm) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === itm) {
      return true;
    }
  }
}

function cloneObject(obj) {
  var skipList = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultSkipList;

  var newObj = {};

  Object.keys(obj).forEach(function (key) {
    var value = obj[key];
    var skip = findInArr(skipList, key);

    if (!skip) {
      newObj[key] = value;
    }
  });

  return newObj;
}

exports.default = cloneObject;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = __webpack_require__(0);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setHash(option) {
  var hash = option;
  if (!hash.startsWith('#')) {
    hash = '#' + hash;
  }

  return hash;
}

function setPath(option) {
  var loc = (0, _hashLocation2.default)();
  var searchQuery = loc.search;
  var path = option;

  if (path.startsWith('#')) {
    path = path.slice(0, -1);
  }

  if (searchQuery) {
    if (!path.endsWith('/')) {
      path = path + '/';
    }

    path = path + '?' + searchQuery;
  }

  path = setHash(path);
  return path;
}

function setSearch(option) {
  var search = option;
  var loc = (0, _hashLocation2.default)();
  var path = loc.path;

  if (path.endsWith('/')) {
    path = path.slice(0, -1);
  }

  if (!search.startsWith('?')) {
    search = '?' + search;
  }

  search = setHash(path + '/' + search);

  return search;
}

function loopSearchQuery(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push(key + '=' + obj[key]);
  }

  return '?' + arr.join('&');
}

function setQuery(obj) {
  var searchQuery = loopSearchQuery(obj);
  var query = setSearch(searchQuery);

  return query;
}

function redirectTo(hash) {
  location.hash = hash;
}

function hashLocationSet(field, opt) {
  var setField = field;
  var option = opt;
  var link = void 0;

  switch (setField) {
    case 'search':
      link = setSearch(option);
      break;
    case 'query':
      link = setQuery(option);
      break;
    case 'path':
      link = setPath(option);
      break;
    case 'hash':
      link = setHash(option);
      break;
  }

  if (link) {
    redirectTo(link);
  } else {
    console.error('incorrect set location params');
  }
}

exports.default = hashLocationSet;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = __webpack_require__(0);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hashLocationGet(field) {
  var loc = (0, _hashLocation2.default)();
  var thisField = loc[field];

  if (thisField) {
    return thisField;
  } else {
    console.error('incorrect get location params');
  }
}

exports.default = hashLocationGet;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hashLocation = __webpack_require__(0);

var _hashLocation2 = _interopRequireDefault(_hashLocation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var utils = {
  hashLocation: _hashLocation2.default
};

exports.default = utils;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HomePageView = __webpack_require__(16);

var _HomePageView2 = _interopRequireDefault(_HomePageView);

var _ConfigView = __webpack_require__(19);

var _ConfigView2 = _interopRequireDefault(_ConfigView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*import CheckListView from './views/CheckListView';
import ImdbExploreView from './views/ImdbExploreView';
*/
/*import subPath from './utils/sub-path-route-maker';*/
var main = [{
  path: '/',
  view: _HomePageView2.default,
  title: 'homepage',
  isDefault: true
}, {
  path: '/config/',
  view: _ConfigView2.default,
  title: 'Get Started'
}, {
  path: '/config/:topic',
  view: _ConfigView2.default,
  title: 'Get Started'
}];

/*const examples = subPath('/eg', [
  {
    path: '',
    view: console.log('examples list'),
    title: 'examples list',
  },
  {
    path: '/list',
    view: CheckListView,
    title: 'List',
  },
  {
    path: '/imdbx',
    view: ImdbExploreView,
    title: 'IMDB Explore',
  },
]);

const routes = [...main, ...examples];*/
var routes = main;

exports.default = routes;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var wrapper = document.getElementById('wrapper');
  var home = new _HomePageContainer2.default();

  wrapper.innerHTML = home.Render();
};

var _HomePageContainer = __webpack_require__(17);

var _HomePageContainer2 = _interopRequireDefault(_HomePageContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(1);

var _Navbar = __webpack_require__(2);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = class extends _source.Component {
  constructor() {
    super();
  }

  Markup() {
    var navbar = (0, _Navbar2.default)();

    return '\n      <div class="home">\n        ' + navbar + '\n        <div class="container">\n          <h1>DOMR Framework</h1>\n          <p>Component based JavaScript micro framework equipped with a static router.</p>\n          <div class="code code--single">npm install domr-framework</div>\n          <a href="#/config" class="btn">Get Started</a>\n        </div>\n      </div>\n    ';
  }
};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = __webpack_require__(1);

exports.default = class extends _source.Component {
  constructor() {
    super();
  }

  Markup() {
    return '\n      <a href="#" class="toggle active">\n        <svg role="img" data-id="full" class="icon">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconmonstr-fast-food-1"></use>\n        </svg>\n        <svg role="img" data-id="empty" class="icon" style="display:none">\n          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-iconmonstr-fast-food-2"></use>\n        </svg>\n      </a>\n    ';
  }

  Events() {
    this.Click(function (self, e) {
      e.preventDefault();
      var thisSelf = self;
      var nav = thisSelf.parentElement;
      var config = nav.parentElement;
      var sidebar = config.querySelector('.sidebar');
      var full = thisSelf.querySelector('[data-id="full"]');
      var empty = thisSelf.querySelector('[data-id="empty"]');

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
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (data) {
  var wrapper = document.getElementById('wrapper');
  var defaultTopic = 'install';
  var getTopic = data && data.metadata && data.metadata.topic ? data.metadata.topic : defaultTopic;
  var isTopicPresent = configArr.filter(function (obj) {
    return obj.id === getTopic;
  });
  var activeTopic = isTopicPresent.length !== 0 ? isTopicPresent[0].id : defaultTopic;
  var config = (0, _ConfigContainer2.default)(configArr, activeTopic);

  console.log(data);

  wrapper.innerHTML = config;
};

var _ConfigContainer = __webpack_require__(20);

var _ConfigContainer2 = _interopRequireDefault(_ConfigContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var configArr = [{
  id: 'install',
  name: 'Install'
}, {
  id: 'router',
  name: 'Router'
}, {
  id: 'view',
  name: 'View'
}, {
  id: 'component',
  name: 'Component'
}, {
  id: 'render',
  name: 'Render Methods'
}];

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (configArr, activeTopic) {
  var sidebar = (0, _ConfigSidebar2.default)(configArr, activeTopic);
  var description = _ConfigDescription2.default[activeTopic];
  var navbar = (0, _Navbar2.default)('Getting Started..', true);

  return '\n    <div class="config">\n      ' + navbar + '\n      ' + sidebar + '\n      <div class="description">\n        <div class="container">\n           ' + description() + '\n        </div>\n      </div>\n    </div>\n  ';
};

var _ConfigSidebar = __webpack_require__(21);

var _ConfigSidebar2 = _interopRequireDefault(_ConfigSidebar);

var _ConfigDescription = __webpack_require__(22);

var _ConfigDescription2 = _interopRequireDefault(_ConfigDescription);

var _Navbar = __webpack_require__(2);

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (configArr) {
  var activeLink = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'install';

  return '\n    <ul class="sidebar">\n      ' + configArr.map(function (l) {
    return populateList(l, activeLink);
  }).join('') + '\n    </ul>\n  ';
};

function populateList(obj, activeLink) {
  return '\n    <li><a href="#/config/' + obj.id + '" ' + (activeLink === obj.id ? 'class="active"' : '') + '>' + obj.name + '</a></li>\n  ';
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ConfigDescriptionInstall = __webpack_require__(23);

var _ConfigDescriptionInstall2 = _interopRequireDefault(_ConfigDescriptionInstall);

var _ConfigDescriptionRouter = __webpack_require__(24);

var _ConfigDescriptionRouter2 = _interopRequireDefault(_ConfigDescriptionRouter);

var _ConfigDescriptionView = __webpack_require__(25);

var _ConfigDescriptionView2 = _interopRequireDefault(_ConfigDescriptionView);

var _ConfigDescriptionComponent = __webpack_require__(26);

var _ConfigDescriptionComponent2 = _interopRequireDefault(_ConfigDescriptionComponent);

var _ConfigDescriptionRender = __webpack_require__(27);

var _ConfigDescriptionRender2 = _interopRequireDefault(_ConfigDescriptionRender);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  install: _ConfigDescriptionInstall2.default,
  router: _ConfigDescriptionRouter2.default,
  view: _ConfigDescriptionView2.default,
  component: _ConfigDescriptionComponent2.default,
  render: _ConfigDescriptionRender2.default
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    return "\n    <h2>Install</h2>\n\n    <p>Use <b>npm</b> or <b>yarn</b> to install domr-framework</p>\n\n    <div class=\"code code--single\">npm install domr-framework --save</div>\n\n    <div class=\"code code--single\">yarn add domr-framework</div>\n  ";
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return "\n    <h2>Router</h2>\n\n    <p>A static router for creating hash routes.</p>\n\n    <div class=\"code code--multi\">\n      import { Router } from 'domr-framework';\n      import HomePageView from './views/HomePageView';\n      import ConfigView from './views/ConfigView';\n\n      const router = new Router([\n        {\n          path: '/',\n          view: HomePageView,\n          isDefault: true,\n        },\n        {\n          path: '/config/',\n          view: ConfigView,\n        },\n        {\n          path: '/config/:topic',\n          view: ConfigView,\n        },\n      ]);\n\n      router.Start();\n    </div>\n    <p>Router supports wildcard entries like (*, :name)</p>\n\n\n    <h3>Router class</h3>\n\n    <p>\n      Router() class takes array of routes as the first parameter.\n      The routes object contains two main parameter and one optional isDefault parameter.\n      <ul>\n        <li><b>path</b> - hash url location</li>\n        <li><b>view</b> - a function to execute (without parentheses)</li>\n        <li><b>isDefault (optional)</b> - if set true then the route becomes the default path</li>\n      </ul>\n    </p>\n\n    <h3>.Start()</h3>\n\n    <p>\n      Initializes the router\n    </p>\n\n    <h3>Advanced Router class props</h3>\n    <div class=\"code code--multi\">\n      ...\n\n      const router = new Router(routes, {\n        refreshPage: true,\n      });\n\n      ...\n    </div>\n    <p>\n      Besides the first parameter i.e. the array of routes Router class also takes config obj as the second parameter.\n      <ul>\n        <li><b>refreshPage</b> - if set true then refresh the page on every hash change</li>\n      </ul>\n    </p>\n  ";
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return "\n    <h2>View</h2>\n\n    <p>View is a function that executes when matching route is active.</p>\n\n    <div class=\"code code--multi\">\n      import HomePageContainer from '../containers/HomePageContainer';\n\n      export default function (data) {\n        const wrapper = document.getElementById('wrapper');\n        const home = new HomePageContainer();\n\n        wrapper.innerHTML = home.Render();\n      }\n    </div>\n\n    <p>A view updates root HTML element (#wrapper in this case) with the markup of given <a href=\"#/config/component\">Component</a></p>\n\n    <h3>data parameter</h3>\n    <p>a View takes data as an optional parameter</p>\n\n    <div class=\"code code--multi\">\n      console.log(data);\n\n      //output\n\n      {\n        path: \"/\"\n        metadata: \"\",\n        query: \"\",\n      }\n    </div>\n\n    <p>data obj can have three diffrent params\n      <ul>\n        <li><b>path</b> - hash router path</li>\n        <li><b>metadata</b> - data from wild card entries (e.g :entry) if they are present</li>\n        <li><b>query</b> - data from query entries (e.g ?interval=300&active=true) if they are present</li>\n      </ul>\n    </p>\n  ";
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return "\n    <h2>Component</h2>\n\n    <p>Component is a class with HTML markup and events attached to it.</p>\n\n    <div class=\"code code--multi\">\n      import { Component } from 'domr-framework';\n\n      export default class extends Component {\n        constructor(name) {\n          super();\n          this.name = name;\n        }\n\n        Markup() {\n          return `\n            < a href=\"#\" class=\"toggle active\">Toggle ${this.name} < /a>\n          `;\n        }\n\n        Events() {\n          this.On('click', (self, e) => {\n            e.preventDefault();\n            const thisSelf = self;\n            console.log(thisSelf);\n          });\n        }\n\n        AfterRenderDone() {\n          const thisSelf = this.GetThisComponent();\n        }\n      }\n    </div>\n\n    <h3>Markup()</h3>\n    <p>Markup hosts HTML Markup for the component</p>\n\n    <h3>Events() and this.On()</h3>\n    <p>Events can be added by attaching them to this.On() and placing it inside Events()</p>\n\n    <h3>AfterRenderDone()</h3>\n    <p>as the name suggest delayed actions like loading ajax api can be done from here</p>\n\n    <h3>GetThisComponent()</h3>\n    <p>gets the Component (via querySelector) inside AfterRenderDone()</p>\n\n    <h3>Simplified Common Events</h3>\n    <p>\n      Some commonly used events has their separate shorthands which can replaced this.On().\n       <div class=\"code code--multi\">\n       ...\n\n        Events() {\n          this.Click((self, e) => {});\n\n          this.Mouseover((self, e) => {});\n\n          this.Mouseout((self, e) => {});\n\n          this.Input((self, e) => {});\n\n          this.Blur((self, e) => {});\n\n          this.Keydown((self, e) => {});\n\n          this.Keypress((self, e) => {});\n\n          this.Keyup((self, e) => {});\n        }\n\n        ...\n    </div>\n    </p>\n  ";
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return "\n    <h2>Render</h2>\n\n    <p>To process a Component it has to be rendered. The Component can be rendered inside another Component or a view.</p>\n    <div class=\"code code--multi\">\n      // Example of a view\n      import HomePageComponent from '../containers/HomePageComponent';\n\n      export default function (data) {\n        const wrapper = document.getElementById('wrapper');\n        const home = new HomePageContainer();\n\n        wrapper.innerHTML = home.Render();\n      }\n    </div>\n    \n    <h3>.Render()</h3>\n    <p>.Render() is a the simpliest method of outputting a Component. It simply returns the content inside Markup()\n      and fires Events() and AfterRenderDone() related to the Component.\n    </p>\n\n\n    <h3>Add Methods</h3>\n    <p>There are various add methods which takes the target (parent/sibling) container as parameter and renders the component.</p>\n    \n    <div class=\"code code--multi\">\n      ...\n\n        // wrapper is parent container\n        const wrapper = document.getElementById('wrapper');\n        const home = new HomePageContainer();\n        \n        home.AddTo(wrapper)\n\n      ...\n    </div>\n\n    <p>\n      List of Add Methods\n\n      <table>\n        <tbody>\n          <tr>\n            <th>Method</th>\n            <th>Target</th>\n            <th>Action</th>\n          </tr>\n          <tr>\n            <td>.AddTo()</td>\n            <td>Parent Container</td>\n            <td>Appends into the parent</td>\n          </tr>\n          <tr>\n            <td>.AddFromStartTo()</td>\n            <td>Parent Container</td>\n            <td>Appends from start (prepend) into the parent</td>\n          </tr>\n          <tr>\n            <td>.Before()</td>\n            <td>Sibling Container</td>\n            <td>Renders before the sibling container</td>\n          </tr>\n          <tr>\n            <td>.After()</td>\n            <td>Sibling Container</td>\n            <td>Renders after the sibling container</td>\n          </tr>\n          <tr>\n            <td>.Replace()</td>\n            <td>Sibling Container</td>\n            <td>Replaces the sibling container</td>\n          </tr>\n        </tbody>\n      </table>\n    </p>\n  ";
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);