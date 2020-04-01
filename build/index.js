(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"), require("react-dom"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react", "react-dom"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react"), require("react-dom")) : factory(root["Framer"], root["React"], root["ReactDOM"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./entry.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/cjs.js!./code/fonts.css":
/*!*****************************************************************************************************************!*\
  !*** /Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/cjs.js!./code/fonts.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/runtime/api.js */ "../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://ruucm.github.io/webfonts/SFProDisplay.css);", ""]);
exports.push([module.i, "@import url(https://ruucm.github.io/webfonts/SFProText.css);", ""]);
// Module
exports.push([module.i, "\n", ""]);


/***/ }),

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./HomeButton.tsx": "./code/HomeButton.tsx",
	"./Icon.tsx": "./code/Icon.tsx",
	"./Player/Player.tsx": "./code/Player/Player.tsx",
	"./Status.tsx": "./code/Status.tsx",
	"./Typograhpy.tsx": "./code/Typograhpy.tsx",
	"./assets/Icons/Common/ActionGlyph.tsx": "./code/assets/Icons/Common/ActionGlyph.tsx",
	"./assets/Icons/Common/Airdrop.tsx": "./code/assets/Icons/Common/Airdrop.tsx",
	"./assets/Icons/Common/Chevron.tsx": "./code/assets/Icons/Common/Chevron.tsx",
	"./assets/Icons/Common/Heart.tsx": "./code/assets/Icons/Common/Heart.tsx",
	"./assets/Icons/Common/List.tsx": "./code/assets/Icons/Common/List.tsx",
	"./assets/Icons/Common/More.tsx": "./code/assets/Icons/Common/More.tsx",
	"./assets/Icons/Common/Search.tsx": "./code/assets/Icons/Common/Search.tsx",
	"./assets/Icons/Common/VolumeMax.tsx": "./code/assets/Icons/Common/VolumeMax.tsx",
	"./assets/Icons/Common/VolumeMin.tsx": "./code/assets/Icons/Common/VolumeMin.tsx",
	"./assets/Icons/Music/Browse.tsx": "./code/assets/Icons/Music/Browse.tsx",
	"./assets/Icons/Music/Forward.tsx": "./code/assets/Icons/Music/Forward.tsx",
	"./assets/Icons/Music/Lyrics.tsx": "./code/assets/Icons/Music/Lyrics.tsx",
	"./assets/Icons/Music/Pause.tsx": "./code/assets/Icons/Music/Pause.tsx",
	"./assets/Icons/Music/Play.tsx": "./code/assets/Icons/Music/Play.tsx",
	"./assets/Icons/Music/Radio.tsx": "./code/assets/Icons/Music/Radio.tsx",
	"./assets/Icons/Music/Repeat.tsx": "./code/assets/Icons/Music/Repeat.tsx",
	"./assets/Icons/Music/RepeatOne.tsx": "./code/assets/Icons/Music/RepeatOne.tsx",
	"./assets/Icons/Music/Shuffle.tsx": "./code/assets/Icons/Music/Shuffle.tsx",
	"./assets/Icons/Music/Songs.tsx": "./code/assets/Icons/Music/Songs.tsx",
	"./assets/Icons/index.tsx": "./code/assets/Icons/index.tsx",
	"./canvas.tsx": "./code/canvas.tsx",
	"./components/Header.tsx": "./code/components/Header.tsx",
	"./components/MainSection.tsx": "./code/components/MainSection.tsx",
	"./components/Nav.tsx": "./code/components/Nav.tsx",
	"./components/PlayerMini.tsx": "./code/components/PlayerMini.tsx",
	"./components/Scroll.tsx": "./code/components/Scroll.tsx",
	"./components/Song.tsx": "./code/components/Song.tsx",
	"./components/SongSection.tsx": "./code/components/SongSection.tsx",
	"./fonts.css": "./code/fonts.css",
	"./index.tsx": "./code/index.tsx",
	"./screen/Browse.tsx": "./code/screen/Browse.tsx",
	"./screen/MainBridge.tsx": "./code/screen/MainBridge.tsx",
	"./shared/themes.tsx": "./code/shared/themes.tsx",
	"./shared/utils.tsx": "./code/shared/utils.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/HomeButton.tsx":
