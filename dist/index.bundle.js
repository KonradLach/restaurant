/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/aboutUs.js":
/*!************************!*\
  !*** ./src/aboutUs.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createAboutUs\": () => (/* binding */ createAboutUs)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\nconst createAboutUs = () =>{\n    const aboutSection = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createSection)('about');\n    content.appendChild(aboutSection);\n    const aboutUsPara = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('aboutUsPara');\n    for (let index = 0; index < 3; index++) {\n        aboutUsPara.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createPara)('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam at labore placeat modi soluta porro dolorem distinctio, sunt expedita eos voluptatem ea mollitia, libero inventore doloremque autem minima dolorum dolore'));\n    }\n    const rightSideAboutUs = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('rightSideAboutUs');\n    rightSideAboutUs.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createH)('2','Our Story'));\n    rightSideAboutUs.appendChild(aboutUsPara);\n    const aboutContainer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('aboutContainer');\n    aboutContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('picture1'));\n    aboutContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('picture2'));\n    aboutContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('rightAbout')).appendChild(rightSideAboutUs);\n    aboutSection.appendChild(aboutContainer);\n    const lowerDiv = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('lowerDiv');\n    const breweryImg = document.createElement('img');\n    breweryImg.src = \"img/aboutPicture3.jpeg\";\n    lowerDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createPara)('We are a family-owned business and want to provide our customers with delicious, award-winning, quality wines that are all hand-crafted locally. We provide an wide selection of wines with something to satisfy every person, from unique, fruit-infused wines to traditional white and red varietals and more!'))\n    lowerDiv.appendChild(breweryImg);\n    aboutSection.appendChild(lowerDiv);\n\n};\n\n\n//# sourceURL=webpack://restaurant/./src/aboutUs.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContact\": () => (/* binding */ createContact)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\nconst createContact = () => {\n    const contactSection = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createSection)('contact');\n    content.appendChild(contactSection);\n    const contactContainer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('contactContainer');\n    contactContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createH)('2','Contact Us'));\n    contactSection.appendChild(contactContainer);\n\n    const contactFlex = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('contactFlex');\n    const contactInfo = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('contactInfo');\n    contactInfo.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createPara)('(123)-456-7890'));\n    contactInfo.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createPara)('123 Main St'));\n    contactInfo.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createPara)('Lewiston, ID'));\n    const mapDiv = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('map');\n    contactFlex.appendChild(contactInfo);\n    contactFlex.appendChild(mapDiv);\n    contactContainer.appendChild(contactFlex);\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.createMap)();\n}\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDiv\": () => (/* binding */ createDiv),\n/* harmony export */   \"createH\": () => (/* binding */ createH),\n/* harmony export */   \"createHome\": () => (/* binding */ createHome),\n/* harmony export */   \"createLi\": () => (/* binding */ createLi),\n/* harmony export */   \"createMap\": () => (/* binding */ createMap),\n/* harmony export */   \"createPara\": () => (/* binding */ createPara),\n/* harmony export */   \"createSection\": () => (/* binding */ createSection)\n/* harmony export */ });\n\n\nconst createMap = () =>{\n        var map = L.map('map').setView([46.4214612,-117.0257842], 17.1);\n    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {\n        attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n        maxZoom: 18,\n        id: 'mapbox/streets-v11',\n        tileSize: 512,\n        zoomOffset: -1,\n        accessToken: 'pk.eyJ1Ijoia29ucmFkbGsiLCJhIjoiY2wwdTRma2szMHRxZTNicGt3ZXJlZnBkNiJ9.K-GiCqZxzAhAIMq43oCuIg'\n    }).addTo(map);\n\n    var marker = L.marker([46.421,-117.025]).addTo(map);\n\n}\n\n\nconst createSection = (idName) =>{\n    let section = document.createElement(\"section\");\n    section.setAttribute('id',idName);\n    return section;\n} \n\nconst createDiv = (idName) => {\n    let div = document.createElement(\"div\");\n    div.setAttribute('id',idName);\n    return div;\n}\n\nconst createPara = (text) => {\n    let para = document.createElement(\"p\");\n    para.textContent = text;\n    return para;\n}\n\nconst createLi = (ul,arr) =>{\n    for(let i=0;i< arr.length;i++){\n        let li = document.createElement(\"li\");\n        li.innerHTML = arr[i];\n        ul.appendChild(li)\n    }\n    return ul;\n    \n}\n\nconst createH = (num,text) => {\n    const heading = document.createElement(`h${num}`);\n    heading.innerText = text;\n    return heading\n}\n\n\nconst createHome = () => {\n    const content = document.getElementById('content')\n    \n    //create main picture and title across\n    const mainOverlay = createSection(\"mainOverlay\");\n    content.appendChild(mainOverlay);\n    mainOverlay.appendChild(createDiv('title'));\n\n    //create about section\n    const aboutSection = createSection('about');\n    content.appendChild(aboutSection);\n    const aboutUsPara = createDiv('aboutUsPara');\n    for (let index = 0; index < 3; index++) {\n        aboutUsPara.appendChild(createPara('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam at labore placeat modi soluta porro dolorem distinctio, sunt expedita eos voluptatem ea mollitia, libero inventore doloremque autem minima dolorum dolore'));\n    }\n    const rightSideAboutUs = createDiv('rightSideAboutUs');\n    rightSideAboutUs.appendChild(createH('2','Our Story'));\n    rightSideAboutUs.appendChild(aboutUsPara);\n    const aboutContainer = createDiv('aboutContainer');\n    aboutContainer.appendChild(createDiv('picture1'));\n    aboutContainer.appendChild(createDiv('picture2'));\n    aboutContainer.appendChild(createDiv('rightAbout')).appendChild(rightSideAboutUs);\n    aboutSection.appendChild(aboutContainer);\n\n    const menuSection = createSection('menu');\n    content.appendChild(menuSection);\n    menuSection.appendChild(createH('1','Menu'));\n    const menuContainer = createDiv('menuContainer');\n    const shareables = createDiv('shareables');\n    shareables.classList.add('menuList');\n    shareables.appendChild(createH('2','Shareables'));\n    const shareablesList = document.createElement('ul');\n    shareables.appendChild(createLi(shareablesList,['Bavarian Pretzel','Wings','Nachos', 'Charcuterie', 'Chips & Guac', 'Flatbread']));\n    menuContainer.appendChild(shareables);\n\n    //adding Wine\n    const wine = createDiv('wine');\n    wine.classList.add('menuList');\n    wine.appendChild(createH('2','Wine'));\n    const wineList = document.createElement('ul');\n    wine.appendChild(createLi(wineList,['Wine 1', 'Wine 2', 'Wine 3', 'Wine 4', 'Wine 5']));\n    menuContainer.appendChild(wine);\n\n    //adding Beer\n    const beer = createDiv('beer');\n    beer.classList.add('menuList');\n    beer.appendChild(createH('2','Beer'));\n    const beerList = document.createElement('ul');\n    beer.appendChild(createLi(beerList,['Bud Light', 'Allagash White', 'Miller Light', 'Blue Moon', 'Angry Orchard', 'Boom Bock']));\n    menuContainer.appendChild(beer);\n\n    menuSection.appendChild(menuContainer);\n\n\n    const contactSection = createSection('contact');\n    content.appendChild(contactSection);\n    const contactContainer = createDiv('contactContainer');\n    contactContainer.appendChild(createH('2','Contact Us'));\n    contactSection.appendChild(contactContainer);\n\n    const contactFlex = createDiv('contactFlex');\n    const contactInfo = createDiv('contactInfo');\n    contactInfo.appendChild(createPara('(123)-456-7890'));\n    contactInfo.appendChild(createPara('123 Main St'));\n    contactInfo.appendChild(createPara('Lewiston, ID'));\n    const mapDiv = createDiv('map');\n    contactFlex.appendChild(contactInfo);\n    contactFlex.appendChild(mapDiv);\n    contactContainer.appendChild(contactFlex);\n    createMap();\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _aboutUs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./aboutUs */ \"./src/aboutUs.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\nconst reset = () => {\n    content.innerHTML = '';\n    createHeader();\n}\nconst createFooter = () => {\n    const footer = document.createElement('footer');\n    footer.classList.add('footer');\n    footer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createPara)('Konrad Lach'));\n    const gitHub = document.createElement('a');\n    gitHub.href = 'https://github.com/KonradLach';\n    gitHub.target = '_blank';\n    const gitHubLogo = document.createElement('i');\n    gitHubLogo.classList.add('fab','fa-github');\n    gitHub.appendChild(gitHubLogo);\n    footer.appendChild(gitHub);\n\n\n    const linkedIn = document.createElement('a');\n    linkedIn.href = 'https://www.linkedin.com/in/konrad-lach-338571169/';\n    linkedIn.target = '_blank';\n    const linkedInLogo = document.createElement('i');\n    linkedInLogo.classList.add('fab','fa-linkedin');\n    linkedIn.appendChild(linkedInLogo);\n    footer.appendChild(linkedIn);\n\n    document.getElementById('content').appendChild(footer);\n}\n\n\nconst createHeader = () => {\n\n    let header = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('header');\n    const content = document.getElementById('content');\n    content.appendChild(header);\n    const left = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('left');\n    left.addEventListener('click',() => {\n        reset();\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();\n    })\n    header.appendChild(left);\n    let right = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('right');\n    let headerlist = document.createElement('ul');\n    headerlist.setAttribute('id', 'headerButtons');\n    const homeButton = document.createElement('li');\n    homeButton.innerHTML= 'Home';\n    homeButton.addEventListener('click', () =>{\n        reset();\n        (0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();\n        createFooter();\n    })\n    const aboutUsButton = document.createElement('li');\n    aboutUsButton.innerHTML = 'About Us';\n    aboutUsButton.addEventListener('click',()=>{\n        reset();\n        (0,_aboutUs__WEBPACK_IMPORTED_MODULE_1__.createAboutUs)();\n        createFooter();\n    })\n    const menuButton = document.createElement('li');\n    menuButton.innerHTML = 'Menu';\n    menuButton.addEventListener('click', ()=>{\n        reset();\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__.createMenu)();\n        createFooter();\n    })\n    const contactButton = document.createElement('li');\n    contactButton.innerHTML = 'Contact Us';\n    contactButton.addEventListener('click',()=>{\n        reset();\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__.createContact)();\n        createFooter();\n    })\n    headerlist.appendChild(homeButton);\n    headerlist.appendChild(aboutUsButton);\n    headerlist.appendChild(menuButton);\n    headerlist.appendChild(contactButton);\n    let nav = document.createElement('nav');\n    right.appendChild(nav).appendChild(headerlist);\n    header.appendChild(right);\n\n}\ncreateHeader();\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.createHome)();\ncreateFooter();\n\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\nconst createMenu = () => {\n\n\n    const menuSection = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createSection)('menu');\n    content.appendChild(menuSection);\n    menuSection.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createH)('1','Menu'));\n    const menuContainer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('menuContainer');\n    const shareables = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('shareables');\n    shareables.classList.add('menuList');\n    shareables.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createH)('2','Shareables'));\n    const shareablesList = document.createElement('ul');\n    shareables.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createLi)(shareablesList,['Bavarian Pretzel','Wings','Nachos', 'Charcuterie', 'Chips & Guac', 'Flatbread']));\n    menuContainer.appendChild(shareables);\n\n    //adding Wine\n    const wine = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('wine');\n    wine.classList.add('menuList');\n    wine.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createH)('2','Wine'));\n    const wineList = document.createElement('ul');\n    wine.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createLi)(wineList,['Wine 1', 'Wine 2', 'Wine 3', 'Wine 4', 'Wine 5']));\n    menuContainer.appendChild(wine);\n\n    //adding Beer\n    const beer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('beer');\n    beer.classList.add('menuList');\n    beer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createH)('2','Beer'));\n    const beerList = document.createElement('ul');\n    beer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createLi)(beerList,['Bud Light', 'Allagash White', 'Miller Light', 'Blue Moon', 'Angry Orchard', 'Boom Bock']));\n    menuContainer.appendChild(beer);\n\n    menuSection.appendChild(menuContainer);\n};\n\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;