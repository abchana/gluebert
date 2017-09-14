'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}();Object.defineProperty(exports,'__esModule',{value:!0});function _asyncToGenerator(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d('next',a)},function(a){d('throw',a)})}return d('next')})}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}var ElementBuilder=function(){function a(){var b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};_classCallCheck(this,a),this._schemaValidator=d&&'function'==typeof d?new d:null,this._templateEngine='object'===('undefined'==typeof c?'undefined':_typeof(c))?c:null,this._signatures=b instanceof Array?this._transformToObject(b):{},this._elements={},this._options=e}return _createClass(a,[{key:'_transformToObject',value:function _transformToObject(a){var b={};return a instanceof Array&&a.forEach(function(a){a&&'string'==typeof a.name&&(b[a.name]=a)}),b}},{key:'_elementExists',value:function _elementExists(a){return!!a&&'string'==typeof a&&'object'===_typeof(this._elements[a])&&!!this._elements[a]}},{key:'getElement',value:function getElement(a){return this._elementExists(a)?this._elements[a]:null}},{key:'getSignature',value:function getSignature(a){return this._signatureExists(a)?this._signatures[a]:null}},{key:'removeSignature',value:function removeSignature(a){return this._signatureExists(a)&&delete this._signatures[a],this}},{key:'_signatureExists',value:function _signatureExists(a){return'object'===_typeof(this._signatures[a])&&!!this._signatures[a]&&'string'==typeof this._signatures[a].name}},{key:'isBusySignature',value:function isBusySignature(a){var b=this.getSignature(a);return!!(b&&b.busy)}},{key:'setBusySignature',value:function setBusySignature(a){var b=this.getSignature(a);return b&&(this._signatures[a].busy=!0),this}},{key:'getTemplateElement',value:function getTemplateElement(a,b){return'content'in document.createElement('template')?this._getTemplateElementShadow(a,b):this._getTemplateElementClassic(a,b)}},{key:'_getTemplateElementClassic',value:function _getTemplateElementClassic(a,b){var c=document.createDocumentFragment();return c.innerHTML=this._templateEngine&&'object'===_typeof(this._templateEngine)&&'function'==typeof this._templateEngine.render?this._templateEngine.render(a,b):a,c}},{key:'_getTemplateElementShadow',value:function _getTemplateElementShadow(a,b){var c=document.createElement('template');return c.innerHTML=this._templateEngine&&'object'===_typeof(this._templateEngine)&&'function'==typeof this._templateEngine.render?this._templateEngine.render(a,b):a,c.content}},{key:'getSchema',value:function getSchema(a){var b=this.getElement(a);return b&&'object'===('undefined'==typeof b?'undefined':_typeof(b))&&'undefined'!=typeof b.schema?b.schema:null}},{key:'_validate',value:function _validate(a,b){if(!this._elementExists(a))return!1;var c=this.getSchema(a);return this._schemaValidator&&c?this._schemaValidator.validate(c,b):!0}},{key:'addElement',value:function addElement(a,b,c,d){var e=this._templateEngine&&'object'===_typeof(this._templateEngine)?this._templateEngine.createView(c):c;return this._elements[a]={schema:b,template:e,module:d},this}},{key:'_generateElement',value:function _generateElement(a,b){if(this._validate(a,b)){var c=this.getElement(a,b),d=new c.module(b,this.getTemplateElement(c.template,b));return d.create()}throw new Error('Create Element '+a+' failed. Given data do not match given schema.')}},{key:'_loadElementModule',value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){var d,e=this;return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return d=this.getSignature(b),this.setBusySignature(b),a.next=4,Promise.all([d.importSchema(),d.importTemplate(),d.importElement()]).then(function(a){if(e.addElement(b,a[0],a[1],a[2]),e._elementExists(b))return e.removeSignature(b),e.create(b,c);throw new Error('Unfortunately Element '+b+' could not have been instanciated.')}).catch(function(a){throw new Error('Unfortunately Element '+b+' could not have been instanciated. '+a)});case 4:return a.abrupt('return',a.sent);case 5:case'end':return a.stop();}},a,this)}));return function _loadElementModule(){return a.apply(this,arguments)}}()},{key:'_retryCreate',value:function _retryCreate(a,b){var c=this;return new Promise(function(d,e){window.setTimeout(function(){try{d(c.create(a,b))}catch(a){e(a)}},100)})}},{key:'create',value:function(){var a=_asyncToGenerator(regeneratorRuntime.mark(function a(b,c){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,!this._elementExists(b)){a.next=5;break}return a.abrupt('return',this._generateElement(b,c));case 5:if(!this._signatureExists(b)||this.isBusySignature(b)){a.next=9;break}return a.abrupt('return',this._loadElementModule(b,c));case 9:if(!(this._signatureExists(b)&&this.isBusySignature(b))){a.next=13;break}return a.abrupt('return',this._retryCreate(b,c));case 13:return a.abrupt('return',null);case 14:a.next=19;break;case 16:return a.prev=16,a.t0=a['catch'](0),a.abrupt('return',null);case 19:case'end':return a.stop();}},a,this,[[0,16]])}));return function create(){return a.apply(this,arguments)}}()},{key:'getOptions',value:function getOptions(){return this._options}},{key:'getElementReadyClass',value:function getElementReadyClass(){return'string'==typeof this._options.elementReadyClass?this._options.elementReadyClass:null}}]),a}();exports.ElementBuilder=ElementBuilder;