/*!*****************************!*\
  !*** ./code/HomeButton.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSG9tZUJ1dHRvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQXVEO0FBSXZELE1BQWEsVUFBVyxTQUFRLEtBQUssQ0FBQyxTQUFnQztJQWdCcEUsTUFBTTs7UUFDSixNQUFNLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRWpELE9BQU8sQ0FDTCw2QkFDRSxLQUFLLEVBQUU7Z0JBQ0wsZUFBZSxFQUFFLDBCQUEwQjtnQkFDM0Msb0JBQW9CLEVBQUUsWUFBWTtnQkFDbEMsY0FBYyxFQUFFLFdBQVc7Z0JBQzNCLE9BQU8sRUFBRSxNQUFNO2dCQUNmLGNBQWMsRUFBRSxRQUFRO2dCQUN4QixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osS0FBSyxFQUFFLFVBQVUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTzthQUNqRDtZQUVELDZCQUNFLEtBQUssRUFBRTtvQkFDTCxTQUFTLEVBQUUsS0FBSztpQkFDakIsRUFDRCx1QkFBdUIsRUFBRTtvQkFDdkIsTUFBTSxFQUFFLGFBQWEsQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO2lCQUN6QyxHQUNELENBQ0UsQ0FDUCxDQUFDO0tBQ0g7O0FBMUNILGdDQTJDQztBQTFDUSx1QkFBWSxHQUFHO0lBQ3BCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7Q0FDWCxDQUFDO0FBRUssMkJBQWdCLEdBQTRCO0lBQ2pELFVBQVUsRUFBRTtRQUNWLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUMxQixZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQy9CLEtBQUssRUFBRSxZQUFZO0tBQ3BCO0NBQ0YsQ0FBQztBQStCSixTQUFTLGFBQWEsQ0FBQyxVQUFzQixFQUFFLEtBQWE7O0lBQzFELE1BQU0sV0FBVyxHQUFHLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO0lBQzdDLE1BQU0sS0FBSyxHQUFHLFVBQVUsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO0lBRXhELE9BQU8sZUFBZSxXQUFXLGlDQUFpQyxXQUFXOzs7OzsyR0FLNEIsS0FBSztrRUFDOUMsV0FBVzs7O1dBR2xFLENBQUM7Q0FDWCJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class HomeButton extends React.Component {
    render() {
        window["__checkBudget__"]();
        const { appearance, width, height } = this.props;
        return (React.createElement("div", { style: {
                backgroundColor: "rgba(247, 247, 247, 0.8)",
                WebkitBackdropFilter: "blur(50px)",
                backdropFilter: "blur(6px)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 12,
                color: appearance === "dark" ? "black" : "white"
            } },
            React.createElement("div", { style: {
                    marginTop: "6px"
                }, dangerouslySetInnerHTML: {
                    __html: homeButtonSVG(appearance, width)
                } })));
    }
}
exports.HomeButton = HomeButton;
HomeButton.defaultProps = {
    appearance: "light",
    width: 375,
    height: 34
};
HomeButton.propertyControls = {
    appearance: {
        type: framer_1.ControlType.Enum,
        options: ["dark", "light"],
        optionTitles: ["Dark", "Light"],
        title: "Appearance"
    }
};
function homeButtonSVG(appearance, width) {
    window["__checkBudget__"]();
    const buttonWidth = width >= 800 ? 210 : 134;
    const color = appearance === "dark" ? "black" : "white";
    return `<svg width="${buttonWidth}px" height="5px" viewBox="0 0 ${buttonWidth} 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Bars-/-Home-Indicator-/-On-Dark" transform="translate(-121.000000, -20.000000)" fill="${color}">
                <rect id="Home-Indicator" x="121" y="20" width="${buttonWidth}" height="5" rx="2.5"></rect>
            </g>
        </g>
    </svg>`;
}
exports.__info__ = [{ "name": "HomeButton", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Icon.tsx":
/*!***********************!*\
  !*** ./code/Icon.tsx ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSWNvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSWNvbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQix5REFBZ0Q7QUFDaEQsMENBb0J3QjtBQUN4QixtQ0FBd0U7QUFFeEUsTUFBTSxTQUFTLEdBQUcsMkJBQU0sQ0FBQyxHQUFHLENBQUE7Ozs7Q0FJM0IsQ0FBQztBQUVGLFNBQWdCLElBQUksQ0FBQyxFQUF5QjtRQUF6QixFQUFFLElBQUksRUFBRSxLQUFLLE9BQVksRUFBVixxQ0FBUTs7SUFDMUMsT0FBTyxDQUNMLG9CQUFDLGNBQUssa0JBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxFQUFFLElBQUssS0FBSyxHQUN0RCxDQUFDLEdBQUcsRUFBRTs7UUFDTCxRQUFRLElBQUksRUFBRTtZQUNaLEtBQUssYUFBYTtnQkFDaEIsT0FBTyxvQkFBQyxtQkFBVyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBQztZQUN2QyxLQUFLLGNBQWM7Z0JBQ2pCLE9BQU8sb0JBQUMsZUFBTyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBQztZQUNuQyxLQUFLLGFBQWE7Z0JBQ2hCLE9BQU8sQ0FDTCxvQkFBQyxTQUFTO29CQUNSLG9CQUFDLGVBQU8sSUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFJLENBQ2YsQ0FDYixDQUFDO1lBQ0osS0FBSyxPQUFPO2dCQUNWLE9BQU8sb0JBQUMsYUFBSyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBQztZQUNqQyxLQUFLLE1BQU07Z0JBQ1QsT0FBTyxvQkFBQyxZQUFJLElBQUMsS0FBSyxFQUFFLEtBQUssR0FBSSxDQUFDO1lBQ2hDLEtBQUssTUFBTTtnQkFDVCxPQUFPLG9CQUFDLFlBQUksSUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFJLENBQUM7WUFDaEMsS0FBSyxRQUFRO2dCQUNYLE9BQU8sb0JBQUMsY0FBTSxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBQztZQUNsQyxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxvQkFBQyxpQkFBUyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBQztZQUNyQyxLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxvQkFBQyxpQkFBUyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBQztZQUNyQyxLQUFLLFNBQVM7Z0JBQ1osT0FBTyxvQkFBQyxlQUFPLElBQUMsS0FBSyxFQUFFLEtBQUssR0FBSSxDQUFDO1lBQ25DLEtBQUssUUFBUTtnQkFDWCxPQUFPLG9CQUFDLGNBQU0sSUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFJLENBQUM7WUFDbEMsS0FBSyxTQUFTO2dCQUNaLE9BQU8sb0JBQUMsZUFBTyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBQztZQUNuQyxLQUFLLFVBQVU7Z0JBQ2IsT0FBTyxDQUNMLG9CQUFDLFNBQVM7b0JBQ1Isb0JBQUMsZUFBTyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FDZixDQUNiLENBQUM7WUFDSixLQUFLLE9BQU87Z0JBQ1YsT0FBTyxvQkFBQyxhQUFLLElBQUMsS0FBSyxFQUFFLEtBQUssR0FBSSxDQUFDO1lBQ2pDLEtBQUssTUFBTTtnQkFDVCxPQUFPLG9CQUFDLFlBQUksSUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFJLENBQUM7WUFDaEMsS0FBSyxPQUFPO2dCQUNWLE9BQU8sb0JBQUMsYUFBSyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBQztZQUNqQyxLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxvQkFBQyxjQUFNLElBQUMsS0FBSyxFQUFFLEtBQUssR0FBSSxDQUFDO1lBQ2xDLEtBQUssV0FBVztnQkFDZCxPQUFPLG9CQUFDLGlCQUFTLElBQUMsS0FBSyxFQUFFLEtBQUssR0FBSSxDQUFDO1lBQ3JDLEtBQUssU0FBUztnQkFDWixPQUFPLG9CQUFDLGVBQU8sSUFBQyxLQUFLLEVBQUUsS0FBSyxHQUFJLENBQUM7WUFDbkMsS0FBSyxPQUFPO2dCQUNWLE9BQU8sb0JBQUMsYUFBSyxJQUFDLEtBQUssRUFBRSxLQUFLLEdBQUksQ0FBQztZQUNqQyxLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxvQkFBQyxjQUFNLElBQUMsS0FBSyxFQUFFLEtBQUssR0FBSSxDQUFDO1lBQ2xDO2dCQUNFLE9BQU8seUJBQXlCLENBQUM7U0FDcEM7S0FDRixDQUFDLEVBQUUsQ0FDRSxDQUNULENBQUM7Q0FDSDtBQTdERCxvQkE2REM7QUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHO0lBQ2xCLElBQUksRUFBRSxRQUFRO0lBQ2QsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFDIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
const Icons_1 = __webpack_require__(/*! ./assets/Icons */ "./code/assets/Icons/index.tsx");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Rotate180 = styled_components_1.default.div `
  transform: rotate(180deg);
  width: 100%;
  height: 100%;
`;
function Icon(_a) {
    var { icon, color } = _a, props = __rest(_a, ["icon", "color"]);
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Frame, Object.assign({ width: "100%", height: "100%", background: "" }, props), (() => {
        window["__checkBudget__"]();
        switch (icon) {
            case "ActionGlyph":
                return React.createElement(Icons_1.ActionGlyph, { color: color });
            case "ChevronRight":
                return React.createElement(Icons_1.Chevron, { color: color });
            case "ChevronLeft":
                return (React.createElement(Rotate180, null,
                    React.createElement(Icons_1.Chevron, { color: color })));
            case "Heart":
                return React.createElement(Icons_1.Heart, { color: color });
            case "List":
                return React.createElement(Icons_1.List, { color: color });
            case "More":
                return React.createElement(Icons_1.More, { color: color });
            case "Search":
                return React.createElement(Icons_1.Search, { color: color });
            case "VolumeMin":
                return React.createElement(Icons_1.VolumeMin, { color: color });
            case "VolumeMax":
                return React.createElement(Icons_1.VolumeMax, { color: color });
            case "Airdrop":
                return React.createElement(Icons_1.Airdrop, { color: color });
            case "Browse":
                return React.createElement(Icons_1.Browse, { color: color });
            case "Forward":
                return React.createElement(Icons_1.Forward, { color: color });
            case "Backward":
                return (React.createElement(Rotate180, null,
                    React.createElement(Icons_1.Forward, { color: color })));
            case "Pause":
                return React.createElement(Icons_1.Pause, { color: color });
            case "Play":
                return React.createElement(Icons_1.Play, { color: color });
            case "Radio":
                return React.createElement(Icons_1.Radio, { color: color });
            case "Repeat":
                return React.createElement(Icons_1.Repeat, { color: color });
            case "RepeatOne":
                return React.createElement(Icons_1.RepeatOne, { color: color });
            case "Shuffle":
                return React.createElement(Icons_1.Shuffle, { color: color });
            case "Songs":
                return React.createElement(Icons_1.Songs, { color: color });
            case "Lyrics":
                return React.createElement(Icons_1.Lyrics, { color: color });
            default:
                return "Add Vaild Icon Property";
        }
    })()));
}
exports.Icon = Icon;
Icon.defaultProps = {
    icon: "Browse",
    color: "#000",
};
exports.__info__ = [{ "name": "Icon", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Player/Player.tsx":
/*!********************************!*\
  !*** ./code/Player/Player.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9QbGF5ZXIvUGxheWVyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUMvQixtQ0FNZ0I7QUFDaEIsNkNBQTBDO0FBQzFDLDhDQUEyQztBQUMzQywyQ0FTeUI7QUFHekIsU0FBZ0IsTUFBTSxDQUFDLEtBQUs7O0lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sQ0FDTCxvQkFBQyxjQUFLLGtCQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQzFCLFVBQVUsRUFBQyxNQUFNLEVBQ2pCLEdBQUcsRUFBRSxDQUFDLEVBQ04sWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZLEVBQ2hDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFDdEIsS0FBSztRQVFULG9CQUFDLGNBQUssSUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLFVBQVUsRUFBQyxFQUFFLEVBQUMsUUFBUSxFQUFDLFFBQVE7WUFDdEUsb0JBQUMsY0FBSyxJQUNKLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUNsQixNQUFNLEVBQUUsRUFBRSxFQUNWLFVBQVUsRUFBQywwQkFBMEIsRUFDckMsS0FBSyxFQUFFO29CQUNMLG9CQUFvQixFQUFFLFlBQVk7aUJBQ25DLEVBQ0QsR0FBRyxFQUFFLENBQUM7Z0JBRU4sb0JBQUMsY0FBSztnQkFDSixnQ0FBZ0M7O29CQUFoQyxnQ0FBZ0M7b0JBQ2hDLEtBQUssRUFBQyxNQUFNLEVBQ1osTUFBTSxFQUFDLE1BQU0sRUFDYixTQUFTLEVBQUMsWUFBWSxFQUN0QixHQUFHLEVBQUUsQ0FBQztvQkFFTixvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFD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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const themes_1 = __webpack_require__(/*! ../shared/themes */ "./code/shared/themes.tsx");
const Typograhpy_1 = __webpack_require__(/*! ../Typograhpy */ "./code/Typograhpy.tsx");
const Icons_1 = __webpack_require__(/*! ../assets/Icons */ "./code/assets/Icons/index.tsx");
function Player(props) {
    window["__checkBudget__"]();
    console.log(props.state);
    return (React.createElement(framer_1.Stack, Object.assign({ width: props.width, height: props.state.height, background: "pink", gap: 0, borderRadius: props.borderRadius, bottom: props.state.bottom }, props),
        React.createElement(framer_1.Frame, { width: "100%", height: props.width, background: "", overflow: "hidden" },
            React.createElement(framer_1.Frame, { width: props.width, height: 64, background: "rgba(255, 255, 255, 0.8)", style: {
                    WebkitBackdropFilter: "blur(20px)"
                }, top: 0 },
                React.createElement(framer_1.Stack
                // style={{ padding: "0 10px" }}
                , { 
                    // style={{ padding: "0 10px" }}
                    width: "100%", height: "100%", direction: "horizontal", gap: 0 },
                    React.createElement(framer_1.Frame, { width: "1fr", height: "100%", background: "" },
                        React.createElement(framer_1.Frame, { size: 50, center: true, borderRadius: "5px", style: {
                                backgroundSize: "cover",
                                backgroundImage: `url("https://pgnqdrjultom1827145.cdn.ntruss.com/img/66/ba/66babea39e17dd90c66d6b8a13ba982a841032ea31dad8d4a56bd29d8e5d988c_v1.jpg")`
                            } })),
                    React.createElement(framer_1.Frame, { width: "2.5fr", height: "100%", background: "" },
                        React.createElement(framer_1.Frame, { width: "100%", height: "", background: "", center: "y" },
                            React.createElement(Typograhpy_1.Typograhpy, { text: "Dressed In black", type: "label", align: "left" }))),
                    React.createElement(framer_1.Frame, { width: "1fr", height: "100%", background: "" },
                        React.createElement(framer_1.Frame, { width: "40%", height: "auto", center: true, background: "" },
                            React.createElement(Icons_1.Play, null))),
                    React.createElement(framer_1.Frame, { width: "1fr", height: "100%", background: "" },
                        React.createElement(framer_1.Frame, { width: "70%", height: "auto", center: true, background: "" },
                            React.createElement(Icons_1.Forward, null)))))),
        React.createElement(framer_1.Frame, { width: "100%", height: "", opacity: 0 },
            React.createElement(framer_1.Frame, { width: "100%", height: "73px", background: "" },
                React.createElement(framer_1.Stack, { width: props.width - 60, height: "100%", center: true, direction: "horizontal" },
                    React.createElement(framer_1.Stack, { width: "4fr", height: "100%", alignment: "start", distribution: "center" },
                        React.createElement(Typograhpy_1.Typograhpy, { text: "Power", type: "title-emphasized" }),
                        React.createElement(Typograhpy_1.Typograhpy, { text: "Kanye West", type: "title" })),
                    React.createElement(framer_1.Frame, { width: "1fr", height: "100%", background: "" },
                        React.createElement(framer_1.Frame, { size: "25px", borderRadius: "30px", background: themes_1.colors.primaryColor, opacity: 0.1, center: "y", right: 0 }),
                        React.createElement(framer_1.Frame, { size: "20px", background: "", center: "y", right: 2 },
                            React.createElement(Icons_1.More, { color: themes_1.colors.primaryColor }))))),
            React.createElement(framer_1.Frame, { width: "100%", height: "54px", background: "" },
                React.createElement(framer_1.Stack, { width: props.width - 60, height: "", center: true },
                    React.createElement(framer_1.Frame, { width: "100%", height: "2px", background: themes_1.colors.borderColor },
                        React.createElement(framer_1.Frame, { width: "5px", height: "5px", borderRadius: "5px", background: "grey", center: "y" })),
                    React.createElement(framer_1.Stack, { width: "100%", height: "5px", direction: "horizontal", distribution: "space-between" },
                        React.createElement(Typograhpy_1.Typograhpy, { text: "0:00", type: "nav-label", lineType: "inactive" }),
                        React.createElement(Typograhpy_1.Typograhpy, { text: "-4:35", type: "nav-label", lineType: "inactive" })))),
            React.createElement(framer_1.Frame, { width: "100%", height: "141px", background: "" },
                React.createElement(framer_1.Stack, { width: props.width - 100, height: "100%", center: true, direction: "horizontal", gap: 0 },
                    React.createElement(framer_1.Frame, { width: "1fr", height: "100%", background: "" },
                        React.createElement(framer_1.Frame, { width: "70%", height: "", center: true, rotate: 180, background: "" },
                            React.createElement(Icons_1.Forward, null))),
                    React.createElement(framer_1.Frame, { width: "2fr", height: "100%", background: "" },
                        React.createElement(framer_1.Frame, { width: "40%", height: "", center: true, background: "" },
                            React.createElement(Icons_1.Play, null))),
                    React.createElement(framer_1.Frame, { width: "1fr", height: "100%", background: "" },
                        React.createElement(framer_1.Frame, { width: "70%", height: "", center: true, background: "" },
                            React.createElement(Icons_1.Forward, null))))),
            React.createElement(framer_1.Frame, { width: "100%", height: "54px", background: "" },
                React.createElement(framer_1.Stack, { width: props.width - 60, height: "", center: true, direction: "horizontal" },
                    React.createElement(framer_1.Frame, { width: "0.7fr", height: "", background: "" },
                        React.createElement(Icons_1.VolumeMin, { color: themes_1.colors.labelSecondary })),
                    React.createElement(framer_1.Frame, { width: "9fr", height: "2px", background: themes_1.colors.borderColor },
                        React.createElement(framer_1.Frame, { width: "80%", height: "100%", background: "grey" }),
                        React.createElement(framer_1.Frame, { size: "20px", borderRadius: "20px", background: "white", shadow: "0px 1px 5px 1px rgba(0,0,0,0.2)", center: "y", left: "80%" })),
                    React.createElement(framer_1.Frame, { width: "0.7fr", height: "", background: "" },
                        React.createElement(Icons_1.VolumeMax, { color: themes_1.colors.labelSecondary })))),
            React.createElement(framer_1.Frame, { width: "100%", height: "80px", background: "" },
                React.createElement(framer_1.Stack, { width: props.width - 100, height: "100%", direction: "horizontal", center: true, distribution: "center", gap: 60 },
                    React.createElement(framer_1.Frame, { width: "40px", height: "50%", background: "" },
                        React.createElement(framer_1.Frame, { size: 30, center: true, background: "" },
                            React.createElement(Icons_1.List, { color: themes_1.colors.primaryColor }))),
                    React.createElement(framer_1.Frame, { width: "40px", height: "50%", background: "" },
                        React.createElement(Icons_1.Repeat, { color: themes_1.colors.primaryColor })),
                    React.createElement(framer_1.Frame, { width: "40px", height: "50%", background: "" },
                        React.createElement(Icons_1.Shuffle, { color: themes_1.colors.primaryColor })))))));
}
exports.Player = Player;
Player.defaultProps = {
    width: 414,
    height: 64,
    borderRadius: "0px 0px 0 0"
};
framer_1.addPropertyControls(Player, {
    height: {
        type: framer_1.ControlType.Number
    }
});
exports.__info__ = [{ "name": "Player", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Status.tsx":
/*!*************************!*\
  !*** ./code/Status.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TdGF0dXMudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLG1DQUlnQjtBQXlCaEIsTUFBYSxTQUFVLFNBQVEsS0FBSyxDQUFDLFNBQWdDO0lBQXJFOztRQWlHRSxVQUFLLEdBQUc7WUFDTixJQUFJLEVBQUUsT0FBTztTQUNkLENBQUM7UUFnQkYsZUFBVSxHQUFHLEdBQUcsRUFBRTs7WUFDaEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRWQsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtnQkFDdkIsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUU1QixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFO29CQUN6QixLQUFLLEdBQUcsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDbkIsS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7b0JBRTNCLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMxRDtxQkFBTTtvQkFDTCxJQUFJO3dCQUNGLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDdkU7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJ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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class StatusBar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            time: "18:00"
        };
        this.updateTime = () => {
            window["__checkBudget__"]();
            let time = "";
            if (this.props.liveTime) {
                const date = new Date();
                var hours = date.getHours();
                if (this.props.twelveHour) {
                    hours = hours % 12;
                    hours = hours ? hours : 12;
                    time = hours + ":" + ("0" + date.getMinutes()).slice(-2);
                }
                else {
                    time =
                        ("0" + hours).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2);
                }
            }
            else {
                time = this.props.time;
            }
            if (this.time !== time) {
                this.time = time;
                this.setState({ time });
            }
        };
    }
    componentWillMount() {
        window["__checkBudget__"]();
        this.updateTime();
        if (this.props.liveTime) {
            this.timer = window.setInterval(() => {
                window["__checkBudget__"]();
                this.updateTime();
            }, 1000);
        }
    }
    componentWillUnmount() {
        window["__checkBudget__"]();
        window.clearInterval(this.timer);
    }
    render() {
        window["__checkBudget__"]();
        const { batteryLevel, signalLevel, wifiLevel, appearance, location, back, mode, width, height } = this.props;
        if (width >= 800) {
            return React.createElement("div", null);
        }
        return (React.createElement("div", { style: {
                backgroundColor: "rgba(247, 247, 247, 0.8)",
                WebkitBackdropFilter: "blur(50px)",
                backdropFilter: "blur(6px)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                top: 0,
                left: 0,
                fontSize: 12,
                color: appearance === "dark" ? "black" : "white"
            } },
            React.createElement("div", { style: {
                    height: "44px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center"
                } },
                React.createElement("div", { style: {
                        display: "flex",
                        height: "44px",
                        width: "90px",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    } },
                    React.createElement("div", { style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            fontFamily: "SF-Pro-Text, system-ui, -apple-system",
                            fontSize: "15px",
                            letterSpacing: "-16",
                            width: "54px",
                            lineHeight: "21px",
                            fontWeight: 600,
                            background: mode,
                            color: mode != "transparent" ? "#ffffff" : "inherit",
                            borderRadius: "20px"
                        } },
                        this.state.time !== "" ? this.state.time : "18:00",
                        React.createElement("div", { style: {
                                height: "16px",
                                display: mode === "transparent" && location !== "none"
                                    ? "block"
                                    : "none"
                            }, dangerouslySetInnerHTML: {
                                __html: locationSVG(appearance, location)
                            } })),
                    React.createElement("div", { style: {
                            alignSelf: "flex-start",
                            display: back != "" ? "flex" : "none",
                            marginLeft: "10px",
                            fontWeight: 400,
                            fontFamily: "SF-Pro-Text, system-ui, -apple-system",
                            fontSize: "12px"
                        } },
                        React.createElement("div", { style: {
                                height: "12px",
                                width: "12px"
                            }, dangerouslySetInnerHTML: {
                                __html: backSVG(appearance)
                            } }),
                        back)),
                React.createElement("div", { style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "44px",
                        width: "95px"
                    } },
                    React.createElement("div", { style: {
                            width: "20px",
                            textAlign: "center"
                        }, dangerouslySetInnerHTML: {
                            __html: signalSVG(appearance, signalLevel)
                        } }),
                    React.createElement("div", { style: {
                            width: "20px",
                            textAlign: "center"
                        }, dangerouslySetInnerHTML: {
                            __html: wifiSVG(appearance, wifiLevel)
                        } }),
                    React.createElement("div", { style: {
                            width: "27px",
                            textAlign: "right"
                        }, dangerouslySetInnerHTML: {
                            __html: batterySVG(appearance, batteryLevel)
                        } })))));
    }
}
exports.StatusBar = StatusBar;
StatusBar.defaultProps = {
    appearance: "light",
    mode: "transparent",
    liveTime: true,
    back: "",
    twelveHour: false,
    time: "18.00",
    location: "none",
    signalLevel: 100,
    wifiLevel: 100,
    batteryLevel: 100,
    levels: null,
    width: 375,
    height: 44
};
StatusBar.propertyControls = {
    appearance: {
        type: framer_1.ControlType.Enum,
        options: ["dark", "light"],
        optionTitles: ["Dark", "Light"],
        title: "Appearance"
    },
    mode: {
        type: framer_1.ControlType.Enum,
        options: ["transparent", "#4CD964", "#007AFF", "#FF3B30"],
        optionTitles: [
            "None",
            "On a call",
            "App actively using your location or Personal Hotspot is on",
            "Recording"
        ],
        title: "Task"
    },
    liveTime: {
        type: framer_1.ControlType.Boolean,
        disabledTitle: "No",
        enabledTitle: "Yes",
        title: "Real time"
    },
    twelveHour: {
        type: framer_1.ControlType.Boolean,
        disabledTitle: "24h",
        enabledTitle: "12h",
        title: "↳ Time format",
        hidden(props) {
            window["__checkBudget__"]();
            return props.liveTime === false;
        }
    },
    time: {
        type: framer_1.ControlType.String,
        placeholder: "18:00",
        title: "↳ Time",
        hidden(props) {
            window["__checkBudget__"]();
            return props.liveTime;
        }
    },
    location: {
        type: framer_1.ControlType.Enum,
        options: ["none", "background", "locating"],
        optionTitles: [
            "No Location",
            "Background Location",
            "Receiving Location"
        ],
        title: "Location"
    },
    back: {
        type: framer_1.ControlType.String,
        placeholder: "Settings",
        title: "Back to"
    },
    signalLevel: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        title: "Signal"
    },
    wifiLevel: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        title: "Wifi"
    },
    batteryLevel: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        title: "Battery"
    }
};
function backSVG(appearance) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    return `<svg xmlns="http://www.w3.org/2000/svg" width="6px" height="7px" viewBox="0 0 7 8">
        <path fill="${color}" class="c" d="M0,4,7,0V8Z"/>
      </svg>`;
}
function locationSVG(appearance, location) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    const fill = location === "locating" ? color : "transparent";
    return `<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g class="b" transform="translate(2.5 4)" fill-rule="nonzero" stroke-align="inside" stroke="${color}" fill="${fill}" stroke-dashoffset="1" stroke-width="1">
            <path class="c" d="M5.955,10.5,10.5,0,0,4.545H5.955Z"/>
          </g>
      </svg>`;
}
function batterySVG(appearance, batteryLevel) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    const batteryJuiceColor = batteryLevel <= 10 ? "red" : batteryLevel <= 20 ? "#FFCC01" : color;
    return `<svg width="25px" height="12px" viewBox="0 0 25 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Symbols" stroke="none" fill="none" fill-rule="evenodd">
              <g id="Bars-/-Status-Bar-/-iPhone-X-/-On-Light" transform="translate(-336.000000, -17.000000)">
                  <g id="Battery" transform="translate(336.000000, 17.000000)">
                      <rect id="Border" stroke="${color}" opacity="0.35" x="0.5" y="0.833333333" width="21" height="10.3333333" rx="2.66666675"></rect>
                      <path d="M23,4 L23,8 C23.8047311,7.66122348 24.328038,6.87313328 24.328038,6 C24.328038,5.12686672 23.8047311,4.33877652 23,4" id="Cap" fill="${color}" fill-rule="nonzero" opacity="0.4"></path>
                      <rect id="Capacity" fill="${batteryJuiceColor}" fill-rule="nonzero" x="2" y="2.33333333" height="7.33333333" rx="1.33333337" width="${Math.round((batteryLevel / 100) * 17 + 1)}"></rect>
                  </g>
              </g>
          </g>
      </svg>`;
}
function signalSVG(appearance, signalLevel) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    return `<svg width="17.5px" height="12px" viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Symbols" stroke="none" fill="none" fill-rule="evenodd">
              <g id="Bars-/-Status-Bar-/-iPhone-X-/-On-Light" transform="translate(-293.000000, -17.000000)" fill-rule="nonzero" fill="${color}">
                <path d="M295.666667,24.3333333 C296.218951,24.3333333 296.666667,24.7810486 296.666667,25.3333333 L296.666667,27.3333333 C296.666667,27.8856181 296.218951,28.3333333 295.666667,28.3333333 L294.666667,28.3333333 C294.114382,28.3333333 293.666667,27.8856181 293.666667,27.3333333 L293.666667,25.3333333 C293.666667,24.7810486 294.114382,24.3333333 294.666667,24.3333333 L295.666667,24.3333333 Z" opacity="${signalLevel != 0 ? 1 : 0.4}"></path>
                <path d="M299.333333,22.3333333 L300.333333,22.3333333 C300.885618,22.3333333 301.333333,22.7810486 301.333333,23.3333333 L301.333333,27.3333333 C301.333333,27.8856181 300.885618,28.3333333 300.333333,28.3333333 L299.333333,28.3333333 C298.781049,28.3333333 298.333333,27.8856181 298.333333,27.3333333 L298.333333,23.3333333 C298.333333,22.7810486 298.781049,22.3333333 299.333333,22.3333333 Z" opacity="${signalLevel >= 25 ? 1 : 0.4}"></path>
                <path d="M304,20 L305,20 C305.552285,20 306,20.4477153 306,21 L306,27.3333333 C306,27.8856181 305.552285,28.3333333 305,28.3333333 L304,28.3333333 C303.447715,28.3333333 303,27.8856181 303,27.3333333 L303,21 C303,20.4477153 303.447715,20 304,20 Z" opacity="${signalLevel >= 50 ? 1 : 0.4}"></path>
                <path d="M308.666667,17.6666667 L309.666667,17.6666667 C310.218951,17.6666667 310.666667,18.1143819 310.666667,18.6666667 L310.666667,27.3333333 C310.666667,27.8856181 310.218951,28.3333333 309.666667,28.3333333 L308.666667,28.3333333 C308.114382,28.3333333 307.666667,27.8856181 307.666667,27.3333333 L307.666667,18.6666667 C307.666667,18.1143819 308.114382,17.6666667 308.666667,17.6666667 Z" opacity="${signalLevel >= 75 ? 1 : 0.4}"></path>
              </g>
          </g>
      </svg>`;
}
function wifiSVG(appearance, wifiLevel) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    return `<svg width="15px" viewBox="0 0 16 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Symbols" fill="none" fill-rule="evenodd">
              <g id="Bars-/-Status-Bar-/-iPhone-X-/-On-Light" transform="translate(-315.000000, -17.000000)" fill="${color}" fill-rule="nonzero">
                <path d="M325.549333,26.188 C325.611087,26.127394 325.645095,26.0439919 325.643328,25.957485 C325.641561,25.8709782 325.604176,25.7890342 325.54,25.731 C324.264428,24.6521162 322.396238,24.6521162 321.120667,25.731 C321.056446,25.7889875 321.019,25.8709057 321.01717,25.957413 C321.01534,26.0439203 321.049289,26.1273487 321.111,26.188 L323.108667,28.2036667 C323.167217,28.2629057 323.247042,28.2962443 323.330333,28.2962443 C323.413624,28.2962443 323.49345,28.2629057 323.552,28.2036667 L325.549333,26.188 Z" opacity="${wifiLevel != 0 ? 1 : 0.4}"></path>
                <path d="M323.330333,23.4036667 C324.547823,23.4035921 325.721865,23.8561245 326.624333,24.6733333 C326.746397,24.7893139 326.938678,24.7867994 327.057667,24.6676667 L328.212333,23.501 C328.273141,23.439805 328.30688,23.3567887 328.306003,23.2705239 C328.305126,23.1842592 328.269706,23.101946 328.207667,23.042 C325.459468,20.4856177 321.203532,20.4856177 318.455333,23.042 C318.393256,23.1019453 318.357837,23.1842997 318.357023,23.2705923 C318.356208,23.356885 318.390065,23.4398934 318.451,23.501 L319.605333,24.6676667 C319.724322,24.7867994 319.916603,24.7893139 320.038667,24.6733333 C320.940539,23.8566645 322.113649,23.4041708 323.330333,23.4036667 Z" opacity="${wifiLevel >= 33 ? 1 : 0.4}"></path>
                <path d="M323.330333,19.608 C325.546226,19.6080971 327.677386,20.4595347 329.283333,21.9863333 C329.404265,22.1042079 329.597562,22.102721 329.716667,21.983 L330.872667,20.8163333 C330.932975,20.7556112 330.966599,20.6733595 330.966098,20.5877792 C330.965598,20.5021988 330.931014,20.420346 330.87,20.3603333 C326.654902,16.3207858 320.005098,16.3207858 315.79,20.3603333 C315.728941,20.4203015 315.694297,20.5021294 315.693734,20.5877099 C315.693171,20.6732903 315.726736,20.755567 315.787,20.8163333 L316.943333,21.983 C317.062362,22.1029017 317.255808,22.1043897 317.376667,21.9863333 C318.982819,20.4594344 321.114223,19.6079944 323.330333,19.608 Z" opacity="${wifiLevel >= 66 ? 1 : 0.4}"></path>
              </g>
          </g>
      </svg>`;
}
exports.__info__ = [{ "name": "StatusBar", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/Typograhpy.tsx":
/*!*****************************!*\
  !*** ./code/Typograhpy.tsx ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVHlwb2dyYWhweS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVHlwb2dyYWhweS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixtQ0FBMEQ7QUFDMUQseURBQWdEO0FBQ2hELDRDQUF5QztBQUV6QyxNQUFNLENBQUMsR0FBRywyQkFBTSxDQUFDLENBQUMsQ0FBQTs7O0lBR2QsS0FBSyxDQUFDLEVBQUUsQ0FDUixLQUFLLENBQUMsSUFBSSxLQUFLLG1CQUFtQjtJQUNsQyx1QkFBRyxDQUFBOzs7Ozs7ZUFNUSxlQUFNLENBQUMsWUFBWTtLQUM3QjtJQUNELEtBQUssQ0FBQyxFQUFFLENBQ1IsS0FBSyxDQUFDLElBQUksS0FBSyxxQkFBcUI7SUFDcEMsdUJBQUcsQ0FBQTs7Ozs7ZUFLUSxlQUFNLENBQUMsWUFBWTtLQUM3QjtJQUNELEtBQUssQ0FBQyxFQUFFLENBQ1IsS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVO0lBQ3pCLHVCQUFHLENBQUE7Ozs7ZUFJUSxDQUFDLEdBQUcsRUFBRTs7UUFDYixRQUFRLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDdEIsS0FBSyxRQUFRO2dCQUNYLE9BQU8sZUFBTSxDQUFDLFlBQVksQ0FBQztZQUM3QixLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxlQUFNLENBQUMsY0FBYyxDQUFDO1lBQy9CO2dCQUNFLE1BQU07U0FDVDtLQUNGLENBQUMsRUFBRTtLQUNMO0lBQ0QsS0FBSyxDQUFDLEVBQUUsQ0FDUixLQUFLLENBQUMsSUFBSSxLQUFLLGFBQWE7SUFDNUIsdUJBQUcsQ0FBQTs7Ozs7ZUFLUSxlQUFNLENBQUMsV0FBVztLQUM1QjtJQUNELEtBQUssQ0FBQyxFQUFFLENBQ1IsS0FBSyxDQUFDLElBQUksS0FBSyxTQUFTO0lBQ3hCLHVCQUFHLENBQUE7Ozs7ZUFJUSxlQUFNLENBQUMsWUFBWTtLQUM3QjtJQUNELEtBQUssQ0FBQyxFQUFFLENBQ1IsS0FBSyxD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

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const styled_components_1 = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
const themes_1 = __webpack_require__(/*! ./shared/themes */ "./code/shared/themes.tsx");
const P = styled_components_1.default.p `
margin: 0px;
padding: 0px;
  ${props => props.type === "header-emphasized" &&
    styled_components_1.css `
      font-family: "SF Pro Display";
      font-weight: 700;
      font-size: 34px;
      line-height: 1;
      letter-spacing: 0.5px;
      color: ${themes_1.colors.labelPrimary};
    `}
  ${props => props.type === "footnote-emphasized" &&
    styled_components_1.css `
      font-family: "SF Pro Text";
      font-weight: 500;
      font-size: 11px;
      letter-spacing: 0.16px;
      color: ${themes_1.colors.primaryColor};
    `}
  ${props => props.type === "headline" &&
    styled_components_1.css `
      font-family: "SF Pro Display";
      font-size: 22px;
      letter-spacing: 0.33px;
      color: ${(() => {
        window["__checkBudget__"]();
        switch (props.lineType) {
            case "line-1":
                return themes_1.colors.labelPrimary;
            case "line-2":
                return themes_1.colors.labelSecondary;
            default:
                break;
        }
    })()};
    `}
  ${props => props.type === "shelf-title" &&
    styled_components_1.css `
      font-family: "SF Pro Display";
      font-weight: 700;
      font-size: 22px;
      letter-spacing: 0.33px;
      color: ${themes_1.colors.shelfHeader};
    `}
  ${props => props.type === "see-all" &&
    styled_components_1.css `
      font-family: "SF Pro Text";
      font-size: 16.5px;
      letter-spacing: -0.2px;
      color: ${themes_1.colors.primaryColor};
    `}
  ${props => props.type === "caption" &&
    styled_components_1.css `
      font-family: "SF Pro Text";
      font-size: 14.5px;
      letter-spacing: 0;
      color: ${(() => {
        window["__checkBudget__"]();
        switch (props.lineType) {
            case "line-1":
                return themes_1.colors.labelPrimary;
            case "line-2":
                return themes_1.colors.labelSecondary;
            default:
                break;
        }
    })()};
    `}
  ${props => props.type === "label" &&
    styled_components_1.css `
      font-family: "SF Pro Text";
      font-size: 16.5px;
      letter-spacing: -0.15px;
      color: ${themes_1.colors.labelPrimary};
    `}
  ${props => props.type === "title-emphasized" &&
    styled_components_1.css `
      font-family: "SF Pro Text";
      font-weight: 600;
      font-size: 22px;
      letter-spacing: -0.8px;
      color: ${themes_1.colors.shelfHeader};
    `}
  ${props => props.type === "title" &&
    styled_components_1.css `
      font-family: "SF Pro Text";
      font-size: 22px;
      letter-spacing: -1.1px;
      color: ${themes_1.colors.primaryColor};
    `}
  ${props => props.type === "nav-label" &&
    styled_components_1.css `
      font-family: "SF Pro Text";
      font-weight: 500;
      font-size: 10px;
      letter-spacing: 0.1px;
      color: ${(() => {
        window["__checkBudget__"]();
        switch (props.lineType) {
            case "active":
                return themes_1.colors.primaryColor;
            case "inactive":
                return themes_1.colors.labelSecondary;
            default:
                break;
        }
    })()};
    `}
  ${props => props.type === "header" &&
    styled_components_1.css `
      font-family: "SF Pro Text";
      font-weight: 500;
      font-size: 17.5px;
      letter-spacing: -0.5px;
    `}
  /* Custom Color Support */
  ${props => props.customColor &&
    props.color &&
    styled_components_1.css `
      color: ${props.color};
    `}
  ${props => props.align &&
    styled_components_1.css `
      text-align: ${props.align};
    `}
/* background: pink; */
`;
const variants = {
    active: {
        backgroundColor: "#f00",
        fontSize: 50
    },
    inactive: {
        backgroundColor: "#fff",
        transition: { duration: 2 }
    }
};
function Typograhpy(_a) {
    var { text } = _a, 
    // except it to prevent forwardRef Error
    props = __rest(_a, ["text"]);
    window["__checkBudget__"]();
    return React.createElement(P, Object.assign({}, props), text);
}
exports.Typograhpy = Typograhpy;
Typograhpy.defaultProps = {
    text: "Type Text",
    type: "header-emphasized",
    lineType: "line-1",
    customColor: false,
    color: "#000000",
    align: "left",
    theme: "light"
};
// Learn more: https://framer.com/api/property-controls/
framer_1.addPropertyControls(Typograhpy, {
    text: {
        type: framer_1.ControlType.String
    },
    type: {
        type: framer_1.ControlType.Enum,
        options: [
            "header-emphasized",
            "footnote-emphasized",
            "headline",
            "shelf-title",
            "caption",
            "label",
            "title-emphasized",
            "title",
            "nav-label",
            "header"
        ]
    },
    lineType: {
        type: framer_1.ControlType.Enum,
        options: ["line-1", "line-2"]
    }
});
exports.__info__ = [{ "name": "Typograhpy", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Common/ActionGlyph.tsx":
/*!**************************************************!*\
  !*** ./code/assets/Icons/Common/ActionGlyph.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uR2x5cGguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2Fzc2V0cy9JY29ucy9Db21tb24vQWN0aW9uR2x5cGgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBRTlCLFNBQWdCLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRTs7SUFDbkMsT0FBTyxDQUNMLDZCQUFLLEtBQUssRUFBQyw0QkFBNEIsRUFBQyxPQUFPLEVBQUMsV0FBVztRQUN6RCw4QkFDRSxJQUFJLEVBQUUsS0FBSyxFQUNYLENBQUMsRUFBQyxpUUFBaVEsR0FDblEsQ0FDRSxDQUNQLENBQUE7Q0FDRjtBQVRELGtDQVNDO0FBRUQsV0FBVyxDQUFDLFlBQVksR0FBRztJQUN6QixLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function ActionGlyph({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        React.createElement("path", { fill: color, d: "M11.174 17.208v-4.395h-4.36A.82.82 0 016 12.004c0-.445.377-.816.813-.816h4.361V6.792c0-.437.377-.792.822-.792.444 0 .822.355.822.792v4.395h4.369a.82.82 0 01.813.816.815.815 0 01-.813.809h-4.37v4.395c0 .43-.377.792-.821.792-.445 0-.822-.363-.822-.792v.001z" })));
}
exports.ActionGlyph = ActionGlyph;
ActionGlyph.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "ActionGlyph", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Common/Airdrop.tsx":
/*!**********************************************!*\
  !*** ./code/assets/Icons/Common/Airdrop.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWlyZHJvcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvYXNzZXRzL0ljb25zL0NvbW1vbi9BaXJkcm9wLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUUvQixTQUFnQixPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUU7O0lBQy9CLE9BQU8sQ0FDTCw2QkFBSyxLQUFLLEVBQUMsNEJBQTRCLEVBQUMsT0FBTyxFQUFDLFdBQVc7UUFDekQsOEJBQ0UsQ0FBQyxFQUFDLHNxREFBc3FELEVBQ3hxRCxJQUFJLEVBQUUsS0FBSyxHQUNMLENBQ0osQ0FDUCxDQUFDO0NBQ0g7QUFURCwwQkFTQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Airdrop({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 13 13" },
        React.createElement("path", { d: "M 0.049 6.559 C 0.049 8.234 0.729 9.758 1.819 10.859 C 1.941 10.982 2.076 10.982 2.188 10.842 L 2.48 10.514 C 2.586 10.391 2.58 10.279 2.475 10.162 C 1.533 9.199 1.006 7.907 1.004 6.56 C 1.004 3.747 3.336 1.403 6.172 1.403 C 9.002 1.403 11.334 3.747 11.334 6.56 C 11.333 7.904 10.808 9.195 9.869 10.157 C 9.758 10.28 9.752 10.392 9.857 10.515 L 10.15 10.849 C 10.262 10.978 10.396 10.983 10.52 10.86 C 11.656 9.718 12.293 8.171 12.29 6.56 C 12.29 3.207 9.546 0.44 6.171 0.44 C 2.79 0.441 0.049 3.207 0.049 6.56 Z M 1.754 6.559 C 1.754 7.677 2.179 8.754 2.944 9.57 C 3.066 9.705 3.207 9.693 3.324 9.57 L 3.617 9.248 C 3.729 9.137 3.723 9.02 3.611 8.885 C 3.034 8.248 2.715 7.419 2.715 6.559 C 2.715 4.672 4.273 3.107 6.172 3.107 C 8.064 3.107 9.623 4.672 9.623 6.559 C 9.627 7.415 9.309 8.241 8.733 8.873 C 8.615 9.013 8.609 9.131 8.727 9.243 L 9.025 9.57 C 9.137 9.693 9.271 9.705 9.395 9.57 C 10.162 8.755 10.587 7.678 10.584 6.559 C 10.584 4.139 8.604 2.146 6.172 2.146 C 3.736 2.151 1.761 4.124 1.754 6.56 Z M 3.459 6.559 C 3.459 7.209 3.682 7.801 4.069 8.269 C 4.179 8.404 4.32 8.416 4.443 8.275 L 4.748 7.965 C 4.859 7.848 4.859 7.736 4.771 7.607 C 4.543 7.305 4.42 6.938 4.42 6.56 C 4.42 5.605 5.217 4.813 6.172 4.813 C 7.122 4.813 7.918 5.605 7.918 6.56 C 7.918 6.946 7.789 7.315 7.572 7.603 C 7.479 7.737 7.479 7.849 7.59 7.966 L 7.895 8.282 C 8.018 8.417 8.158 8.412 8.27 8.265 C 8.668 7.786 8.883 7.182 8.879 6.56 C 8.872 5.068 7.664 3.86 6.172 3.853 C 4.678 3.857 3.466 5.066 3.459 6.56 Z M 2.205 11.937 C 2 12.154 2.129 12.482 2.434 12.482 L 9.898 12.482 C 10.209 12.482 10.338 12.154 10.127 11.938 L 6.447 7.77 C 6.376 7.689 6.274 7.643 6.166 7.643 C 6.058 7.643 5.956 7.689 5.885 7.77 Z", fill: color })));
}
exports.Airdrop = Airdrop;
exports.__info__ = [{ "name": "Airdrop", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Common/Chevron.tsx":
/*!**********************************************!*\
  !*** ./code/assets/Icons/Common/Chevron.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hldnJvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvYXNzZXRzL0ljb25zL0NvbW1vbi9DaGV2cm9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUU5QixTQUFnQixPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUU7O0lBQy9CLE9BQU8sQ0FDTCw2QkFBSyxLQUFLLEVBQUMsNEJBQTRCLEVBQUMsT0FBTyxFQUFDLFdBQVc7UUFDekQsOEJBQ0UsQ0FBQyxFQUFDLGlLQUFpSyxFQUNuSyxJQUFJLEVBQUUsS0FBSyxHQUNYLENBQ0UsQ0FDUCxDQUFBO0NBQ0Y7QUFURCwwQkFTQztBQUVELE9BQU8sQ0FBQyxZQUFZLEdBQUc7SUFDckIsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxNQUFNO0NBQ2QsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Chevron({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 16 16" },
        React.createElement("path", { d: "M7.2 3.2l4.6 4.3c.1.2.2.3.2.5s-.1.3-.2.5l-4.6 4.3c-.1.1-.3.2-.5.2-.4 0-.7-.3-.7-.7 0-.2.1-.3.2-.5L10.3 8 6.2 4.1C6.1 4 6 3.8 6 3.7c0-.4.3-.7.7-.7.2 0 .4.1.5.2z", fill: color })));
}
exports.Chevron = Chevron;
Chevron.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "Chevron", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Common/Heart.tsx":
/*!********************************************!*\
  !*** ./code/assets/Icons/Common/Heart.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhcnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2Fzc2V0cy9JY29ucy9Db21tb24vSGVhcnQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBRTlCLFNBQWdCLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRTs7SUFDN0IsT0FBTyxDQUNMLDZCQUFLLEtBQUssRUFBQyw0QkFBNEIsRUFBQyxPQUFPLEVBQUMsV0FBVztRQUN6RCw4QkFDRSxJQUFJLEVBQUUsS0FBSyxFQUNYLFFBQVEsRUFBQyxTQUFTLEVBQ2xCLENBQUMsRUFBQyxzTkFBc04sRUFDeE4sUUFBUSxFQUFDLFNBQVMsR0FDbEIsQ0FDRSxDQUNQLENBQUE7Q0FDRjtBQVhELHNCQVdDO0FBRUQsS0FBSyxDQUFDLFlBQVksR0FBRztJQUNuQixLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Heart({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        React.createElement("path", { fill: color, fillRule: "evenodd", d: "M12.003 7.998C12.643 6.82 13.769 6 15.164 6 17.394 6 19 7.686 19 9.995c0 3.517-3.742 6.713-6.372 8.399-.414.261-.843.261-1.257 0C8.741 16.708 5 13.512 5 9.995 5 7.686 6.605 6 8.836 6c1.402 0 2.521.82 3.167 1.998z", clipRule: "evenodd" })));
}
exports.Heart = Heart;
Heart.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "Heart", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Common/List.tsx":
/*!*******************************************!*\
  !*** ./code/assets/Icons/Common/List.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvYXNzZXRzL0ljb25zL0NvbW1vbi9MaXN0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUUvQixTQUFnQixJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUU7O0lBQzVCLE9BQU8sQ0FDTCw2QkFBSyxLQUFLLEVBQUMsNEJBQTRCLEVBQUMsT0FBTyxFQUFDLFdBQVc7UUFDekQsOEJBQ0UsQ0FBQyxFQUFDLCtoREFBK2hELEVBQ2ppRCxJQUFJLEVBQUUsS0FBSyxHQUNMLENBQ0osQ0FDUCxDQUFDO0NBQ0g7QUFURCxvQkFTQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function List({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 14 10" },
        React.createElement("path", { d: "M 1.496 2.068 C 2.046 2.068 2.498 1.618 2.498 1.066 C 2.496 0.513 2.049 0.064 1.496 0.06 C 0.943 0.064 0.496 0.513 0.494 1.066 C 0.494 1.617 0.945 2.068 1.496 2.068 Z M 4.549 1.793 L 12.418 1.793 C 12.611 1.794 12.797 1.718 12.933 1.581 C 13.07 1.445 13.146 1.259 13.145 1.066 C 13.147 0.873 13.071 0.687 12.934 0.55 C 12.797 0.414 12.611 0.338 12.418 0.34 L 4.548 0.34 C 4.355 0.338 4.169 0.414 4.033 0.551 C 3.896 0.687 3.82 0.873 3.822 1.066 C 3.82 1.259 3.896 1.445 4.033 1.582 C 4.17 1.719 4.356 1.795 4.549 1.793 Z M 1.496 5.777 C 2.046 5.777 2.498 5.327 2.498 4.775 C 2.498 4.225 2.047 3.773 1.496 3.773 C 0.946 3.773 0.494 4.225 0.494 4.775 C 0.494 5.326 0.945 5.777 1.496 5.777 Z M 4.549 5.502 L 12.418 5.502 C 12.611 5.504 12.798 5.428 12.934 5.291 C 13.071 5.155 13.147 4.968 13.145 4.775 C 13.147 4.582 13.071 4.396 12.934 4.259 C 12.797 4.123 12.611 4.047 12.418 4.049 L 4.548 4.049 C 4.355 4.047 4.169 4.123 4.033 4.26 C 3.896 4.396 3.82 4.582 3.822 4.775 C 3.82 4.968 3.896 5.154 4.033 5.291 C 4.17 5.428 4.356 5.504 4.549 5.502 Z M 1.496 9.492 C 2.046 9.492 2.498 9.041 2.498 8.49 C 2.497 7.936 2.05 7.486 1.496 7.482 C 0.942 7.486 0.495 7.936 0.494 8.49 C 0.494 9.041 0.945 9.492 1.496 9.492 Z M 4.549 9.217 L 12.418 9.217 C 12.611 9.218 12.797 9.142 12.933 9.005 C 13.07 8.869 13.146 8.683 13.145 8.49 C 13.147 8.297 13.071 8.111 12.934 7.974 C 12.797 7.838 12.611 7.762 12.418 7.764 L 4.548 7.764 C 4.355 7.762 4.169 7.838 4.033 7.975 C 3.896 8.111 3.82 8.297 3.822 8.49 C 3.82 8.683 3.896 8.869 4.033 9.006 C 4.17 9.143 4.356 9.219 4.549 9.217 Z", fill: color })));
}
exports.List = List;
exports.__info__ = [{ "name": "List", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Common/More.tsx":
/*!*******************************************!*\
  !*** ./code/assets/Icons/Common/More.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTW9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvYXNzZXRzL0ljb25zL0NvbW1vbi9Nb3JlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUU5QixTQUFnQixJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFOztJQUNyQyxPQUFPLENBQ0wsNkJBQ0UsS0FBSyxFQUFDLDRCQUE0QixFQUNsQyxVQUFVLEVBQUMsOEJBQThCLEVBQ3pDLE9BQU8sRUFBQyxXQUFXO1FBRW5CO1lBQ0UsZ0NBQVEsRUFBRSxFQUFDLEdBQUcsRUFBQyxFQUFFLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxJQUFJLEVBQUMsQ0FBQyxFQUFDLElBQUksR0FBRztZQUN4Qyw4QkFDRSxFQUFFLEVBQUMsR0FBRyxFQUNOLENBQUMsRUFBQywyS0FBMkssRUFDN0ssSUFBSSxFQUFFLEtBQUssR0FDWCxDQUNHO1FBQ1AsMkJBQUcsSUFBSSxFQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsV0FBVyxFQUFDLEdBQUc7WUFDN0QsOEJBQU0sSUFBSSxFQUFDLE1BQU07Z0JBQ2YsNkJBQUssU0FBUyxFQUFDLElBQUksR0FBRyxDQUNqQjtZQUNQLDZCQUFLLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFDLElBQUksR0FBRztZQUNyQywyQkFBRyxTQUFTLEVBQUMsaUJBQWlCO2dCQUM1Qiw4QkFBTSxJQUFJLEVBQUMsTUFBTTtvQkFDZiw2QkFBSyxTQUFTLEVBQUMsSUFBSSxHQUFHLENBQ2pCO2dCQUNQLDZCQUFLLElBQUksRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsSUFBSSxHQUFHLENBQ25ELENBQ0YsQ0FDQSxDQUNQLENBQUE7Q0FDRjtBQTdCRCxvQkE2QkM7QUFFRCxJQUFJLENBQUMsWUFBWSxHQUFHO0lBQ2xCLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsTUFBTTtJQUNiLE9BQU8sRUFBRSxhQUFhO0NBQ3ZCLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function More({ color, bgColor }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 28 28" },
        React.createElement("defs", null,
            React.createElement("circle", { id: "a", cx: "14", cy: "14", r: "14" }),
            React.createElement("path", { id: "b", d: "M8 3.692A1.846 1.846 0 118 0a1.846 1.846 0 010 3.692zm-6.154 0a1.846 1.846 0 110-3.692 1.846 1.846 0 010 3.692zm12.308 0a1.846 1.846 0 110-3.692 1.846 1.846 0 010 3.692z", fill: color })),
        React.createElement("g", { fill: "none", fillRule: "evenodd", stroke: "none", strokeWidth: "1" },
            React.createElement("mask", { fill: "#fff" },
                React.createElement("use", { xlinkHref: "#a" })),
            React.createElement("use", { fill: bgColor, xlinkHref: "#a" }),
            React.createElement("g", { transform: "translate(6 12)" },
                React.createElement("mask", { fill: "#fff" },
                    React.createElement("use", { xlinkHref: "#b" })),
                React.createElement("use", { fill: "#000", fillRule: "nonzero", xlinkHref: "#b" })))));
}
exports.More = More;
More.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
    bgColor: 'transparent',
};
exports.__info__ = [{ "name": "More", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Common/Search.tsx":
/*!*********************************************!*\
  !*** ./code/assets/Icons/Common/Search.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9hc3NldHMvSWNvbnMvQ29tbW9uL1NlYXJjaC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFFOUIsU0FBZ0IsTUFBTSxDQUFDLEVBQUUsS0FBSyxFQUFFOztJQUM5QixPQUFPLENBQ0wsNkJBQUssS0FBSyxFQUFDLDRCQUE0QixFQUFDLE9BQU8sRUFBQyxXQUFXO1FBQ3pELDhCQUNFLElBQUksRUFBRSxLQUFLLEVBQ1gsQ0FBQyxFQUFDLHlNQUF5TSxHQUMzTSxDQUNFLENBQ1AsQ0FBQTtDQUNGO0FBVEQsd0JBU0M7QUFFRCxNQUFNLENBQUMsWUFBWSxHQUFHO0lBQ3BCLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsTUFBTTtDQUNkLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Search({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        React.createElement("path", { fill: color, d: "M15.87 14.835c.018.015.035.03.051.047l3.864 3.863a.735.735 0 01-1.04 1.04l-3.863-3.864a.755.755 0 01-.047-.05 6.667 6.667 0 111.035-1.036zM10.667 16a5.333 5.333 0 100-10.666 5.333 5.333 0 000 10.666z" })));
}
exports.Search = Search;
Search.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "Search", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Common/VolumeMax.tsx":
/*!************************************************!*\
  !*** ./code/assets/Icons/Common/VolumeMax.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVm9sdW1lTWF4LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9hc3NldHMvSWNvbnMvQ29tbW9uL1ZvbHVtZU1heC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFFOUIsU0FBZ0IsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFOztJQUNqQyxPQUFPLENBQ0wsNkJBQUssS0FBSyxFQUFDLDRCQUE0QixFQUFDLE9BQU8sRUFBQyxXQUFXO1FBQ3pELDJCQUFHLFFBQVEsRUFBQyxhQUFhO1lBQ3ZCLDhCQUNFLElBQUksRUFBRSxLQUFLLEVBQ1gsQ0FBQyxFQUFDLHc4QkFBdzhCLEdBQzE4QixDQUNBO1FBQ0o7WUFDRSxrQ0FBVSxFQUFFLEVBQUMsT0FBTztnQkFDbEIsOEJBQU0sSUFBSSxFQUFDLE1BQU0sRUFBQyxDQUFDLEVBQUMsaUJBQWlCLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixHQUFHLENBQzFELENBQ04sQ0FDSCxDQUNQLENBQUE7Q0FDRjtBQWhCRCw4QkFnQkM7QUFFRCxTQUFTLENBQUMsWUFBWSxHQUFHO0lBQ3ZCLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsTUFBTTtDQUNkLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function VolumeMax({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 34 34" },
        React.createElement("g", { clipPath: "url(#clip0)" },
            React.createElement("path", { fill: color, d: "M25.49 24.192c1.01-2.01 1.802-4.625 1.802-7.458s-.792-5.448-1.802-7.458c-.23-.459-.136-.886.26-1.146.417-.271.917-.104 1.188.375 1.25 2.229 2.01 5.093 2.01 8.229 0 3.135-.76 6-2.01 8.23-.271.478-.771.645-1.188.374-.396-.26-.49-.687-.26-1.146zm-9.323-1.49c0 .876-.594 1.49-1.438 1.49-.375 0-.708-.146-1.083-.416l-4.021-2.959H6.917C5.729 20.817 5 20.171 5 18.901V14.63c0-1.271.73-1.917 1.917-1.917h2.708l4.02-2.958c.376-.271.71-.417 1.084-.417.844 0 1.438.615 1.438 1.49v11.875zm5.625-.645c.708-1.521 1.229-3.271 1.229-5.323 0-2.052-.521-3.802-1.23-5.323-.208-.448-.114-.865.271-1.135.396-.271.938-.105 1.188.375.885 1.708 1.417 3.74 1.417 6.083 0 2.344-.532 4.375-1.417 6.083-.25.48-.792.646-1.188.375-.385-.27-.479-.687-.27-1.135zm-3.542-1.958c.458-.98.75-2.094.75-3.365 0-1.27-.292-2.386-.75-3.365-.198-.427-.125-.864.27-1.135.407-.27.949-.115 1.188.375a9.542 9.542 0 01.917 4.125 9.542 9.542 0 01-.917 4.125c-.24.49-.78.646-1.187.375-.396-.27-.469-.708-.271-1.136z" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0" },
                React.createElement("path", { fill: "#fff", d: "M0 0H24V17.6H0z", transform: "translate(5 8)" })))));
}
exports.VolumeMax = VolumeMax;
VolumeMax.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "VolumeMax", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Common/VolumeMin.tsx":
/*!************************************************!*\
  !*** ./code/assets/Icons/Common/VolumeMin.tsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVm9sdW1lTWluLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9hc3NldHMvSWNvbnMvQ29tbW9uL1ZvbHVtZU1pbi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFFOUIsU0FBZ0IsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFOztJQUNqQyxPQUFPLENBQ0wsNkJBQUssS0FBSyxFQUFDLDRCQUE0QixFQUFDLE9BQU8sRUFBQyxXQUFXO1FBQ3pELDhCQUNFLElBQUksRUFBRSxLQUFLLEVBQ1gsQ0FBQyxFQUFDLDRPQUE0TyxHQUM5TyxDQUNFLENBQ1AsQ0FBQTtDQUNGO0FBVEQsOEJBU0M7QUFFRCxTQUFTLENBQUMsWUFBWSxHQUFHO0lBQ3ZCLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsTUFBTTtDQUNkLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function VolumeMin({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 34 34" },
        React.createElement("path", { fill: color, d: "M16.167 22.703c0 .875-.594 1.49-1.438 1.49-.375 0-.708-.147-1.083-.418l-4.021-2.958H6.917C5.729 20.817 5 20.171 5 18.9v-4.27c0-1.271.73-1.917 1.917-1.917h2.708l4.02-2.958c.376-.271.71-.417 1.084-.417.844 0 1.438.614 1.438 1.49v11.875z" })));
}
exports.VolumeMin = VolumeMin;
VolumeMin.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "VolumeMin", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Music/Browse.tsx":
/*!********************************************!*\
  !*** ./code/assets/Icons/Music/Browse.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9hc3NldHMvSWNvbnMvTXVzaWMvQnJvd3NlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUU5QixTQUFnQixNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUU7O0lBQzlCLE9BQU8sQ0FDTDtRQUNFLDZCQUFLLE9BQU8sRUFBQyxXQUFXLEVBQUMsS0FBSyxFQUFDLDRCQUE0QjtZQUN6RCw4QkFDRSxRQUFRLEVBQUMsU0FBUyxFQUNsQixRQUFRLEVBQUMsU0FBUyxFQUNsQixDQUFDLEVBQUMscW1CQUFxbUIsRUFDdm1CLElBQUksRUFBRSxLQUFLLEdBQ1gsQ0FDRSxDQUNGLENBQ1AsQ0FBQTtDQUNGO0FBYkQsd0JBYUM7QUFFRCxNQUFNLENBQUMsWUFBWSxHQUFHO0lBQ3BCLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsTUFBTTtDQUNkLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Browse({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("div", null,
        React.createElement("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.864 6.51891C8.864 5.97691 9.165 5.77291 9.594 5.67491L16.87 4.05591C17.593 3.89791 18 4.04791 18 4.85391V15.5719C18 17.6809 16.388 18.4119 15.063 18.4119C13.903 18.4119 13.022 17.5829 13.022 16.4979C13.022 15.2179 14.009 14.6379 15.221 14.3599L16.305 14.1039C16.788 13.9909 16.923 13.7349 16.923 13.3049L16.931 8.48491C16.931 8.16091 16.758 8.01791 16.404 8.10091L10.408 9.40391C10.084 9.46391 9.979 9.56991 9.979 9.99791V17.2819C9.979 19.4059 8.337 20.1589 7.011 20.1589C5.844 20.1589 5 19.3229 5 18.2459C5 16.9509 5.987 16.3709 7.162 16.0769L8.299 15.8209C8.728 15.7069 8.864 15.4819 8.864 15.0599V6.51891Z", fill: color }))));
}
exports.Browse = Browse;
Browse.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "Browse", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Music/Forward.tsx":
/*!*********************************************!*\
  !*** ./code/assets/Icons/Music/Forward.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9yd2FyZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvYXNzZXRzL0ljb25zL011c2ljL0ZvcndhcmQudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBRTlCLFNBQWdCLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRTs7SUFDL0IsT0FBTyxDQUNMLDZCQUFLLEtBQUssRUFBQyw0QkFBNEIsRUFBQyxPQUFPLEVBQUMsV0FBVztRQUN6RCw4QkFDRSxDQUFDLEVBQUMsK1lBQStZLEVBQ2paLElBQUksRUFBRSxLQUFLLEdBQ1gsQ0FDRSxDQUNQLENBQUE7Q0FDRjtBQVRELDBCQVNDO0FBRUQsT0FBTyxDQUFDLFlBQVksR0FBRztJQUNyQixLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Forward({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 34 34" },
        React.createElement("path", { d: "M8.307 23c-.536 0-1.031-.38-1.031-1.124v-9.752c0-.744.495-1.124 1.031-1.124.293 0 .569.097.888.283l8.26 4.617c.436.243.729.494.805.874v-4.65c0-.744.502-1.124 1.03-1.124.302 0 .578.097.896.283l8.261 4.617c.511.283.829.574.829 1.1 0 .518-.318.817-.829 1.1l-8.261 4.617c-.318.186-.594.283-.896.283-.528 0-1.03-.38-1.03-1.124v-4.658c-.076.388-.369.639-.805.882l-8.26 4.617c-.319.186-.595.283-.888.283z", fill: color })));
}
exports.Forward = Forward;
Forward.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "Forward", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Music/Lyrics.tsx":
/*!********************************************!*\
  !*** ./code/assets/Icons/Music/Lyrics.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTHlyaWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9hc3NldHMvSWNvbnMvTXVzaWMvTHlyaWNzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUUvQixTQUFnQixNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUU7O0lBQzlCLE9BQU8sQ0FDTCw2QkFBSyxLQUFLLEVBQUMsNEJBQTRCLEVBQUMsT0FBTyxFQUFDLFdBQVc7UUFDekQsOEJBQ0UsQ0FBQyxFQUFDLHkxQ0FBeTFDLEVBQzMxQyxJQUFJLEVBQUUsS0FBSyxHQUNMLENBQ0osQ0FDUCxDQUFDO0NBQ0g7QUFURCx3QkFTQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Lyrics({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 14 13" },
        React.createElement("path", { d: "M 4.388 12.895 C 4.798 12.895 5.126 12.725 5.63 12.285 L 7.605 10.557 L 10.716 10.557 C 12.509 10.557 13.605 9.45 13.605 7.674 L 13.605 3 C 13.605 1.224 12.509 0.117 10.716 0.117 L 3.386 0.117 C 1.599 0.116 0.503 1.217 0.503 2.999 L 0.503 7.674 C 0.503 9.456 1.675 10.557 3.275 10.557 L 3.433 10.557 L 3.433 11.841 C 3.433 12.497 3.796 12.895 4.388 12.895 Z M 4.763 11.155 L 4.763 9.544 C 4.763 9.139 4.57 8.987 4.213 8.987 L 3.492 8.987 C 2.542 8.987 2.074 8.512 2.074 7.575 L 2.074 3.098 C 2.074 2.161 2.542 1.68 3.492 1.68 L 10.617 1.68 C 11.56 1.68 12.034 2.16 12.034 3.098 L 12.034 7.575 C 12.034 8.512 11.56 8.987 10.616 8.987 L 7.489 8.987 C 7.079 8.987 6.897 9.069 6.598 9.367 L 4.764 11.155 Z M 4.23 4.955 C 4.23 5.653 4.67 6.163 5.314 6.163 C 5.607 6.163 5.864 6.087 6.023 5.893 L 6.123 5.893 C 5.982 6.309 5.566 6.655 5.038 6.773 C 4.863 6.813 4.781 6.913 4.781 7.059 C 4.781 7.229 4.921 7.335 5.103 7.335 C 5.777 7.335 6.861 6.526 6.861 5.237 C 6.861 4.381 6.339 3.707 5.501 3.707 C 4.769 3.707 4.23 4.229 4.23 4.956 Z M 7.376 4.955 C 7.376 5.653 7.816 6.163 8.466 6.163 C 8.759 6.163 9.011 6.087 9.169 5.893 L 9.275 5.893 C 9.128 6.309 8.712 6.655 8.191 6.773 C 8.015 6.813 7.927 6.913 7.927 7.059 C 7.927 7.229 8.067 7.335 8.249 7.335 C 8.923 7.335 10.007 6.526 10.007 5.237 C 10.007 4.381 9.486 3.707 8.647 3.707 C 7.915 3.707 7.377 4.229 7.377 4.956 Z", fill: color })));
}
exports.Lyrics = Lyrics;
exports.__info__ = [{ "name": "Lyrics", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Music/Pause.tsx":
/*!*******************************************!*\
  !*** ./code/assets/Icons/Music/Pause.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGF1c2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2Fzc2V0cy9JY29ucy9NdXNpYy9QYXVzZS50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFFOUIsU0FBZ0IsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFOztJQUM3QixPQUFPLENBQ0wsNkJBQ0UsS0FBSyxFQUFDLDRCQUE0QixFQUNsQyxRQUFRLEVBQUMsU0FBUyxFQUNsQixjQUFjLEVBQUMsT0FBTyxFQUN0QixnQkFBZ0IsRUFBQyxPQUFPLEVBQ3hCLFFBQVEsRUFBQyxTQUFTLEVBQ2xCLE9BQU8sRUFBQyxXQUFXO1FBRW5CLDhCQUNFLFFBQVEsRUFBQyxTQUFTLEVBQ2xCLENBQUMsRUFBQyxxTkFBcU4sRUFDdk4sSUFBSSxFQUFFLEtBQUssR0FDWCxDQUNFLENBQ1AsQ0FBQTtDQUNGO0FBakJELHNCQWlCQztBQUVELEtBQUssQ0FBQyxZQUFZLEdBQUc7SUFDbkIsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxNQUFNO0NBQ2QsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Pause({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "1.414", clipRule: "evenodd", viewBox: "0 0 34 34" },
        React.createElement("path", { fillRule: "nonzero", d: "M20.3 6h2.9A1.8 1.8 0 0125 7.8v18.4a1.8 1.8 0 01-1.8 1.8h-2.9a1.8 1.8 0 01-1.8-1.8V7.8A1.8 1.8 0 0120.3 6zm-9.5 0h2.9a1.8 1.8 0 011.8 1.8v18.4a1.8 1.8 0 01-1.8 1.8h-2.9A1.8 1.8 0 019 26.2V7.8A1.8 1.8 0 0110.8 6z", fill: color })));
}
exports.Pause = Pause;
Pause.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "Pause", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Music/Play.tsx":
/*!******************************************!*\
  !*** ./code/assets/Icons/Music/Play.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvYXNzZXRzL0ljb25zL011c2ljL1BsYXkudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUF5RDtBQUV6RCxTQUFnQixJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUU7O0lBQzVCLE9BQU8sQ0FDTCw2QkFDRSxLQUFLLEVBQUMsNEJBQTRCLEVBQ2xDLFFBQVEsRUFBQyxTQUFTLEVBQ2xCLGNBQWMsRUFBQyxPQUFPLEVBQ3RCLGdCQUFnQixFQUFDLE9BQU8sRUFDeEIsUUFBUSxFQUFDLFNBQVMsRUFDbEIsT0FBTyxFQUFDLFdBQVc7UUFFbkIsOEJBQ0UsUUFBUSxFQUFDLFNBQVMsRUFDbEIsQ0FBQyxFQUFDLDhJQUE4SSxFQUNoSixJQUFJLEVBQUUsS0FBSyxHQUNYLENBQ0UsQ0FDUCxDQUFBO0NBQ0Y7QUFqQkQsb0JBaUJDO0FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRztJQUNsQixLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFBO0FBQ0QsNEJBQW1CLENBQUMsSUFBSSxFQUFFO0lBQ3hCLEtBQUssRUFBRSxvQkFBVyxDQUFDLEtBQUs7Q0FDekIsQ0FBQyxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Play({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", fillRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: "1.414", clipRule: "evenodd", viewBox: "0 0 34 34" },
        React.createElement("path", { fillRule: "nonzero", d: "M28.228 18.327L12.205 27.31c-.99.555-2.205-.17-2.205-1.318V8.008c0-1.146 1.215-1.873 2.205-1.317l16.023 8.982c1.029.577 1.029 2.077 0 2.654z", fill: color })));
}
exports.Play = Play;
Play.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
framer_1.addPropertyControls(Play, {
    color: framer_1.ControlType.Color,
});
exports.__info__ = [{ "name": "Play", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Music/Radio.tsx":
/*!*******************************************!*\
  !*** ./code/assets/Icons/Music/Radio.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmFkaW8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2Fzc2V0cy9JY29ucy9NdXNpYy9SYWRpby50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFFOUIsU0FBZ0IsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFOztJQUM3QixPQUFPLENBQ0wsNkJBQUssT0FBTyxFQUFDLFdBQVcsRUFBQyxLQUFLLEVBQUMsNEJBQTRCO1FBQ3pELDhCQUNFLFFBQVEsRUFBQyxTQUFTLEVBQ2xCLFFBQVEsRUFBQyxTQUFTLEVBQ2xCLENBQUMsRUFBQyx5L0RBQXkvRCxFQUMzL0QsSUFBSSxFQUFFLEtBQUssR0FDWCxDQUNFLENBQ1AsQ0FBQTtDQUNGO0FBWEQsc0JBV0M7QUFFRCxLQUFLLENBQUMsWUFBWSxHQUFHO0lBQ25CLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsTUFBTTtDQUNkLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Radio({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M17.4856 17.1133C20.5336 14.0743 20.4556 9.05827 17.4946 6.12427C17.1986 5.83727 17.1636 5.45327 17.4426 5.18327C17.7126 4.91327 18.0866 4.94827 18.3746 5.24427C21.8046 8.67527 21.9436 14.4233 18.3746 18.0023C18.0866 18.2893 17.7126 18.3243 17.4426 18.0533C17.1636 17.7753 17.1986 17.4003 17.4856 17.1133ZM15.6836 15.3103C17.7296 13.2733 17.6686 9.92127 15.6836 7.93527C15.4046 7.63927 15.3606 7.26427 15.6316 6.98627C15.9096 6.70727 16.2926 6.75127 16.5896 7.03827C19.0446 9.47627 19.1576 13.6303 16.5896 16.2083C16.3016 16.4863 15.9186 16.5303 15.6396 16.2593C15.3696 15.9813 15.3956 15.5983 15.6836 15.3103ZM13.8986 13.5163C14.9436 12.4713 14.9256 10.7573 13.8986 9.72027C13.6016 9.43227 13.5676 9.05827 13.8456 8.77127C14.1156 8.50127 14.4986 8.53627 14.7866 8.83227C16.3016 10.3473 16.3446 12.8643 14.7866 14.4143C14.4986 14.7013 14.1246 14.7363 13.8546 14.4583C13.5676 14.1873 13.6106 13.8043 13.8986 13.5163ZM10.7366 11.6273C10.7366 10.9393 11.3026 10.3563 11.9996 10.3563C12.6966 10.3563 13.2716 10.9393 13.2716 11.6273C13.2716 12.3153 12.6966 12.8893 11.9996 12.8893C11.3026 12.8893 10.7366 12.3153 10.7366 11.6273ZM9.21363 14.4143C7.69763 12.9073 7.66363 10.3823 9.21363 8.84127C9.50063 8.55327 9.87463 8.50927 10.1536 8.78927C10.4326 9.05827 10.3886 9.44127 10.1016 9.72927C9.05663 10.7743 9.07363 12.4983 10.1016 13.5253C10.3976 13.8223 10.4326 14.1873 10.1626 14.4743C9.88363 14.7453 9.50063 14.7103 9.21363 14.4143ZM7.41963 16.2173C4.95463 13.7693 4.84163 9.61627 7.41963 7.03827C7.69763 6.75927 8.08963 6.71627 8.35963 6.99527C8.63863 7.27327 8.60363 7.65627 8.31663 7.93527C6.26963 9.98127 6.33963 13.3253 8.31663 15.3103C8.60363 15.6073 8.64763 15.9813 8.36863 16.2683C8.08963 16.5393 7.71563 16.4953 7.41963 16.2173ZM5.62563 18.0023C2.19463 14.5793 2.05563 8.82327 5.62563 5.25327C5.91263 4.96627 6.29663 4.92227 6.56663 5.19227C6.83563 5.47027 6.80063 5.85427 6.51363 6.14127C3.47463 9.17227 3.54463 14.1873 6.50563 17.1223C6.80063 17.4093 6.83563 17.7933 6.55763 18.0623C6.29663 18.3333 5.91263 18.2983 5.62563 18.0023Z", fill: color })));
}
exports.Radio = Radio;
Radio.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "Radio", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Music/Repeat.tsx":
/*!********************************************!*\
  !*** ./code/assets/Icons/Music/Repeat.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwZWF0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9hc3NldHMvSWNvbnMvTXVzaWMvUmVwZWF0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUU5QixTQUFnQixNQUFNLENBQUMsRUFBRSxLQUFLLEVBQUU7O0lBQzlCLE9BQU8sQ0FDTCw2QkFBSyxLQUFLLEVBQUMsNEJBQTRCLEVBQUMsT0FBTyxFQUFDLFdBQVc7UUFDekQsOEJBQ0UsSUFBSSxFQUFFLEtBQUssRUFDWCxDQUFDLEVBQUMsMnpCQUEyekIsR0FDN3pCLENBQ0UsQ0FDUCxDQUFBO0NBQ0Y7QUFURCx3QkFTQztBQUVELE1BQU0sQ0FBQyxZQUFZLEdBQUc7SUFDcEIsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxNQUFNO0NBQ2QsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Repeat({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        React.createElement("path", { fill: color, d: "M13.575 8.817v-.825c0-.208.14-.375.314-.375.052 0 .104.016.15.047l2.174 1.425c.152.1.207.327.123.508a.347.347 0 01-.123.148l-2.173 1.426c-.152.1-.343.033-.426-.147a.435.435 0 01-.039-.181v-.826H9.501c-.488 0-.844.08-1.128.232-.247.132-.434.32-.566.567-.127.237-.204.526-.226.9a6.286 6.286 0 01-.019.224.6.6 0 01-1.187-.123v-.2c0-.693.13-.911.374-1.367a2.55 2.55 0 011.059-1.06c.456-.243 1-.373 1.693-.373h4.074zm-3.2 6.4v.805a.477.477 0 01-.04.19c-.082.192-.273.261-.425.156l-2.173-1.504a.36.36 0 01-.123-.156c-.084-.192-.029-.432.123-.537l2.173-1.505a.266.266 0 01.151-.049c.173 0 .314.177.314.395v1.005h4.074c.488 0 .844-.08 1.128-.232.247-.132.434-.319.566-.566.127-.238.204-.527.226-.9.003-.048.008-.123.019-.225a.6.6 0 011.187.123v.2c0 .693-.13.911-.374 1.367a2.55 2.55 0 01-1.059 1.06c-.456.244-1 .373-1.693.373h-4.074z" })));
}
exports.Repeat = Repeat;
Repeat.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "Repeat", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Music/RepeatOne.tsx":
/*!***********************************************!*\
  !*** ./code/assets/Icons/Music/RepeatOne.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVwZWF0T25lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9hc3NldHMvSWNvbnMvTXVzaWMvUmVwZWF0T25lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUU5QixTQUFnQixTQUFTLENBQUMsRUFBRSxLQUFLLEVBQUU7O0lBQ2pDLE9BQU8sQ0FDTCw2QkFBSyxLQUFLLEVBQUMsNEJBQTRCLEVBQUMsT0FBTyxFQUFDLFdBQVc7UUFDekQsOEJBQ0UsSUFBSSxFQUFFLEtBQUssRUFDWCxDQUFDLEVBQUMscWdDQUFxZ0MsR0FDdmdDLENBQ0UsQ0FDUCxDQUFBO0NBQ0Y7QUFURCw4QkFTQztBQUVELFNBQVMsQ0FBQyxZQUFZLEdBQUc7SUFDdkIsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtJQUNWLEtBQUssRUFBRSxNQUFNO0NBQ2QsQ0FBQSJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function RepeatOne({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        React.createElement("path", { fill: color, d: "M13.575 8.818v-.826c0-.207.14-.374.314-.374.052 0 .104.016.15.046l2.174 1.426c.152.1.207.327.123.508a.347.347 0 01-.123.148L14.04 11.17c-.152.1-.343.034-.426-.147a.435.435 0 01-.039-.18v-.826H9.501c-.488 0-.844.08-1.128.232-.247.132-.434.319-.566.566-.127.238-.204.526-.226.9a6.286 6.286 0 01-.019.225.6.6 0 01-1.187-.123v-.2c0-.693.13-.912.374-1.368a2.55 2.55 0 011.059-1.059c.456-.244 1-.373 1.693-.373h4.074zm-3.2 6.4v.804a.477.477 0 01-.04.19c-.082.192-.273.262-.425.157l-2.173-1.505a.36.36 0 01-.123-.156c-.084-.191-.029-.431.123-.537l2.173-1.505a.266.266 0 01.151-.048c.173 0 .314.176.314.395v1.005h4.074c.488 0 .844-.08 1.128-.232.247-.132.434-.32.566-.567.127-.237.204-.526.226-.9.003-.048.008-.123.019-.225a.6.6 0 011.187.124v.2c0 .692-.13.91-.374 1.367a2.55 2.55 0 01-1.059 1.059c-.456.244-1 .374-1.693.374h-4.074zm8.4-9.6c.331 0 .4.268.4.6v2.8a.6.6 0 01-1.2 0V6.925l-.307.277a.608.608 0 01-.316.124.533.533 0 01-.377-.15.42.42 0 01-.113-.402c.024-.113.128-.232.313-.356.398-.456.677-.722.838-.8.181-.09.472 0 .762 0z" })));
}
exports.RepeatOne = RepeatOne;
RepeatOne.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "RepeatOne", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Music/Shuffle.tsx":
/*!*********************************************!*\
  !*** ./code/assets/Icons/Music/Shuffle.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2h1ZmZsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvYXNzZXRzL0ljb25zL011c2ljL1NodWZmbGUudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBRTlCLFNBQWdCLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRTs7SUFDL0IsT0FBTyxDQUNMLDZCQUFLLEtBQUssRUFBQyw0QkFBNEIsRUFBQyxPQUFPLEVBQUMsV0FBVztRQUN6RCw4QkFDRSxJQUFJLEVBQUUsS0FBSyxFQUNYLENBQUMsRUFBQywrdUJBQSt1QixHQUNqdkIsQ0FDRSxDQUNQLENBQUE7Q0FDRjtBQVRELDBCQVNDO0FBRUQsT0FBTyxDQUFDLFlBQVksR0FBRztJQUNyQixLQUFLLEVBQUUsRUFBRTtJQUNULE1BQU0sRUFBRSxFQUFFO0lBQ1YsS0FBSyxFQUFFLE1BQU07Q0FDZCxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Shuffle({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        React.createElement("path", { fill: color, d: "M15.644 8.794v-.826c0-.207.14-.374.313-.374.053 0 .105.016.152.046l2.172 1.426c.152.1.207.327.124.508a.348.348 0 01-.124.148l-2.172 1.425c-.152.1-.343.034-.427-.147a.435.435 0 01-.038-.18v-.826h-.302a2.206 2.206 0 00-1.679.779l-1.034 1.22 1.034 1.222a2.206 2.206 0 001.68.78h.3v-.827c0-.207.14-.374.314-.374.053 0 .105.016.152.046l2.172 1.426c.152.1.207.327.124.508a.348.348 0 01-.124.148l-2.172 1.425c-.152.1-.343.034-.427-.147a.434.434 0 01-.038-.18v-.826h-.302a3.393 3.393 0 01-2.596-1.204l-.902-1.067-.903 1.067a3.403 3.403 0 01-2.596 1.204h-.901a.6.6 0 110-1.2h.9a2.203 2.203 0 001.68-.78l1.033-1.22-1.032-1.221a2.203 2.203 0 00-1.68-.78h-.901a.6.6 0 110-1.2h.9a3.404 3.404 0 012.597 1.205l.903 1.067.902-1.067a3.408 3.408 0 012.596-1.204h.302z" })));
}
exports.Shuffle = Shuffle;
Shuffle.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "Shuffle", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/Music/Songs.tsx":
/*!*******************************************!*\
  !*** ./code/assets/Icons/Music/Songs.tsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29uZ3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2Fzc2V0cy9JY29ucy9NdXNpYy9Tb25ncy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFFOUIsU0FBZ0IsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFOztJQUM3QixPQUFPLENBQ0wsNkJBQUssS0FBSyxFQUFDLDRCQUE0QixFQUFDLE9BQU8sRUFBQyxXQUFXO1FBQ3pELDhCQUNFLElBQUksRUFBRSxLQUFLLEVBQ1gsUUFBUSxFQUFDLFNBQVMsRUFDbEIsQ0FBQyxFQUFDLGtTQUFrUyxFQUNwUyxRQUFRLEVBQUMsU0FBUyxHQUNsQixDQUNFLENBQ1AsQ0FBQTtDQUNGO0FBWEQsc0JBV0M7QUFFRCxLQUFLLENBQUMsWUFBWSxHQUFHO0lBQ25CLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixLQUFLLEVBQUUsTUFBTTtDQUNkLENBQUEifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
function Songs({ color }) {
    window["__checkBudget__"]();
    return (React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" },
        React.createElement("path", { fill: color, fillRule: "evenodd", d: "M11.685 6.1c0-.464.336-.666.718-.755l3.558-.793c.71-.156 1.039.024 1.039.711v2.495c0 .405-.21.614-.815.748l-3.109.696c-.352.075-.456.165-.456.583v7.191c0 2.115-1.697 2.602-2.751 2.602-1.054 0-1.869-.816-1.869-1.825 0-1.248.935-1.763 2.056-2.033l1.136-.23c.351-.083.493-.368.493-.689v-8.7z", clipRule: "evenodd" })));
}
exports.Songs = Songs;
Songs.defaultProps = {
    width: 24,
    height: 24,
    color: '#000',
};
exports.__info__ = [{ "name": "Songs", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/assets/Icons/index.tsx":
/*!*************************************!*\
  !*** ./code/assets/Icons/index.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2Fzc2V0cy9JY29ucy9pbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxvQkFBb0I7QUFDcEIsb0RBQW1EO0FBQTFDLG9DQUFBLFdBQVcsQ0FBQTtBQUNwQiw0Q0FBMkM7QUFBbEMsNEJBQUEsT0FBTyxDQUFBO0FBQ2hCLHdDQUF1QztBQUE5Qix3QkFBQSxLQUFLLENBQUE7QUFDZCxzQ0FBcUM7QUFBNUIsc0JBQUEsSUFBSSxDQUFBO0FBQ2Isc0NBQXFDO0FBQTVCLHNCQUFBLElBQUksQ0FBQTtBQUNiLDBDQUF5QztBQUFoQywwQkFBQSxNQUFNLENBQUE7QUFDZixnREFBK0M7QUFBdEMsZ0NBQUEsU0FBUyxDQUFBO0FBQ2xCLGdEQUErQztBQUF0QyxnQ0FBQSxTQUFTLENBQUE7QUFDbEIsNENBQTJDO0FBQWxDLDRCQUFBLE9BQU8sQ0FBQTtBQUNoQix5Q0FBd0M7QUFBL0IsMEJBQUEsTUFBTSxDQUFBO0FBQ2YsMkNBQTBDO0FBQWpDLDRCQUFBLE9BQU8sQ0FBQTtBQUNoQix1Q0FBc0M7QUFBN0Isd0JBQUEsS0FBSyxDQUFBO0FBQ2QscUNBQW9DO0FBQTNCLHNCQUFBLElBQUksQ0FBQTtBQUNiLHVDQUFzQztBQUE3Qix3QkFBQSxLQUFLLENBQUE7QUFDZCx5Q0FBd0M7QUFBL0IsMEJBQUEsTUFBTSxDQUFBO0FBQ2YsK0NBQThDO0FBQXJDLGdDQUFBLFNBQVMsQ0FBQTtBQUNsQiwyQ0FBMEM7QUFBakMsNEJBQUEsT0FBTyxDQUFBO0FBQ2hCLHVDQUFzQztBQUE3Qix3QkFBQSxLQUFLLENBQUE7QUFDZCx5Q0FBd0M7QUFBL0IsMEJBQUEsTUFBTSxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
var ActionGlyph_1 = __webpack_require__(/*! ./Common/ActionGlyph */ "./code/assets/Icons/Common/ActionGlyph.tsx");
exports.ActionGlyph = ActionGlyph_1.ActionGlyph;
var Chevron_1 = __webpack_require__(/*! ./Common/Chevron */ "./code/assets/Icons/Common/Chevron.tsx");
exports.Chevron = Chevron_1.Chevron;
var Heart_1 = __webpack_require__(/*! ./Common/Heart */ "./code/assets/Icons/Common/Heart.tsx");
exports.Heart = Heart_1.Heart;
var List_1 = __webpack_require__(/*! ./Common/List */ "./code/assets/Icons/Common/List.tsx");
exports.List = List_1.List;
var More_1 = __webpack_require__(/*! ./Common/More */ "./code/assets/Icons/Common/More.tsx");
exports.More = More_1.More;
var Search_1 = __webpack_require__(/*! ./Common/Search */ "./code/assets/Icons/Common/Search.tsx");
exports.Search = Search_1.Search;
var VolumeMax_1 = __webpack_require__(/*! ./Common/VolumeMax */ "./code/assets/Icons/Common/VolumeMax.tsx");
exports.VolumeMax = VolumeMax_1.VolumeMax;
var VolumeMin_1 = __webpack_require__(/*! ./Common/VolumeMin */ "./code/assets/Icons/Common/VolumeMin.tsx");
exports.VolumeMin = VolumeMin_1.VolumeMin;
var Airdrop_1 = __webpack_require__(/*! ./Common/Airdrop */ "./code/assets/Icons/Common/Airdrop.tsx");
exports.Airdrop = Airdrop_1.Airdrop;
var Browse_1 = __webpack_require__(/*! ./Music/Browse */ "./code/assets/Icons/Music/Browse.tsx");
exports.Browse = Browse_1.Browse;
var Forward_1 = __webpack_require__(/*! ./Music/Forward */ "./code/assets/Icons/Music/Forward.tsx");
exports.Forward = Forward_1.Forward;
var Pause_1 = __webpack_require__(/*! ./Music/Pause */ "./code/assets/Icons/Music/Pause.tsx");
exports.Pause = Pause_1.Pause;
var Play_1 = __webpack_require__(/*! ./Music/Play */ "./code/assets/Icons/Music/Play.tsx");
exports.Play = Play_1.Play;
var Radio_1 = __webpack_require__(/*! ./Music/Radio */ "./code/assets/Icons/Music/Radio.tsx");
exports.Radio = Radio_1.Radio;
var Repeat_1 = __webpack_require__(/*! ./Music/Repeat */ "./code/assets/Icons/Music/Repeat.tsx");
exports.Repeat = Repeat_1.Repeat;
var RepeatOne_1 = __webpack_require__(/*! ./Music/RepeatOne */ "./code/assets/Icons/Music/RepeatOne.tsx");
exports.RepeatOne = RepeatOne_1.RepeatOne;
var Shuffle_1 = __webpack_require__(/*! ./Music/Shuffle */ "./code/assets/Icons/Music/Shuffle.tsx");
exports.Shuffle = Shuffle_1.Shuffle;
var Songs_1 = __webpack_require__(/*! ./Music/Songs */ "./code/assets/Icons/Music/Songs.tsx");
exports.Songs = Songs_1.Songs;
var Lyrics_1 = __webpack_require__(/*! ./Music/Lyrics */ "./code/assets/Icons/Music/Lyrics.tsx");
exports.Lyrics = Lyrics_1.Lyrics;
exports.__info__ = [];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});
exports.colors = Object.freeze({
    /** rgba(0, 0, 0, 0.95) */
    "labelPrimary": "var(--token-6cd9df99-ad56-48f4-bc82-9a9fff1ade04, rgba(0, 0, 0, 0.95))",
    /** #FE2C55 */
    "primaryColor": "var(--token-b773c538-af73-4d8b-aaf4-e9b5863f991c, rgb(254, 44, 85))",
    /** rgba(60, 60, 67, 0.6) */
    "labelSecondary": "var(--token-39c0accc-b8a1-4193-9ca2-1342c4db2c22, rgba(60, 60, 67, 0.6))",
    /** #000000 */
    "shelfHeader": "var(--token-5f219739-5082-4e34-a232-928e7f6ceb7f, rgb(0, 0, 0))",
    /** rgba(0, 0, 0, 0.95) */
    "textColor": "var(--token-9642626e-16bd-4966-be0d-9ff68ef2d0ce, rgba(0, 0, 0, 0.95))",
    /** rgba(0, 0, 0, 0.07) */
    "borderColor": "var(--token-7473fadb-3780-46f2-abde-4281ea9e770b, rgba(0, 0, 0, 0.07))",
    /** rgba(247, 247, 247, 0.8) */
    "playerBackground": "var(--token-8c05a9e3-3e36-49a3-a6fa-c2c7713e8653, rgba(247, 247, 247, 0.8))",
    /** rgba(255, 255, 255, 0.25) */
    "playerInnerShadow": "var(--token-354dd52e-b506-4dd6-a5d2-9c3879fb9835, rgba(255, 255, 255, 0.25))",
    /** rgba(0, 0, 0, 0.07) */
    "playerDropShadow2": "var(--token-e4a777ae-2832-4e5e-9edc-86af0eaeda95, rgba(0, 0, 0, 0.07))",
});
exports.__info__ = [];


/***/ }),

