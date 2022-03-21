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

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createDiv\": () => (/* binding */ createDiv),\n/* harmony export */   \"createH\": () => (/* binding */ createH),\n/* harmony export */   \"createHome\": () => (/* binding */ createHome),\n/* harmony export */   \"createLi\": () => (/* binding */ createLi),\n/* harmony export */   \"createMap\": () => (/* binding */ createMap),\n/* harmony export */   \"createPara\": () => (/* binding */ createPara),\n/* harmony export */   \"createSection\": () => (/* binding */ createSection)\n/* harmony export */ });\n\n\nconst createMap = () =>{\n        var map = L.map('map').setView([46.4214612,-117.0257842], 17.1);\n    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {\n        attribution: 'Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>',\n        maxZoom: 18,\n        id: 'mapbox/streets-v11',\n        tileSize: 512,\n        zoomOffset: -1,\n        accessToken: 'pk.eyJ1Ijoia29ucmFkbGsiLCJhIjoiY2wwdTRma2szMHRxZTNicGt3ZXJlZnBkNiJ9.K-GiCqZxzAhAIMq43oCuIg'\n    }).addTo(map);\n\n    var marker = L.marker([46.421,-117.025]).addTo(map);\n\n}\nlet slideIndex = 0;\n\nconst createSection = (idName) =>{\n    let section = document.createElement(\"section\");\n    section.setAttribute('id',idName);\n    return section;\n} \n\nconst createDiv = (idName) => {\n    let div = document.createElement(\"div\");\n    div.setAttribute('id',idName);\n    return div;\n}\n\nconst createPara = (text) => {\n    let para = document.createElement(\"p\");\n    para.textContent = text;\n    return para;\n}\n\nconst createLi = (ul,arr) =>{\n    for(let i=0;i< arr.length;i++){\n        let li = document.createElement(\"li\");\n        li.innerHTML = arr[i];\n        ul.appendChild(li)\n    }\n    return ul;\n    \n}\n\nconst createH = (num,text) => {\n    const heading = document.createElement(`h${num}`);\n    heading.innerText = text;\n    return heading\n}\n\n\nconst createHome = () => {\n    const content = document.getElementById('content')\n    \n    //create main picture and title across\n    const mainOverlay = createSection(\"mainOverlay\");\n    content.appendChild(mainOverlay);\n    mainOverlay.appendChild(createDiv('title'));\n\n    //create about section\n    const aboutSection = createSection('about');\n    content.appendChild(aboutSection);\n    const aboutUsPara = createDiv('aboutUsPara');\n    for (let index = 0; index < 3; index++) {\n        aboutUsPara.appendChild(createPara('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam at labore placeat modi soluta porro dolorem distinctio, sunt expedita eos voluptatem ea mollitia, libero inventore doloremque autem minima dolorum dolore'));\n    }\n    const rightSideAboutUs = createDiv('rightSideAboutUs');\n    rightSideAboutUs.appendChild(createH('2','Our Story'));\n    rightSideAboutUs.appendChild(aboutUsPara);\n    const aboutContainer = createDiv('aboutContainer');\n    aboutContainer.appendChild(createDiv('picture1'));\n    aboutContainer.appendChild(createDiv('picture2'));\n    aboutContainer.appendChild(createDiv('rightAbout')).appendChild(rightSideAboutUs);\n    aboutSection.appendChild(aboutContainer);\n\n    const menuSection = createSection('menu');\n    content.appendChild(menuSection);\n    menuSection.appendChild(createH('1','Menu'));\n    const menuContainer = createDiv('menuContainer');\n    const shareables = createDiv('shareables');\n    shareables.classList.add('menuList');\n    shareables.appendChild(createH('2','Shareables'));\n    const shareablesList = document.createElement('ul');\n    shareables.appendChild(createLi(shareablesList,['Bavarian Pretzel','Wings','Nachos', 'Charcuterie', 'Chips & Guac', 'Flatbread']));\n    menuContainer.appendChild(shareables);\n\n    //adding Wine\n    const wine = createDiv('wine');\n    wine.classList.add('menuList');\n    wine.appendChild(createH('2','Wine'));\n    const wineList = document.createElement('ul');\n    wine.appendChild(createLi(wineList,['Wine 1', 'Wine 2', 'Wine 3', 'Wine 4', 'Wine 5']));\n    menuContainer.appendChild(wine);\n\n    //adding Beer\n    const beer = createDiv('beer');\n    beer.classList.add('menuList');\n    beer.appendChild(createH('2','Beer'));\n    const beerList = document.createElement('ul');\n    beer.appendChild(createLi(beerList,['Bud Light', 'Allagash White', 'Miller Light', 'Blue Moon', 'Angry Orchard', 'Boom Bock']));\n    menuContainer.appendChild(beer);\n\n    menuSection.appendChild(menuContainer);\n\n\n    const contactSection = createSection('contact');\n    content.appendChild(contactSection);\n    const contactContainer = createDiv('contactContainer');\n    contactContainer.appendChild(createH('2','Contact Us'));\n    contactSection.appendChild(contactContainer);\n\n    const contactFlex = createDiv('contactFlex');\n    const contactInfo = createDiv('contactInfo');\n    contactInfo.appendChild(createPara('(123)-456-7890'));\n    contactInfo.appendChild(createPara('123 Main St'));\n    contactInfo.appendChild(createPara('Lewiston, ID'));\n    const mapDiv = createDiv('map');\n    contactFlex.appendChild(contactInfo);\n    contactFlex.appendChild(mapDiv);\n    contactContainer.appendChild(contactFlex);\n    createMap();\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"carousel\": () => (/* binding */ carousel),\n/* harmony export */   \"createMenu\": () => (/* binding */ createMenu)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n\n\n\nconst createMenu = () => {\n\n\n    const menuSection = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createSection)('menu');\n    content.appendChild(menuSection);\n    menuSection.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createH)('1','Menu'));\n    const menuContainer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('menuContainer');\n    const shareables = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('shareables');\n    shareables.classList.add('menuList');\n    shareables.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createH)('2','Shareables'));\n    const shareablesList = document.createElement('ul');\n    shareables.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createLi)(shareablesList,['Bavarian Pretzel $8','Wings $12','Nachos $10', 'Charcuterie $15', 'Chips & Guac $6', 'Flatbread $14']));\n    menuContainer.appendChild(shareables);\n\n    //adding Wine\n    const wine = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('wine');\n    wine.classList.add('menuList');\n    wine.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createH)('2','Wine'));\n    const wineList = document.createElement('ul');\n    wine.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createLi)(wineList,['Wine 1   $6/$26', 'Wine 2  $7/$30', 'Wine 3   $6/$26', 'Wine 4   $8/$38', 'Wine 5   $10/$50']));\n    menuContainer.appendChild(wine);\n\n    //adding Beer\n    const beer = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('beer');\n    beer.classList.add('menuList');\n    beer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createH)('2','Beer'));\n    const beerList = document.createElement('ul');\n    beer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createLi)(beerList,['Bud Light $3', 'Allagash White $5', 'Miller Light $4', 'Blue Moon $5', 'Angry Orchard $5', 'Boom Bock $6']));\n    menuContainer.appendChild(beer);\n\n\n    const specialsDiv = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('specialsDiv');\n    specialsDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createPara)('Happy Hour 4-6PM every day. $1 off all imports!'));\n    specialsDiv.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__.createPara)('Thursday is half price Shareables day!'))\n\n    menuSection.appendChild(menuContainer);\n    menuSection.appendChild(specialsDiv);\n\n    const slideShow = (0,_home__WEBPACK_IMPORTED_MODULE_0__.createDiv)('slideShow');\n    const pretzel = document.createElement('img');\n    pretzel.src = 'img/pretzel.jpeg';\n    pretzel.classList.add('slide')\n    const charcuterie = document.createElement('img');\n    charcuterie.src = 'img/charcuterie.jpeg';\n    charcuterie.classList.add('slide')\n    const flatbread = document.createElement('img');\n    flatbread.src = 'img/charcuterie.jpeg';\n    flatbread.classList.add('slide')\n    const wings = document.createElement('img');\n    wings.src = 'img/wings.jpeg';\n    wings.classList.add('slide');\n    \n    \n    slideShow.appendChild(pretzel);\n    slideShow.appendChild(charcuterie);\n    slideShow.appendChild(flatbread);\n    slideShow.appendChild(wings);\n    menuSection.appendChild(slideShow);\n    \n    carousel();\n\n\n};\n// var slideIndex = 0;\n// carousel();\nlet slideIndex = 0;\nfunction carousel() {\n    var i;\n    var x = document.getElementsByClassName(\"slide\");\n    for (i = 0; i < x.length; i++) {\n        x[i].style.display = \"none\";  \n    }\n    slideIndex++;\n    if (slideIndex > x.length) {slideIndex = 1}\n    x[slideIndex-1].style.display = \"block\";\n    console.log(slideIndex)\n    setTimeout(carousel, 2000); // Change image every 2 seconds\n}\n\n\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/menu.js");
/******/ 	
/******/ })()
;