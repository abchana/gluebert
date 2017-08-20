'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HandlebarsTemplate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = require('./template.abstract');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class represents HandlebarsTemplate
 */
var HandlebarsTemplate = function (_TemplateAbstract) {
    _inherits(HandlebarsTemplate, _TemplateAbstract);

    /**
     * creates a new HandlebarsTemplate
     * @param {function} engine - template engine
     */
    function HandlebarsTemplate(engine) {
        _classCallCheck(this, HandlebarsTemplate);

        return _possibleConstructorReturn(this, (HandlebarsTemplate.__proto__ || Object.getPrototypeOf(HandlebarsTemplate)).call(this, engine));
    }

    /**
     * creates a new hbs view
     * @param {string} template
     * @return {function}
     */


    _createClass(HandlebarsTemplate, [{
        key: 'createView',
        value: function createView(template) {
            return this.engine.compile(template);
        }

        /**
         * render view
         * @param {function} view
         * @param {object} data
         * @return {string}
         */

    }, {
        key: 'render',
        value: function render(view, data) {
            return view(data);
        }
    }]);

    return HandlebarsTemplate;
}(_template.TemplateAbstract);

exports.HandlebarsTemplate = HandlebarsTemplate;