/***/ "./code/components/Header.tsx":
/*!************************************!*\
  !*** ./code/components/Header.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9jb21wb25lbnRzL0hlYWRlci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQWlFO0FBQ2pFLDhDQUEyQztBQUUzQyxTQUFnQixNQUFNLENBQUMsS0FBSzs7SUFDMUIsT0FBTyxDQUNMLG9CQUFDLGNBQUssa0JBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQUUsVUFBVSxFQUFDLEVBQUUsSUFBSyxLQUFLO1FBQ3RFLG9CQUFDLGNBQUssSUFDSixLQUFLLEVBQUMsRUFBRSxFQUNSLE1BQU0sRUFBQyxFQUFFLEVBQ1QsS0FBSyxFQUFFLEVBQUUsVUFBVSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLEVBQ25ELE1BQU0sRUFBRSxDQUFDLEVBQ1QsVUFBVSxFQUFDLEVBQUU7WUFFYixvQkFBQyx1QkFBVSxJQUFDLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSSxHQUFJLENBQzVDLENBQ0YsQ0FDVCxDQUFDO0NBQ0g7QUFkRCx3QkFjQztBQUVELE1BQU0sQ0FBQyxZQUFZLEdBQUc7SUFDcEIsS0FBSyxFQUFFLE1BQU07SUFDYixNQUFNLEVBQUUsR0FBRztJQUNYLElBQUksRUFBRSxRQUFRO0lBQ2QsSUFBSSxFQUFFLG1CQUFtQjtDQUMxQixDQUFDO0FBRUYsNEJBQW1CLENBQUMsTUFBTSxFQUFFO0lBQzFCLElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07S0FDekI7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO0tBQ3pCO0NBQ0YsQ0FBQyxDQUFDIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Typograhpy_1 = __webpack_require__(/*! ../Typograhpy */ "./code/Typograhpy.tsx");
