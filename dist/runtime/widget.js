System.register(["jimu-ui","jimu-core"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!*******************************************************************************!*\
  !*** ./your-extensions/widgets/feature-layer-function/src/runtime/widget.tsx ***!
  \*******************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__set_webpack_public_path__": () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Widget)
/* harmony export */ });
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
  Licensing

  Copyright 2022 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/


const { useState, useEffect } = jimu_core__WEBPACK_IMPORTED_MODULE_1__.React;
function Widget(props) {
    const [selectedItems, setSelectedItems] = useState([]);
    useEffect(() => {
    }, []);
    const isDsConfigured = () => {
        if (props.useDataSources &&
            props.useDataSources.length === 1 &&
            props.useDataSources[0].fields &&
            props.useDataSources[0].fields.length === 1) {
            return true;
        }
        return false;
    };
    const handleSelect = () => {
        setSelectedItems(selectedItems);
        saveSelectedValuesToLayer(selectedItems);
    };
    const saveSelectedValuesToLayer = (values) => __awaiter(this, void 0, void 0, function* () {
        if (!isDsConfigured()) {
            return;
        }
        const dsId = props.useDataSources[0].dataSourceId;
        const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceManager.getInstance().getDataSource(dsId);
        const dataLayer = dataSource.layer;
        const recordToUpdate = dataSource.getSelectedRecords()[0];
        const id = recordToUpdate.getId();
        const query = dataLayer.createQuery();
        query.where = `objectid = ${id}`;
        const feature = yield dataLayer.queryFeatures(query).then((result) => {
            return result.features[0];
        });
        feature.attributes.symptom_kr = values.join(';');
        const edits = {
            updateFeatures: [feature]
        };
        try {
            dataLayer.applyEdits(edits).then((editsResult) => {
            });
            console.log('Values saved successfully: ', recordToUpdate);
        }
        catch (error) {
            console.error('Error saving values:', error);
        }
    });
    const dataChanged = (info) => __awaiter(this, void 0, void 0, function* () {
        const dsId = props.useDataSources[0].dataSourceId;
        const dataSource = jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceManager.getInstance().getDataSource(dsId);
        const dataLayer = dataSource.layer;
        if (dataSource.getSelectedRecords().length === 0) {
            return;
        }
        const selectedFeatureId = dataSource.getSelectedRecords()[0].getId();
        const query = dataLayer.createQuery(dataSource.getSelectedRecords());
        query.where = `objectid = ${selectedFeatureId}`;
        const feature = yield dataLayer.queryFeatures(query).then((result) => {
            return result.features[0];
        });
        const attributeValue = feature.attributes.symptom_kr.split(';');
        const attributesToTransfer = attributeValue.filter((value) => !value.includes(' '));
        console.log('Attribute value:', attributesToTransfer);
        setSelectedItems(attributesToTransfer);
    });
    if (!isDsConfigured()) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("h3", null,
            "This widget demonstrates how to use a feature layer as a data source.",
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("br", null),
            "Configure the data source.");
    }
    return jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement("div", { className: "widget-use-feature-layer", style: { width: '100%', height: '100%', maxHeight: '800px', overflow: 'auto' } },
        jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_core__WEBPACK_IMPORTED_MODULE_1__.DataSourceComponent, { useDataSource: props.useDataSources[0], widgetId: props.id, onDataSourceInfoChange: dataChanged, queryCount: true },
            jimu_core__WEBPACK_IMPORTED_MODULE_1__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_0__.MultiSelect, { widgetId: "multi-select", items: [
                    { label: '00-sans dégâts (ohne Schäden)', value: '00-sans dégâts (ohne Schäden)' },
                    { label: '01-blessures (Verletzungen)', value: '01-blessures (Verletzungen)' },
                    { label: '02-cavité (Höhlung)', value: '02-cavité (Höhlung)' },
                    { label: '03-champignons (Pilzbefall)', value: '03-champignons (Pilzbefall)' },
                    { label: '04-fissure/nervure (Riss/Rippe)', value: '04-fissure/nervure (Riss/Rippe)' },
                    { label: '05-fourche (Vergabelung)', value: '05-fourche (Vergabelung)' },
                    { label: '06-suspicion sur l\'écorce (Rindenauffälligkeit)', value: '06-suspicion sur l\'écorce (Rindenauffälligkeit)' },
                    { label: '07-branches mortes (Totholz)', value: '07-branches mortes (Totholz)' },
                    { label: '08-déssèchement de la cime (Wipfeldürre)', value: '08-déssèchement de la cime (Wipfeldürre)' },
                    { label: '11-branche tombée ou cassée (Astabbruch, Astausbruch)', value: '11-branche tombée ou cassée (Astabbruch, Astausbruch)' },
                    { label: '12-cime déséquilibrée (ungleichmässiger Kronenaufbau)', value: '12-cime déséquilibrée (ungleichmässiger Kronenaufbau)' },
                    { label: '13-ancien hauban (Alte Kronensicherung)', value: '13-ancien hauban (Alte Kronensicherung)' },
                    { label: '14-végétation étrangère à l\'arbre (Baumfremder Bewuchs)', value: '14-végétation étrangère à l\'arbre (Baumfremder Bewuchs)' },
                    { label: '15-dégâts causés par véhicules (Anfahrschaden)', value: '15-dégâts causés par véhicules (Anfahrschaden)' },
                    { label: '16-gênante sur terrain public (stört öffentlichen Raum)', value: '16-gênante sur terrain public (stört öffentlichen Raum)' },
                    { label: '17-gênante sur terrain privé (stört privaten Raum)', value: '17-gênante sur terrain privé (stört privaten Raum)' },
                    { label: '18-déssechement des extrémités (Astdürre)', value: '18-déssechement des extrémités (Astdürre)' },
                    { label: '19-déssechement localisé (lokale Dürrestellen)', value: '19-déssechement localisé (lokale Dürrestellen)' },
                    { label: '21-défoliation précoce (vorzeitiger Blattfall)', value: '21-défoliation précoce (vorzeitiger Blattfall)' },
                    { label: '22-pas applicable (nicht anwendbar)', value: '22-pas applicable (nicht anwendbar)' },
                    { label: '23-cime clairsemée (lichte Krone)', value: '23-cime clairsemée (lichte Krone)' },
                    { label: '24-maladie(s) (Krankheiten)', value: '24-maladie(s) (Krankheiten)' },
                    { label: '25-parasite(s) (Parasiten)', value: '25-parasite(s) (Parasiten)' },
                    { label: '26-bras frotteurs (reibende Äste)', value: '26-bras frotteurs (reibende Äste)' },
                    { label: '27-dégâts de chantier', value: '27-dégâts de chantier' }
                ], values: selectedItems, placeholder: "Please select some items", onClickItem: handleSelect })));
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9mZWF0dXJlLWxheWVyLWZ1bmN0aW9uL2Rpc3QvcnVudGltZS93aWRnZXQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTm5EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFDbUM7QUFDNkc7QUFDbEosTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsR0FBRyw0Q0FBSztBQUV0QixTQUFTLE1BQU0sQ0FBRSxLQUE4QjtJQUM1RCxNQUFNLENBQUMsYUFBYSxFQUFFLGdCQUFnQixDQUFDLEdBQUcsUUFBUSxDQUFXLEVBQUUsQ0FBQztJQUVoRSxTQUFTLENBQUMsR0FBRyxFQUFFO0lBRWYsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLE1BQU0sY0FBYyxHQUFHLEdBQUcsRUFBRTtRQUMxQixJQUFJLEtBQUssQ0FBQyxjQUFjO1lBQ3RCLEtBQUssQ0FBQyxjQUFjLENBQUMsTUFBTSxLQUFLLENBQUM7WUFDakMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNO1lBQzlCLEtBQUssQ0FBQyxjQUFjLENBQUMs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QkFDOUUsRUFBRSxLQUFLLEVBQUUsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLDRCQUE0QixFQUFFO29CQUM1RSxFQUFFLEtBQUssRUFBRSxtQ0FBbUMsRUFBRSxLQUFLLEVBQUUsbUNBQW1DLEVBQUU7b0JBQzFGLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRTtpQkFDbkUsRUFDRCxNQUFNLEVBQUUsYUFBYSxFQUNyQixXQUFXLEVBQUMsMEJBQTBCLEVBQ3RDLFdBQVcsRUFBRSxZQUFZLEdBQ3pCLENBQ29CLENBQ2xCO0FBQ1IsQ0FBQztBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1jb3JlL2xpYi9zZXQtcHVibGljLXBhdGgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL2ZlYXR1cmUtbGF5ZXItZnVuY3Rpb24vc3JjL3J1bnRpbWUvd2lkZ2V0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCIvKipcbiAgTGljZW5zaW5nXG5cbiAgQ29weXJpZ2h0IDIwMjIgRXNyaVxuXG4gIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IFlvdVxuICBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heVxuICBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuXG4gIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3JcbiAgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nXG4gIHBlcm1pc3Npb25zIGFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cblxuICBBIGNvcHkgb2YgdGhlIGxpY2Vuc2UgaXMgYXZhaWxhYmxlIGluIHRoZSByZXBvc2l0b3J5J3NcbiAgTElDRU5TRSBmaWxlLlxuKi9cbmltcG9ydCB7IE11bHRpU2VsZWN0IH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IFJlYWN0LCBEYXRhU291cmNlTWFuYWdlciwgdHlwZSBBbGxXaWRnZXRQcm9wcywgRGF0YVNvdXJjZUNvbXBvbmVudCwgdHlwZSBGZWF0dXJlTGF5ZXJEYXRhU291cmNlLCB0eXBlIElNRGF0YVNvdXJjZUluZm8gfSBmcm9tICdqaW11LWNvcmUnXG5jb25zdCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSA9IFJlYWN0XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdpZGdldCAocHJvcHM6IEFsbFdpZGdldFByb3BzPHVua25vd24+KSB7XG4gIGNvbnN0IFtzZWxlY3RlZEl0ZW1zLCBzZXRTZWxlY3RlZEl0ZW1zXSA9IHVzZVN0YXRlPHN0cmluZ1tdPihbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGlzRHNDb25maWd1cmVkID0gKCkgPT4ge1xuICAgIGlmIChwcm9wcy51c2VEYXRhU291cmNlcyAmJlxuICAgICAgcHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAxICYmXG4gICAgICBwcm9wcy51c2VEYXRhU291cmNlc1swXS5maWVsZHMgJiZcbiAgICAgIHByb3BzLnVzZURhdGFTb3VyY2VzWzBdLmZpZWxkcy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9XG5cbiAgY29uc3QgaGFuZGxlU2VsZWN0ID0gKCkgPT4ge1xuICAgIHNldFNlbGVjdGVkSXRlbXMoc2VsZWN0ZWRJdGVtcylcbiAgICBzYXZlU2VsZWN0ZWRWYWx1ZXNUb0xheWVyKHNlbGVjdGVkSXRlbXMpXG4gIH1cblxuICBjb25zdCBzYXZlU2VsZWN0ZWRWYWx1ZXNUb0xheWVyID0gYXN5bmMgKHZhbHVlczogc3RyaW5nW10pID0+IHtcbiAgICBpZiAoIWlzRHNDb25maWd1cmVkKCkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBjb25zdCBkc0lkID0gcHJvcHMudXNlRGF0YVNvdXJjZXNbMF0uZGF0YVNvdXJjZUlkXG4gICAgY29uc3QgZGF0YVNvdXJjZSA9IERhdGFTb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0RGF0YVNvdXJjZShkc0lkKSBhcyBGZWF0dXJlTGF5ZXJEYXRhU291cmNlXG4gICAgY29uc3QgZGF0YUxheWVyID0gZGF0YVNvdXJjZS5sYXllclxuICAgIGNvbnN0IHJlY29yZFRvVXBkYXRlID0gZGF0YVNvdXJjZS5nZXRTZWxlY3RlZFJlY29yZHMoKVswXVxuICAgIGNvbnN0IGlkID0gcmVjb3JkVG9VcGRhdGUuZ2V0SWQoKVxuICAgIGNvbnN0IHF1ZXJ5ID0gZGF0YUxheWVyLmNyZWF0ZVF1ZXJ5KClcbiAgICBxdWVyeS53aGVyZSA9IGBvYmplY3RpZCA9ICR7aWR9YFxuICAgIGNvbnN0IGZlYXR1cmUgPSBhd2FpdCBkYXRhTGF5ZXIucXVlcnlGZWF0dXJlcyhxdWVyeSkudGhlbigocmVzdWx0OiBhbnkpID0+IHtcbiAgICAgIHJldHVybiByZXN1bHQuZmVhdHVyZXNbMF1cbiAgICB9KVxuICAgIGZlYXR1cmUuYXR0cmlidXRlcy5zeW1wdG9tX2tyID0gdmFsdWVzLmpvaW4oJzsnKVxuICAgIGNvbnN0IGVkaXRzID0ge1xuICAgICAgdXBkYXRlRmVhdHVyZXM6IFtmZWF0dXJlXVxuICAgIH1cbiAgICB0cnkge1xuICAgICAgZGF0YUxheWVyLmFwcGx5RWRpdHMoZWRpdHMpLnRoZW4oKGVkaXRzUmVzdWx0OiBvYmplY3QpID0+IHtcbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZygnVmFsdWVzIHNhdmVkIHN1Y2Nlc3NmdWxseTogJywgcmVjb3JkVG9VcGRhdGUpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHNhdmluZyB2YWx1ZXM6JywgZXJyb3IpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGF0YUNoYW5nZWQgPSBhc3luYyAoaW5mbzogSU1EYXRhU291cmNlSW5mbykgPT4ge1xuICAgIGNvbnN0IGRzSWQgPSBwcm9wcy51c2VEYXRhU291cmNlc1swXS5kYXRhU291cmNlSWRcbiAgICBjb25zdCBkYXRhU291cmNlID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXREYXRhU291cmNlKGRzSWQpIGFzIEZlYXR1cmVMYXllckRhdGFTb3VyY2VcbiAgICBjb25zdCBkYXRhTGF5ZXIgPSBkYXRhU291cmNlLmxheWVyXG4gICAgaWYgKGRhdGFTb3VyY2UuZ2V0U2VsZWN0ZWRSZWNvcmRzKCkubGVuZ3RoID09PSAwKSB7IHJldHVybiB9XG4gICAgY29uc3Qgc2VsZWN0ZWRGZWF0dXJlSWQgPSBkYXRhU291cmNlLmdldFNlbGVjdGVkUmVjb3JkcygpWzBdLmdldElkKClcbiAgICBjb25zdCBxdWVyeSA9IGRhdGFMYXllci5jcmVhdGVRdWVyeShkYXRhU291cmNlLmdldFNlbGVjdGVkUmVjb3JkcygpKVxuICAgIHF1ZXJ5LndoZXJlID0gYG9iamVjdGlkID0gJHtzZWxlY3RlZEZlYXR1cmVJZH1gXG4gICAgY29uc3QgZmVhdHVyZSA9IGF3YWl0IGRhdGFMYXllci5xdWVyeUZlYXR1cmVzKHF1ZXJ5KS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuICAgICAgcmV0dXJuIHJlc3VsdC5mZWF0dXJlc1swXVxuICAgIH0pXG4gICAgY29uc3QgYXR0cmlidXRlVmFsdWUgPSBmZWF0dXJlLmF0dHJpYnV0ZXMuc3ltcHRvbV9rci5zcGxpdCgnOycpXG4gICAgY29uc3QgYXR0cmlidXRlc1RvVHJhbnNmZXIgPSBhdHRyaWJ1dGVWYWx1ZS5maWx0ZXIoKHZhbHVlOiBzdHJpbmcpID0+ICF2YWx1ZS5pbmNsdWRlcygnICcpKVxuICAgIGNvbnNvbGUubG9nKCdBdHRyaWJ1dGUgdmFsdWU6JywgYXR0cmlidXRlc1RvVHJhbnNmZXIpXG4gICAgc2V0U2VsZWN0ZWRJdGVtcyhhdHRyaWJ1dGVzVG9UcmFuc2ZlcilcbiAgfVxuXG4gIGlmICghaXNEc0NvbmZpZ3VyZWQoKSkge1xuICAgIHJldHVybiA8aDM+XG4gICAgICBUaGlzIHdpZGdldCBkZW1vbnN0cmF0ZXMgaG93IHRvIHVzZSBhIGZlYXR1cmUgbGF5ZXIgYXMgYSBkYXRhIHNvdXJjZS5cbiAgICAgIDxiciAvPlxuICAgICAgQ29uZmlndXJlIHRoZSBkYXRhIHNvdXJjZS5cbiAgICA8L2gzPlxuICB9XG4gIHJldHVybiA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC11c2UtZmVhdHVyZS1sYXllclwiIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScsIGhlaWdodDogJzEwMCUnLCBtYXhIZWlnaHQ6ICc4MDBweCcsIG92ZXJmbG93OiAnYXV0bycgfX0+XG5cbiAgICA8RGF0YVNvdXJjZUNvbXBvbmVudCB1c2VEYXRhU291cmNlPXtwcm9wcy51c2VEYXRhU291cmNlc1swXX0gd2lkZ2V0SWQ9e3Byb3BzLmlkfVxuICAgICAgICAgIG9uRGF0YVNvdXJjZUluZm9DaGFuZ2U9e2RhdGFDaGFuZ2VkfVxuICAgICAgICAgIHF1ZXJ5Q291bnQ+XG4gICAgICA8TXVsdGlTZWxlY3Qgd2lkZ2V0SWQ9XCJtdWx0aS1zZWxlY3RcIlxuICAgICAgaXRlbXM9e1tcbiAgICAgICAgeyBsYWJlbDogJzAwLXNhbnMgZMOpZ8OidHMgKG9obmUgU2Now6RkZW4pJywgdmFsdWU6ICcwMC1zYW5zIGTDqWfDonRzIChvaG5lIFNjaMOkZGVuKScgfSxcbiAgICAgICAgeyBsYWJlbDogJzAxLWJsZXNzdXJlcyAoVmVybGV0enVuZ2VuKScsIHZhbHVlOiAnMDEtYmxlc3N1cmVzIChWZXJsZXR6dW5nZW4pJyB9LFxuICAgICAgICB7IGxhYmVsOiAnMDItY2F2aXTDqSAoSMO2aGx1bmcpJywgdmFsdWU6ICcwMi1jYXZpdMOpIChIw7ZobHVuZyknIH0sXG4gICAgICAgIHsgbGFiZWw6ICcwMy1jaGFtcGlnbm9ucyAoUGlsemJlZmFsbCknLCB2YWx1ZTogJzAzLWNoYW1waWdub25zIChQaWx6YmVmYWxsKScgfSxcbiAgICAgICAgeyBsYWJlbDogJzA0LWZpc3N1cmUvbmVydnVyZSAoUmlzcy9SaXBwZSknLCB2YWx1ZTogJzA0LWZpc3N1cmUvbmVydnVyZSAoUmlzcy9SaXBwZSknIH0sXG4gICAgICAgIHsgbGFiZWw6ICcwNS1mb3VyY2hlIChWZXJnYWJlbHVuZyknLCB2YWx1ZTogJzA1LWZvdXJjaGUgKFZlcmdhYmVsdW5nKScgfSxcbiAgICAgICAgeyBsYWJlbDogJzA2LXN1c3BpY2lvbiBzdXIgbFxcJ8OpY29yY2UgKFJpbmRlbmF1ZmbDpGxsaWdrZWl0KScsIHZhbHVlOiAnMDYtc3VzcGljaW9uIHN1ciBsXFwnw6ljb3JjZSAoUmluZGVuYXVmZsOkbGxpZ2tlaXQpJyB9LFxuICAgICAgICB7IGxhYmVsOiAnMDctYnJhbmNoZXMgbW9ydGVzIChUb3Rob2x6KScsIHZhbHVlOiAnMDctYnJhbmNoZXMgbW9ydGVzIChUb3Rob2x6KScgfSxcbiAgICAgICAgeyBsYWJlbDogJzA4LWTDqXNzw6hjaGVtZW50IGRlIGxhIGNpbWUgKFdpcGZlbGTDvHJyZSknLCB2YWx1ZTogJzA4LWTDqXNzw6hjaGVtZW50IGRlIGxhIGNpbWUgKFdpcGZlbGTDvHJyZSknIH0sXG4gICAgICAgIHsgbGFiZWw6ICcxMS1icmFuY2hlIHRvbWLDqWUgb3UgY2Fzc8OpZSAoQXN0YWJicnVjaCwgQXN0YXVzYnJ1Y2gpJywgdmFsdWU6ICcxMS1icmFuY2hlIHRvbWLDqWUgb3UgY2Fzc8OpZSAoQXN0YWJicnVjaCwgQXN0YXVzYnJ1Y2gpJyB9LFxuICAgICAgICB7IGxhYmVsOiAnMTItY2ltZSBkw6lzw6lxdWlsaWJyw6llICh1bmdsZWljaG3DpHNzaWdlciBLcm9uZW5hdWZiYXUpJywgdmFsdWU6ICcxMi1jaW1lIGTDqXPDqXF1aWxpYnLDqWUgKHVuZ2xlaWNobcOkc3NpZ2VyIEtyb25lbmF1ZmJhdSknIH0sXG4gICAgICAgIHsgbGFiZWw6ICcxMy1hbmNpZW4gaGF1YmFuIChBbHRlIEtyb25lbnNpY2hlcnVuZyknLCB2YWx1ZTogJzEzLWFuY2llbiBoYXViYW4gKEFsdGUgS3JvbmVuc2ljaGVydW5nKScgfSxcbiAgICAgICAgeyBsYWJlbDogJzE0LXbDqWfDqXRhdGlvbiDDqXRyYW5nw6hyZSDDoCBsXFwnYXJicmUgKEJhdW1mcmVtZGVyIEJld3VjaHMpJywgdmFsdWU6ICcxNC12w6lnw6l0YXRpb24gw6l0cmFuZ8OocmUgw6AgbFxcJ2FyYnJlIChCYXVtZnJlbWRlciBCZXd1Y2hzKScgfSxcbiAgICAgICAgeyBsYWJlbDogJzE1LWTDqWfDonRzIGNhdXPDqXMgcGFyIHbDqWhpY3VsZXMgKEFuZmFocnNjaGFkZW4pJywgdmFsdWU6ICcxNS1kw6lnw6J0cyBjYXVzw6lzIHBhciB2w6loaWN1bGVzIChBbmZhaHJzY2hhZGVuKScgfSxcbiAgICAgICAgeyBsYWJlbDogJzE2LWfDqm5hbnRlIHN1ciB0ZXJyYWluIHB1YmxpYyAoc3TDtnJ0IMO2ZmZlbnRsaWNoZW4gUmF1bSknLCB2YWx1ZTogJzE2LWfDqm5hbnRlIHN1ciB0ZXJyYWluIHB1YmxpYyAoc3TDtnJ0IMO2ZmZlbnRsaWNoZW4gUmF1bSknIH0sXG4gICAgICAgIHsgbGFiZWw6ICcxNy1nw6puYW50ZSBzdXIgdGVycmFpbiBwcml2w6kgKHN0w7ZydCBwcml2YXRlbiBSYXVtKScsIHZhbHVlOiAnMTctZ8OqbmFudGUgc3VyIHRlcnJhaW4gcHJpdsOpIChzdMO2cnQgcHJpdmF0ZW4gUmF1bSknIH0sXG4gICAgICAgIHsgbGFiZWw6ICcxOC1kw6lzc2VjaGVtZW50IGRlcyBleHRyw6ltaXTDqXMgKEFzdGTDvHJyZSknLCB2YWx1ZTogJzE4LWTDqXNzZWNoZW1lbnQgZGVzIGV4dHLDqW1pdMOpcyAoQXN0ZMO8cnJlKScgfSxcbiAgICAgICAgeyBsYWJlbDogJzE5LWTDqXNzZWNoZW1lbnQgbG9jYWxpc8OpIChsb2thbGUgRMO8cnJlc3RlbGxlbiknLCB2YWx1ZTogJzE5LWTDqXNzZWNoZW1lbnQgbG9jYWxpc8OpIChsb2thbGUgRMO8cnJlc3RlbGxlbiknIH0sXG4gICAgICAgIHsgbGFiZWw6ICcyMS1kw6lmb2xpYXRpb24gcHLDqWNvY2UgKHZvcnplaXRpZ2VyIEJsYXR0ZmFsbCknLCB2YWx1ZTogJzIxLWTDqWZvbGlhdGlvbiBwcsOpY29jZSAodm9yemVpdGlnZXIgQmxhdHRmYWxsKScgfSxcbiAgICAgICAgeyBsYWJlbDogJzIyLXBhcyBhcHBsaWNhYmxlIChuaWNodCBhbndlbmRiYXIpJywgdmFsdWU6ICcyMi1wYXMgYXBwbGljYWJsZSAobmljaHQgYW53ZW5kYmFyKScgfSxcbiAgICAgICAgeyBsYWJlbDogJzIzLWNpbWUgY2xhaXJzZW3DqWUgKGxpY2h0ZSBLcm9uZSknLCB2YWx1ZTogJzIzLWNpbWUgY2xhaXJzZW3DqWUgKGxpY2h0ZSBLcm9uZSknIH0sXG4gICAgICAgIHsgbGFiZWw6ICcyNC1tYWxhZGllKHMpIChLcmFua2hlaXRlbiknLCB2YWx1ZTogJzI0LW1hbGFkaWUocykgKEtyYW5raGVpdGVuKScgfSxcbiAgICAgICAgeyBsYWJlbDogJzI1LXBhcmFzaXRlKHMpIChQYXJhc2l0ZW4pJywgdmFsdWU6ICcyNS1wYXJhc2l0ZShzKSAoUGFyYXNpdGVuKScgfSxcbiAgICAgICAgeyBsYWJlbDogJzI2LWJyYXMgZnJvdHRldXJzIChyZWliZW5kZSDDhHN0ZSknLCB2YWx1ZTogJzI2LWJyYXMgZnJvdHRldXJzIChyZWliZW5kZSDDhHN0ZSknIH0sXG4gICAgICAgIHsgbGFiZWw6ICcyNy1kw6lnw6J0cyBkZSBjaGFudGllcicsIHZhbHVlOiAnMjctZMOpZ8OidHMgZGUgY2hhbnRpZXInIH1cbiAgICAgIF19XG4gICAgICB2YWx1ZXM9e3NlbGVjdGVkSXRlbXN9XG4gICAgICBwbGFjZWhvbGRlcj1cIlBsZWFzZSBzZWxlY3Qgc29tZSBpdGVtc1wiXG4gICAgICBvbkNsaWNrSXRlbT17aGFuZGxlU2VsZWN0fVxuICAgIC8+XG4gICAgPC9EYXRhU291cmNlQ29tcG9uZW50PlxuICA8L2Rpdj5cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=