function Header(props) {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Frame, Object.assign({ width: props.width, height: props.height, background: "" }, props),
        React.createElement(framer_1.Frame, { width: "", height: "", style: { marginLeft: "20px", marginBottom: "20px" }, bottom: 0, background: "" },
            React.createElement(Typograhpy_1.Typograhpy, { text: props.text, type: props.type }))));
}
exports.Header = Header;
Header.defaultProps = {
    width: "100%",
    height: 116,
    text: "Browse",
    type: "header-emphasized"
};
framer_1.addPropertyControls(Header, {
    type: {
        type: framer_1.ControlType.String
    },
    text: {
        type: framer_1.ControlType.String
    }
});
exports.__info__ = [{ "name": "Header", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/components/MainSection.tsx":
/*!*****************************************!*\
  !*** ./code/components/MainSection.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpblNlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2NvbXBvbmVudHMvTWFpblNlY3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLG1DQUFzQztBQUN0Qyw2Q0FBMEM7QUFDMUMsOENBQTJDO0FBRTNDLFNBQWdCLFdBQVcsQ0FBQyxLQUFLOztJQUMvQixPQUFPLENBQ0wsb0JBQUMsY0FBSyxJQUNKLEtBQUssRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUNmLE1BQU0sRUFBRSxLQUFLLENBQUMsTUFBTSxFQUNwQixHQUFHLEVBQUUsQ0FBQyxFQUNOLE1BQU0sRUFBQyxHQUFHLEVBQ1YsS0FBSyxFQUFFO1lBQ0wsU0FBUyxFQUFFLGFBQWEsZUFBTSxDQUFDLFdBQVcsRUFBRTtTQUM3QztRQUVELG9CQUFDLGNBQUssSUFDSixLQUFLLEVBQUMsTUFBTSxFQUNaLE1BQU0sRUFBRSxFQUFFLEVBQ1YsR0FBRyxFQUFFLENBQUMsRUFDTixLQUFLLEVBQUU7Z0JBQ0wsWUFBWSxFQUFFLE1BQU07YUFDckI7WUFFRCxvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxFQUFFO2dCQUM1QyxvQkFBQyx1QkFBVSxJQUNULElBQUksRUFBQyxrQkFBa0IsRUFDdkIsSUFBSSxFQUFDLHFCQUFxQixFQUMxQixLQUFLLEVBQUUsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQzVCLENBQ0k7WUFDUixvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxFQUFFO2dCQUM1QyxvQkFBQyx1QkFBVSxJQUFDLElBQUksRUFBQyxpQkFBaUIsRUFBQyxJQUFJLEVBQUMsVUFBVSxHQUFHLENBQy9DO1lBQ1Isb0JBQUMsY0FBSyxJQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsRUFBRTtnQkFDNUMsb0JBQUMsdUJBQVUsSUFBQyxJQUFJLEVBQUMsYUFBYSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLFFBQVEsR0FBRyxDQUM3RCxDQUNGO1FBQ1Isb0JBQUMsY0FBSyxJQUNKLEtBQUssRUFBQyxNQUFNLEVBQ1osTUFBTSxFQUFFLEdBQUcsRUFDWCxLQUFLLEVBQUU7Z0JBQ0wsY0FBYyxFQUFFLE9BQU87Z0JBQ3ZCLG1CQUFtQixFQUFFLFFBQVE7Z0JBQzdCLFlBQVksRUFBRSxLQUFLO2dCQUNuQixlQUFlLEVBQUUsd0ZBQXdGO2FBQzFHLEdBQ00sQ0FDSCxDQUNULENBQUM7Q0FDSDtBQTdDRCxrQ0E2Q0M7QUFFRCxXQUFXLENBQUMsWUFBWSxHQUFHO0lBQ3pCLEtBQUssRUFBRSxHQUFHLEdBQUcsRUFBRTtJQUNmLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const themes_1 = __webpack_require__(/*! ../shared/themes */ "./code/shared/themes.tsx");
const Typograhpy_1 = __webpack_require__(/*! ../Typograhpy */ "./code/Typograhpy.tsx");
function MainSection(props) {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Stack, { width: 414 - 40, height: props.height, gap: 0, center: "x", style: {
            borderTop: `1px solid ${themes_1.colors.borderColor}`
        } },
        React.createElement(framer_1.Stack, { width: "100%", height: 76, gap: 0, style: {
                marginBottom: "10px"
            } },
            React.createElement(framer_1.Frame, { width: "100%", height: "1fr", background: "" },
                React.createElement(Typograhpy_1.Typograhpy, { text: "UPDATED PLAYLIST", type: "footnote-emphasized", style: { marginTop: "10px" } })),
            React.createElement(framer_1.Frame, { width: "100%", height: "1fr", background: "" },
                React.createElement(Typograhpy_1.Typograhpy, { text: "New Music Daily", type: "headline" })),
            React.createElement(framer_1.Frame, { width: "100%", height: "1fr", background: "" },
                React.createElement(Typograhpy_1.Typograhpy, { text: "Apple Music", type: "headline", lineType: "line-2" }))),
        React.createElement(framer_1.Frame, { width: "100%", height: 250, style: {
                backgroundSize: "cover",
                backgroundPositionX: "center",
                borderRadius: "4px",
                backgroundImage: `url("https://www.apfeltalk.de/magazin/wp-content/uploads/2019/08/New-Music-Daily.jpg")`
            } })));
}
exports.MainSection = MainSection;
MainSection.defaultProps = {
    width: 414 - 40,
    height: 336
};
exports.__info__ = [{ "name": "MainSection", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/components/Nav.tsx":
/*!*********************************!*\
  !*** ./code/components/Nav.tsx ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9jb21wb25lbnRzL05hdi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQXNDO0FBQ3RDLGlEQUE0RTtBQUM1RSw2Q0FBMEM7QUFDMUMsOENBQTJDO0FBRTNDLFNBQWdCLEdBQUcsQ0FBQyxLQUFLOztJQUN2QixNQUFNLEtBQUssR0FBRztRQUNaLFNBQVMsRUFBRSxhQUFhLGVBQU0sQ0FBQyxXQUFXLEVBQUU7UUFDNUMsZUFBZSxFQUFFLDBCQUEwQjtRQUMzQyxvQkFBb0IsRUFBRSxZQUFZO1FBQ2xDLGNBQWMsRUFBRSxXQUFXO0tBQzVCLENBQUM7SUFDRixPQUFPLENBQ0wsb0JBQUMsY0FBSyxrQkFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxJQUFNLEtBQUs7UUFDdEUsb0JBQUMsY0FBSyxJQUNKLEtBQUssRUFBQyxNQUFNLEVBQ1osTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxFQUN6QixTQUFTLEVBQUMsWUFBWSxFQUN0QixVQUFVLEVBQUMsRUFBRTtZQUViLG9CQUFDLGNBQUssSUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQztnQkFDMUQsb0JBQUMsY0FBSyxJQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLEVBQUU7b0JBQzdCLG9CQUFDLGFBQUssSUFBQyxLQUFLLEVBQUUsZUFBTSxDQUFDLGNBQWMsR0FBSSxDQUNqQztnQkFDUixvQkFBQyx1QkFBVSxJQUNULElBQUksRUFBQyxTQUFTLEVBQ2QsSUFBSSxFQUFDLFdBQVcsRUFDaEIsS0FBSyxFQUFDLFFBQVEsRUFDZCxRQUFRLEVBQUMsVUFBVSxHQUNuQixDQUNJO1lBQ1Isb0JBQUMsY0FBSyxJQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUMxRCxvQkFBQyxjQUFLLElBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsRUFBRTtvQkFDN0Isb0JBQUMsYUFBSyxJQUFDLEtBQUssRUFBRSxlQUFNLENBQUMsY0FBYyxHQUFJLENBQ2pDO2dCQUNSLG9CQUFDLHVCQUFVLElBQ1QsSUFBSSxFQUFDLFNBQVMsRUFDZCxJQUFJLEVBQUMsV0FBVyxFQUNoQixLQUFLLEVBQUMsUUFBUSxFQUNkLFFBQVEsRUFBQyxVQUFVLEdBQ25CLENBQ0k7WUFDUixvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQzFELG9CQUFDLGNBQUssSUFBQyxJQUFJLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxFQUFFO29CQUM3QixvQkFBQyxjQUFNLElBQUMsS0FBSyxFQUFFLGVBQU0sQ0FBQyxZQUFZLEdBQUksQ0FDaEM7Z0JBQ1Isb0JBQUMsdUJBQVUsSUFDVCxJQUFJLEVBQUMsUUFBUSxFQUNiLElBQUksRUFBQyxXQUFXLEVBQ2hCLEtBQUssRUFBQyxRQUFRLEVBQ2QsUUFBUSxFQUFDLFFBQVEsR0FDakIsQ0FDSTtZQUNSLG9CQUFDLGNBQUssSUFBQyxLQUFLLEVBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQztnQkFDMUQsb0JBQUMsY0FBSyxJQUFDLElBQUksRUFBQyxLQUFLLEVBQUMsVUFBVSxFQUFDLEVBQUU7b0JBQzdCLG9CQUFDLGFBQUssSUFBQyxLQUFLLEVBQUUsZUFBTSxDQUFDLGNBQWMsR0FBSSxDQUNqQztnQkFDUixvQkFBQyx1QkFBVSxJQUNULElBQUksRUFBQyxPQUFPLEVBQ1osSUFBSSxFQUFDLFdBQVcsRUFDaEIsS0FBSyxFQUFDLFFBQVEsRUFDZCxRQUFRLEVBQUMsVUFBVSxHQUNuQixDQUNJO1lBQ1Isb0JBQUMsY0FBSyxJQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUMxRCxvQkFBQyxjQUFLLElBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsRUFBRTtvQkFDN0Isb0JBQUMsY0FBTSxJQUFDLEtBQUssRUFBRSxlQUFNLENBQUMsY0FBYyxHQUFJLENBQ2xDO2dCQUNSLG9CQUFDLHVCQUFVLElBQ1QsSUFBSSxFQUFDLFFBQVEsRUFDYixJQUFJLEVBQUMsV0FBVyxFQUNoQixLQUFLLEVBQUMsUUFBUSxFQUNkLFFBQVEsRUFBQyxVQUFVLEdBQ25CLENBQ0ksQ0FDRixDQUNGLENBQ1QsQ0FBQztDQUNIO0FBekVELGtCQXlFQztBQUVELEdBQUcsQ0FBQyxZQUFZLEdBQUc7SUFDakIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtDQUNYLENBQUMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const index_1 = __webpack_require__(/*! ../assets/Icons/index */ "./code/assets/Icons/index.tsx");
const themes_1 = __webpack_require__(/*! ../shared/themes */ "./code/shared/themes.tsx");
const Typograhpy_1 = __webpack_require__(/*! ../Typograhpy */ "./code/Typograhpy.tsx");
function Nav(props) {
    window["__checkBudget__"]();
    const style = {
        borderTop: `1px solid ${themes_1.colors.borderColor}`,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        WebkitBackdropFilter: "blur(50px)",
        backdropFilter: "blur(6px)"
    };
    return (React.createElement(framer_1.Frame, Object.assign({ width: props.width, height: props.height, style: style }, props),
        React.createElement(framer_1.Stack, { width: "100%", height: props.height - 30, direction: "horizontal", background: "" },
            React.createElement(framer_1.Stack, { width: "1fr", height: "100%", direction: "vertical", gap: 5 },
                React.createElement(framer_1.Frame, { size: "50%", background: "" },
                    React.createElement(index_1.Songs, { color: themes_1.colors.labelSecondary })),
                React.createElement(Typograhpy_1.Typograhpy, { text: "Library", type: "nav-label", align: "center", lineType: "inactive" })),
            React.createElement(framer_1.Stack, { width: "1fr", height: "100%", direction: "vertical", gap: 5 },
                React.createElement(framer_1.Frame, { size: "50%", background: "" },
                    React.createElement(index_1.Heart, { color: themes_1.colors.labelSecondary })),
                React.createElement(Typograhpy_1.Typograhpy, { text: "For you", type: "nav-label", align: "center", lineType: "inactive" })),
            React.createElement(framer_1.Stack, { width: "1fr", height: "100%", direction: "vertical", gap: 5 },
                React.createElement(framer_1.Frame, { size: "50%", background: "" },
                    React.createElement(index_1.Browse, { color: themes_1.colors.primaryColor })),
                React.createElement(Typograhpy_1.Typograhpy, { text: "Browse", type: "nav-label", align: "center", lineType: "active" })),
            React.createElement(framer_1.Stack, { width: "1fr", height: "100%", direction: "vertical", gap: 5 },
                React.createElement(framer_1.Frame, { size: "50%", background: "" },
                    React.createElement(index_1.Radio, { color: themes_1.colors.labelSecondary })),
                React.createElement(Typograhpy_1.Typograhpy, { text: "Radio", type: "nav-label", align: "center", lineType: "inactive" })),
            React.createElement(framer_1.Stack, { width: "1fr", height: "100%", direction: "vertical", gap: 5 },
                React.createElement(framer_1.Frame, { size: "50%", background: "" },
                    React.createElement(index_1.Search, { color: themes_1.colors.labelSecondary })),
                React.createElement(Typograhpy_1.Typograhpy, { text: "Search", type: "nav-label", align: "center", lineType: "inactive" })))));
}
exports.Nav = Nav;
Nav.defaultProps = {
    width: 414,
    height: 84
};
exports.__info__ = [{ "name": "Nav", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/components/PlayerMini.tsx":
/*!****************************************!*\
  !*** ./code/components/PlayerMini.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxheWVyTWluaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvY29tcG9uZW50cy9QbGF5ZXJNaW5pLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUMvQixtQ0FBc0M7QUFDdEMsaURBQXNEO0FBQ3RELDhDQUEyQztBQUUzQyxTQUFnQixVQUFVLENBQUMsS0FBSzs7SUFDOUIsT0FBTyxDQUNMLG9CQUFDLGNBQUssSUFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFDbEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQ3BCLFVBQVUsRUFBQywwQkFBMEIsRUFDckMsS0FBSyxFQUFFO1lBQ0wsb0JBQW9CLEVBQUUsWUFBWTtTQUNuQztRQUVELG9CQUFDLGNBQUs7UUFDSixnQ0FBZ0M7O1lBQWhDLGdDQUFnQztZQUNoQyxLQUFLLEVBQUMsTUFBTSxFQUNaLE1BQU0sRUFBQyxNQUFNLEVBQ2IsU0FBUyxFQUFDLFlBQVksRUFDdEIsR0FBRyxFQUFFLENBQUM7WUFFTixvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxFQUFFO2dCQUM1QyxvQkFBQyxjQUFLLElBQ0osSUFBSSxFQUFFLEVBQUUsRUFDUixNQUFNLFFBQ04sWUFBWSxFQUFDLEtBQUssRUFDbEIsS0FBSyxFQUFFO3dCQUNMLGNBQWMsRUFBRSxPQUFPO3dCQUN2QixlQUFlLEVBQUUsd0dBQXdHO3FCQUMxSCxHQUNNLENBQ0g7WUFDUixvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxFQUFFO2dCQUM5QyxvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUMsTUFBTSxFQUFDLEdBQUc7b0JBQ3BELG9CQUFDLHVCQUFVLElBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sR0FBRyxDQUMxRCxDQUNGO1lBQ1Isb0JBQUMsY0FBSyxJQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxVQUFVLEVBQUMsRUFBRTtnQkFDNUMsb0JBQUMsY0FBSyxJQUFDLEtBQUssRUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLFFBQUMsVUFBVSxFQUFDLEVBQUU7b0JBQ25ELG9CQUFDLFlBQUksT0FBRyxDQUNGLENBQ0Y7WUFDUixvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxFQUFFO2dCQUM1QyxvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLE1BQU0sUUFBQyxVQUFVLEVBQUMsRUFBRTtvQkFDbkQsb0JBQUMsZUFBTyxPQUFHLENBQ0wsQ0FDRixDQUNGLENBQ0YsQ0FDVCxDQUFDO0NBQ0g7QUE5Q0QsZ0NBOENDO0FBRUQsVUFBVSxDQUFDLFlBQVksR0FBRztJQUN4QixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxFQUFFO0NBQ1gsQ0FBQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const index_1 = __webpack_require__(/*! ../assets/Icons/index */ "./code/assets/Icons/index.tsx");
const Typograhpy_1 = __webpack_require__(/*! ../Typograhpy */ "./code/Typograhpy.tsx");
function PlayerMini(props) {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Frame, { width: props.width, height: props.height, background: "rgba(255, 255, 255, 0.8)", style: {
            WebkitBackdropFilter: "blur(20px)"
        } },
        React.createElement(framer_1.Stack
        // style={{ padding: "0 10px" }}
        , { 
            // style={{ padding: "0 10px" }}
            width: "100%", height: "100%", direction: "horizontal", gap: 0 },
            React.createElement(framer_1.Frame, { width: "1fr", height: "100%", background: "" },
                React.createElement(framer_1.Frame, { size: 50, center: true, borderRadius: "5px", style: {
                        backgroundSize: "cover",
                        backgroundImage: `url("https://66.media.tumblr.com/be8f373f8793887160929bdd469e7227/tumblr_oktuijhiDD1tgerjdo1_400.png")`
                    } })),
            React.createElement(framer_1.Frame, { width: "2.5fr", height: "100%", background: "" },
                React.createElement(framer_1.Frame, { width: "100%", height: "", background: "", center: "y" },
                    React.createElement(Typograhpy_1.Typograhpy, { text: "Dressed In black", type: "label", align: "left" }))),
            React.createElement(framer_1.Frame, { width: "1fr", height: "100%", background: "" },
                React.createElement(framer_1.Frame, { width: "40%", height: "auto", center: true, background: "" },
                    React.createElement(index_1.Play, null))),
            React.createElement(framer_1.Frame, { width: "1fr", height: "100%", background: "" },
                React.createElement(framer_1.Frame, { width: "70%", height: "auto", center: true, background: "" },
                    React.createElement(index_1.Forward, null))))));
}
exports.PlayerMini = PlayerMini;
PlayerMini.defaultProps = {
    width: 414,
    height: 64
};
exports.__info__ = [{ "name": "PlayerMini", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/components/Scroll.tsx":
/*!************************************!*\
  !*** ./code/components/Scroll.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2Nyb2xsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9jb21wb25lbnRzL1Njcm9sbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBQThDO0FBSTlDLGlDQUE4QjtBQUU5QixTQUFnQixVQUFVLENBQUMsS0FBSzs7SUFDOUIsT0FBTyxDQUNMLG9CQUFDLGVBQU0sSUFDTCxVQUFVLEVBQUMsRUFBRSxFQUNiLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxFQUNsQixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFDcEIsU0FBUyxFQUFDLFlBQVksRUFDdEIsS0FBSyxFQUFFLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRTtRQUU5QixvQkFBQyxjQUFLLElBQUMsU0FBUyxFQUFDLFlBQVksRUFBQyxLQUFLLEVBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNO1lBQ3ZELG9CQUFDLFdBQUksT0FBRztZQUNSLG9CQUFDLFdBQUksT0FBRztZQUNSLG9CQUFDLFdBQUksT0FBRztZQUNSLG9CQUFDLFdBQUksT0FBRyxDQUNGLENBQ0QsQ0FDVixDQUFDO0NBQ0g7QUFqQkQsZ0NBaUJDO0FBRUQsVUFBVSxDQUFDLFlBQVksR0FBRztJQUN4QixLQUFLLEVBQUUsTUFBTTtJQUNiLE1BQU0sRUFBRSxNQUFNO0NBQ2YsQ0FBQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Song_1 = __webpack_require__(/*! ./Song */ "./code/components/Song.tsx");
function ScrollComp(props) {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Scroll, { background: "", width: props.width, height: props.height, direction: "horizontal", style: { paddingLeft: "20px" } },
        React.createElement(framer_1.Stack, { direction: "horizontal", width: "800px", height: "100%" },
            React.createElement(Song_1.Song, null),
            React.createElement(Song_1.Song, null),
            React.createElement(Song_1.Song, null),
            React.createElement(Song_1.Song, null))));
}
exports.ScrollComp = ScrollComp;
ScrollComp.defaultProps = {
    width: "100%",
    height: "100%"
};
exports.__info__ = [{ "name": "ScrollComp", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/components/Song.tsx":
/*!**********************************!*\
  !*** ./code/components/Song.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29uZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvY29tcG9uZW50cy9Tb25nLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUMvQixtQ0FBc0M7QUFHdEMsNkNBQTBDO0FBQzFDLDhDQUEyQztBQUUzQyxTQUFnQixJQUFJLENBQUMsS0FBSzs7SUFDeEIsT0FBTyxDQUNMLG9CQUFDLGNBQUssSUFBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUMsRUFBRTtRQUM1RCxvQkFBQyxjQUFLLElBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsTUFBTTtZQUN6QixvQkFBQyxjQUFLLElBQ0osS0FBSyxFQUFDLE1BQU0sRUFDWixNQUFNLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFDbkIsWUFBWSxFQUFDLE1BQU0sRUFDbkIsS0FBSyxFQUFFO29CQUNMLGNBQWMsRUFBRSxPQUFPO29CQUN2QixlQUFlLEVBQUUscUZBQXFGO2lCQUN2RyxHQUNNO1lBQ1Qsb0JBQUMsY0FBSyxJQUNKLEtBQUssRUFBQyxNQUFNLEVBQ1osTUFBTSxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQ2pCLEdBQUcsRUFBRSxDQUFDLEVBQ04sS0FBSyxFQUFFO29CQUNMLFVBQVUsRUFBRSxLQUFLO2lCQUNsQjtnQkFFRCxvQkFBQyxjQUFLLElBQUMsS0FBSyxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsS0FBSyxFQUFDLFVBQVUsRUFBQyxFQUFFO29CQUM1QyxvQkFBQyx1QkFBVSxJQUFDLElBQUksRUFBQyx1Q0FBUyxFQUFDLElBQUksRUFBQyxTQUFTLEdBQUcsQ0FDdEM7Z0JBQ1Isb0JBQUMsY0FBSyxJQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsRUFBRTtvQkFDNUMsb0JBQUMsdUJBQVUsSUFDVCxJQUFJLEVBQUMsYUFBYSxFQUNsQixJQUFJLEVBQUMsU0FBUyxFQUNkLFdBQVcsRUFBRSxJQUFJLEVBQ2pCLEtBQUssRUFBRSxlQUFNLENBQUMsY0FBYyxHQUM1QixDQUNJLENBQ0YsQ0FDRixDQUNGLENBQ1QsQ0FBQztDQUNIO0FBcENELG9CQW9DQztBQUVELElBQUksQ0FBQyxZQUFZLEdBQUc7SUFDbEIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsR0FBRztDQUNaLENBQUMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const themes_1 = __webpack_require__(/*! ../shared/themes */ "./code/shared/themes.tsx");
const Typograhpy_1 = __webpack_require__(/*! ../Typograhpy */ "./code/Typograhpy.tsx");
function Song(props) {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Frame, { width: props.width, height: props.height, background: "" },
        React.createElement(framer_1.Stack, { gap: 0, width: "100%" },
            React.createElement(framer_1.Frame, { width: "100%", height: props.width, borderRadius: "10px", style: {
                    backgroundSize: "cover",
                    backgroundImage: `url("https://i.pinimg.com/originals/b4/75/00/b4750046d94fed05d00dd849aa5f0ab7.jpg")`
                } }),
            React.createElement(framer_1.Stack, { width: "100%", height: 230 - 180, gap: 0, style: {
                    paddingTop: "5px"
                } },
                React.createElement(framer_1.Frame, { width: "100%", height: "1fr", background: "" },
                    React.createElement(Typograhpy_1.Typograhpy, { text: "\uC624\uB298\uC758 \uD788\uD2B8\uACE1", type: "caption" })),
                React.createElement(framer_1.Frame, { width: "100%", height: "1fr", background: "" },
                    React.createElement(Typograhpy_1.Typograhpy, { text: "Apple Music", type: "caption", customColor: true, color: themes_1.colors.labelSecondary }))))));
}
exports.Song = Song;
Song.defaultProps = {
    width: 180,
    height: 230
};
exports.__info__ = [{ "name": "Song", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/components/SongSection.tsx":
/*!*****************************************!*\
  !*** ./code/components/SongSection.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU29uZ1NlY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2NvbXBvbmVudHMvU29uZ1NlY3Rpb24udHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQStCO0FBQy9CLG1DQUFzQztBQUN0Qyw2Q0FBMEM7QUFDMUMsOENBQTJDO0FBQzNDLHFDQUFzQztBQUV0QyxTQUFnQixXQUFXLENBQUMsS0FBSzs7SUFDL0IsT0FBTyxDQUNMLG9CQUFDLGNBQUssSUFDSixLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFDbEIsTUFBTSxFQUFFLEtBQUssQ0FBQyxNQUFNLEVBQ3BCLFVBQVUsRUFBQyxFQUFFLEVBQ2IsR0FBRyxFQUFFLENBQUMsRUFDTixZQUFZLEVBQUMsT0FBTyxFQUNwQixNQUFNLEVBQUMsR0FBRztRQUVWLG9CQUFDLGNBQUssSUFDSixLQUFLLEVBQUU7Z0JBQ0wsU0FBUyxFQUFFLGFBQWEsZUFBTSxDQUFDLFdBQVcsRUFBRTthQUM3QyxFQUNELEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxHQUFHLEVBQUUsRUFDdkIsTUFBTSxFQUFDLE1BQU0sRUFDYixTQUFTLEVBQUMsWUFBWSxFQUN0QixZQUFZLEVBQUMsZUFBZSxFQUM1QixVQUFVLEVBQUMsRUFBRTtZQUViLG9CQUFDLHVCQUFVLElBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxJQUFJLEVBQUMsYUFBYSxHQUFHO1lBQ2xELG9CQUFDLHVCQUFVLElBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxJQUFJLEVBQUMsU0FBUyxHQUFHLENBQ3RDO1FBQ1Isb0JBQUMsY0FBSyxJQUNKLFVBQVUsRUFBQyxFQUFFLEVBQ2IsS0FBSyxFQUFDLE1BQU0sRUFDWixNQUFNLEVBQUMsT0FBTyxFQUNkLEtBQUssRUFBRTtnQkFDTCxPQUFPLEVBQUUsS0FBSzthQUNmO1lBRUQsb0JBQUMsbUJBQVUsT0FBRyxDQUNSLENBQ0YsQ0FDVCxDQUFDO0NBQ0g7QUFuQ0Qsa0NBbUNDO0FBRUQsV0FBVyxDQUFDLFlBQVksR0FBRztJQUN6QixLQUFLLEVBQUUsR0FBRztJQUNWLE1BQU0sRUFBRSxHQUFHO0NBQ1osQ0FBQyJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const themes_1 = __webpack_require__(/*! ../shared/themes */ "./code/shared/themes.tsx");
const Typograhpy_1 = __webpack_require__(/*! ../Typograhpy */ "./code/Typograhpy.tsx");
const Scroll_1 = __webpack_require__(/*! ./Scroll */ "./code/components/Scroll.tsx");
function SongSection(props) {
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Stack, { width: props.width, height: props.height, background: "", gap: 0, distribution: "start", center: "x" },
        React.createElement(framer_1.Stack, { style: {
                borderTop: `1px solid ${themes_1.colors.borderColor}`
            }, width: props.width - 40, height: "48px", direction: "horizontal", distribution: "space-between", background: "" },
            React.createElement(Typograhpy_1.Typograhpy, { text: "Must Have", type: "shelf-title" }),
            React.createElement(Typograhpy_1.Typograhpy, { text: "See all", type: "see-all" })),
        React.createElement(framer_1.Frame, { background: "", width: "100%", height: "230px", style: {
                padding: "0px"
            } },
            React.createElement(Scroll_1.ScrollComp, null))));
}
exports.SongSection = SongSection;
SongSection.defaultProps = {
    width: 414,
    height: 310
};
exports.__info__ = [{ "name": "SongSection", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/fonts.css":
/*!************************!*\
  !*** ./code/fonts.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/cjs.js!./fonts.css */ "../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/css-loader/dist/cjs.js!./code/fonts.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../../Applications/Framer X.app/Contents/Resources/Server/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./code/index.tsx":
/*!************************!*\
  !*** ./code/index.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUErQjtBQUMvQix5Q0FBbUM7QUFFbkMsNkNBQStCO0FBRS9CLE1BQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEQsa0JBQU0sQ0FBQyxvQkFBQyxvQkFBRyxPQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const react_dom_1 = __webpack_require__(/*! react-dom */ "react-dom");
const MainBridge_1 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './MainBridge'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
const rootElement = document.getElementById("root");
react_dom_1.render(React.createElement(MainBridge_1.default, null), rootElement);


/***/ }),

/***/ "./code/screen/Browse.tsx":
/*!********************************!*\
  !*** ./code/screen/Browse.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQnJvd3NlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9zY3JlZW4vQnJvd3NlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQStCO0FBQy9CLG1DQU9nQjtBQUNoQixpREFBOEM7QUFDOUMsMkRBQXdEO0FBQ3hELDJEQUF3RDtBQUN4RCx5REFBc0Q7QUFDdEQsMkNBQXdDO0FBRXhDLFNBQWdCLE1BQU0sQ0FBQyxFQUE0QjtRQUE1QixFQUFFLEtBQUssRUFBRSxRQUFRLE9BQVcsRUFBVCx3Q0FBTzs7SUFDL0MsT0FBTyxDQUNMLG9CQUFDLGNBQUssSUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFDLEVBQUU7UUFFM0Msb0JBQUMsYUFBSSxJQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxXQUFXLEVBQUUsUUFBUTtZQUNsRCxvQkFBQyxlQUFNLElBQUMsU0FBUyxFQUFDLFVBQVU7Z0JBQzFCLG9CQUFDLGNBQUssSUFBQyxLQUFLLEVBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxNQUFNLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxHQUFHLEVBQUUsQ0FBQztvQkFDM0Qsb0JBQUMsY0FBSyxJQUNKLEtBQUssRUFBQyxNQUFNLEVBQ1osTUFBTSxFQUFFLEdBQUcsRUFDWCxLQUFLLEVBQUUsRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFLEVBQzlCLFVBQVUsRUFBQyxFQUFFO3dCQUViLG9CQUFDLGVBQU0sSUFBQyxNQUFNLEVBQUUsQ0FBQyxHQUFJLENBQ2Y7b0JBQ1Isb0JBQUMsYUFBSSxJQUNILEtBQUssRUFBRSxHQUFHLEVBQ1YsTUFBTSxFQUFFLEdBQUcsRUFDWCxHQUFHLEVBQUUsRUFBRSxFQUNQLFlBQVksRUFBQyxNQUFNLEVBQ25CLEtBQUssRUFBRTs0QkFDTCxXQUFXLEVBQUUsTUFBTTs0QkFDbkIsWUFBWSxFQUFFLE1BQU07eUJBQ3JCO3dCQUdELG9CQUFDLHlCQUFXLE9BQUc7d0JBQ2Ysb0JBQUMseUJBQVcsT0FBRzt3QkFDZixvQkFBQyx5QkFBVyxPQUFHO3dCQUNmLG9CQUFDLHlCQUFXLE9BQUcsQ0FDVjtvQkFFUCxvQkFBQyx5QkFBVyxPQUFHLENBQ1QsQ0FDRDtZQUNULG9CQUFDLGNBQUssSUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBQyxFQUFFLFVBRXBCLENBQ0g7UUFHUCxvQkFBQyxjQUFLLElBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxNQUFNLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBQyxFQUFFLEVBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUMsRUFBRTtZQUNoRSxvQkFBQyx1QkFBVSxPQUFHO1lBQ2Qsb0JBQUMsU0FBRyxPQUFHLENBQ0QsQ0FDRixDQUNULENBQUM7Q0FDSDtBQS9DRCx3QkErQ0M7QUFFRCxNQUFNLENBQUMsWUFBWSxHQUFHO0lBQ3BCLEtBQUssRUFBRSxxQkFBcUI7SUFDNUIsUUFBUSxFQUFFLENBQUM7Q0FDWixDQUFDO0FBRUYsNEJBQW1CLENBQUMsTUFBTSxFQUFFO0lBQzFCLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07S0FDekI7SUFDRCxRQUFRLEVBQUU7UUFDUixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNO1FBQ3hCLGNBQWMsRUFBRSxJQUFJO0tBQ3JCO0NBQ0YsQ0FBQyxDQUFDIn0=

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Header_1 = __webpack_require__(/*! ../components/Header */ "./code/components/Header.tsx");
const MainSection_1 = __webpack_require__(/*! ../components/MainSection */ "./code/components/MainSection.tsx");
const SongSection_1 = __webpack_require__(/*! ../components/SongSection */ "./code/components/SongSection.tsx");
const PlayerMini_1 = __webpack_require__(/*! ../components/PlayerMini */ "./code/components/PlayerMini.tsx");
const Nav_1 = __webpack_require__(/*! ../components/Nav */ "./code/components/Nav.tsx");
function Browse(_a) {
    var { prop1, currPage } = _a, rest = __rest(_a, ["prop1", "currPage"]);
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Frame, { width: 414, height: 896, background: "" },
        React.createElement(framer_1.Page, { width: 414, height: 896, currentPage: currPage },
            React.createElement(framer_1.Scroll, { direction: "vertical" },
                React.createElement(framer_1.Stack, { width: "100%", height: "100%", direction: "vertical", gap: 0 },
                    React.createElement(framer_1.Frame, { width: "100%", height: 150, style: { paddingLeft: "20px" }, background: "" },
                        React.createElement(Header_1.Header, { bottom: 5 })),
                    React.createElement(framer_1.Page, { width: 414, height: 340, gap: 10, contentWidth: "auto", style: {
                            paddingLeft: "20px",
                            marginBottom: "20px"
                        } },
                        React.createElement(MainSection_1.MainSection, null),
                        React.createElement(MainSection_1.MainSection, null),
                        React.createElement(MainSection_1.MainSection, null),
                        React.createElement(MainSection_1.MainSection, null)),
                    React.createElement(SongSection_1.SongSection, null))),
            React.createElement(framer_1.Frame, { width: 414, height: "" }, "000")),
        React.createElement(framer_1.Stack, { direction: "vertical", bottom: 34, width: "", gap: 0, height: "" },
            React.createElement(PlayerMini_1.PlayerMini, null),
            React.createElement(Nav_1.Nav, null))));
}
exports.Browse = Browse;
Browse.defaultProps = {
    prop1: "Default prop1 Value",
    currPage: 0
};
framer_1.addPropertyControls(Browse, {
    prop1: {
        type: framer_1.ControlType.String
    },
    currPage: {
        type: framer_1.ControlType.Number,
        displayStepper: true
    }
});
exports.__info__ = [{ "name": "Browse", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/screen/MainBridge.tsx":
/*!************************************!*\
  !*** ./code/screen/MainBridge.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWFpbkJyaWRnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvc2NyZWVuL01haW5CcmlkZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsbUNBT2dCO0FBQ2hCLHNDQUFzQztBQUN0QyxpREFBOEM7QUFDOUMsMkRBQXdEO0FBQ3hELDJEQUF3RDtBQUN4RCw2Q0FBMEM7QUFDMUMsMkNBQXdDO0FBRXhDLE1BQU0sUUFBUSxHQUFHLGFBQUksQ0FBQztJQUNwQixjQUFjLEVBQUUsS0FBSztJQUNyQixXQUFXLEVBQUU7UUFDWCxNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO0tBQ1g7Q0FDRixDQUFDLENBQUM7QUFFSCxTQUFnQixLQUFLLENBQUMsRUFBa0I7UUFBbEIsRUFBRSxLQUFLLE9BQVcsRUFBVCw0QkFBTzs7SUFDcEMsT0FBTyxDQUNMLG9CQUFDLGNBQUssSUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsVUFBVSxFQUFDLEVBQUU7UUFDM0Msb0JBQUMsa0JBQVMsSUFBQyxVQUFVLEVBQUUsTUFBTSxHQUFJO1FBQ2pDLG9CQUFDLGNBQUssSUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3pDLG9CQUFDLGVBQU0sSUFBQyxJQUFJLEVBQUUsUUFBUSxHQUFJO1lBQzFCLG9CQUFDLGFBQUksSUFDSCxLQUFLLEVBQUUsR0FBRyxFQUNWLE1BQU0sRUFBRSxHQUFHLEVBQ1gsR0FBRyxFQUFFLEVBQUUsRUFDUCxZQUFZLEVBQUMsTUFBTSxFQUNuQixLQUFLLEVBQUU7b0JBQ0wsV0FBVyxFQUFFLE1BQU07b0JBQ25CLFlBQVksRUFBRSxNQUFNO2lCQUNyQjtnQkFHRCxvQkFBQyx5QkFBVyxPQUFHO2dCQUNmLG9CQUFDLHlCQUFXLE9BQUc7Z0JBQ2Ysb0JBQUMseUJBQVcsT0FBRztnQkFDZixvQkFBQyx5QkFBVyxPQUFHLENBQ1Y7WUFDUCxvQkFBQyx5QkFBVyxPQUFHLENBQ1Q7UUFDUixvQkFBQyxlQUFNLElBQ0wsS0FBSyxFQUFFLFFBQVEsQ0FBQyxXQUFXLEVBQzNCLEtBQUssRUFBRSxHQUFHLEVBQUU7O2dCQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ3ZCLFFBQVEsQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDbEMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQ2pDLEdBQ0Q7UUFDRixvQkFBQyxTQUFHLElBQUMsTUFBTSxFQUFFLENBQUMsR0FBSSxDQUNaLENBQ1QsQ0FBQztDQUNIO0FBbkNELHNCQW1DQztBQUVELEtBQUssQ0FBQyxZQUFZLEdBQUc7SUFDbkIsS0FBSyxFQUFFLHFCQUFxQjtDQUM3QixDQUFDO0FBRUYsNEJBQW1CLENBQUMsS0FBSyxFQUFFO0lBQ3pCLEtBQUssRUFBRTtRQUNMLElBQUksRUFBRSxvQkFBVyxDQUFDLE1BQU07S0FDekI7Q0FDRixDQUFDLENBQUMifQ==

var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const Status_1 = __webpack_require__(/*! ../Status */ "./code/Status.tsx");
const Header_1 = __webpack_require__(/*! ../components/Header */ "./code/components/Header.tsx");
const MainSection_1 = __webpack_require__(/*! ../components/MainSection */ "./code/components/MainSection.tsx");
const SongSection_1 = __webpack_require__(/*! ../components/SongSection */ "./code/components/SongSection.tsx");
const Player_1 = __webpack_require__(/*! ../Player/Player */ "./code/Player/Player.tsx");
const Nav_1 = __webpack_require__(/*! ../components/Nav */ "./code/components/Nav.tsx");
const appState = framer_1.Data({
    isPlayerTapped: false,
    playerState: {
        height: 64,
        bottom: 92,
    },
});
function Comp1(_a) {
    var { prop1 } = _a, rest = __rest(_a, ["prop1"]);
    window["__checkBudget__"]();
    return (React.createElement(framer_1.Frame, { width: 414, height: 896, background: "" },
        React.createElement(Status_1.StatusBar, { appearance: "dark" }),
        React.createElement(framer_1.Stack, { width: 414, height: 896 - 34, gap: 0 },
            React.createElement(Header_1.Header, { text: "Browse" }),
            React.createElement(framer_1.Page, { width: 414, height: 340, gap: 10, contentWidth: "auto", style: {
                    paddingLeft: "20px",
                    marginBottom: "20px",
                } },
                React.createElement(MainSection_1.MainSection, null),
                React.createElement(MainSection_1.MainSection, null),
                React.createElement(MainSection_1.MainSection, null),
                React.createElement(MainSection_1.MainSection, null)),
            React.createElement(SongSection_1.SongSection, null)),
        React.createElement(Player_1.Player, { state: appState.playerState, onTap: () => {
                window["__checkBudget__"]();
                console.log("clicked");
                appState.playerState.height = 842;
                appState.playerState.bottom = 0;
            } }),
        React.createElement(Nav_1.Nav, { bottom: 0 })));
}
exports.Comp1 = Comp1;
Comp1.defaultProps = {
    prop1: "Default prop1 Value",
};
framer_1.addPropertyControls(Comp1, {
    prop1: {
        type: framer_1.ControlType.String,
    },
});
exports.__info__ = [{ "name": "Comp1", "children": false, "type": "component" }];


/***/ }),

/***/ "./code/shared/themes.tsx":
/*!********************************!*\
  !*** ./code/shared/themes.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9zaGFyZWQvdGhlbWVzLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFhLFFBQUEsTUFBTSxHQUFHO0lBQ3BCLFlBQVksRUFBRSxxQkFBcUI7SUFDbkMsWUFBWSxFQUFFLGtCQUFrQjtJQUNoQyxjQUFjLEVBQUUsdUJBQXVCO0lBQ3ZDLFdBQVcsRUFBRSxjQUFjO0lBQzNCLFNBQVMsRUFBRSxxQkFBcUI7SUFDaEMsV0FBVyxFQUFFLHFCQUFxQjtJQUNsQyxnQkFBZ0IsRUFBRSwwQkFBMEI7SUFDNUMsaUJBQWlCLEVBQUUsMkJBQTJCO0lBQzlDLGlCQUFpQixFQUFFLHFCQUFxQjtDQUN6QyxDQUFBIn0=

Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = {
    labelPrimary: 'rgba(0, 0, 0, 0.95)',
    primaryColor: 'rgb(254, 44, 85)',
    labelSecondary: 'rgba(60, 60, 67, 0.6)',
    shelfHeader: 'rgb(0, 0, 0)',
    textColor: 'rgba(0, 0, 0, 0.95)',
    borderColor: 'rgba(0, 0, 0, 0.07)',
    playerBackground: 'rgba(247, 247, 247, 0.8)',
    playerInnerShadow: 'rgba(255, 255, 255, 0.25)',
    playerDropShadow2: 'rgba(0, 0, 0, 0.07)',
};
exports.__info__ = [];


/***/ }),

/***/ "./code/shared/utils.tsx":
/*!*******************************!*\
  !*** ./code/shared/utils.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL3NoYXJlZC91dGlscy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFnQixTQUFTLENBQUMsV0FBVzs7SUFDbkMsTUFBTSxXQUFXLEdBQUcsMkdBQTJHLENBQUE7SUFDL0gsT0FBTyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO0NBQ3JDO0FBSEQsOEJBR0M7QUFFRCxTQUFnQixhQUFhLENBQUMsV0FBVzs7SUFDdkMsTUFBTSxLQUFLLEdBQUcsV0FBVyxDQUFBO0lBQ3pCLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDakMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO0NBQzNCO0FBSkQsc0NBSUMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
function grabColor(colorString) {
    window["__checkBudget__"]();
    const matchColors = /(#([\da-f]{3}){1,2}|(rgb|hsl)a\((\d{1,3}%?,\s?){3}(1|0?\.\d+)\)|(rgb|hsl)\(\d{1,3}%?(,\s?\d{1,3}%?){2}\))/;
    return matchColors.exec(colorString);
}
exports.grabColor = grabColor;
function grabColorName(colorString) {
    window["__checkBudget__"]();
    const match = /\{(.*?)\}/;
    var res = match.exec(colorString);
    return res ? res[0] : null;
}
exports.grabColorName = grabColorName;
exports.__info__ = [];


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.7","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/kasimir.iphone-x-kit"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/kasimir.iphone-x-kit */ "framer-package-loader.js!./node_modules/@framer/kasimir.iphone-x-kit/dist/index.js")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/kasimir.iphone-x-kit"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","version":"1.21.0","devDependencies":{"@framer/framer.device-hand-iphone-2":"1.0.0","@types/react":"^16.0.31"},"peerDependencies":{"framer":"0.10.1 || ^0.10 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"2970ec35-535a-4d7f-96d5-57c611da38d0","displayName":"iPhone X Kit"},"keywords":["Apple","iOS","iPhone","Kit","UI"],"author":"Kasimir Hirvikoski","name":"@framer/kasimir.iphone-x-kit"}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"92ac570e-4ffa-430f-aa94-f1182e975a52\"},\"author\":\". ruucm\",\"dependencies\":{\"@framer/kasimir.iphone-x-kit\":\"^1.21.0\",\"framer-motion\":\"^1.6.12\",\"styled-components\":\"^4.4.0\"}}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom":
/*!*****************************************************************************************************!*\
  !*** external {"root":"ReactDOM","commonjs2":"react-dom","commonjs":"react-dom","amd":"react-dom"} ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom__;

/***/ })

/******/ });
});