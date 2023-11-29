odoo.define('basic_calculator.CalculatorItem', function (require) {
    'use strict';

    let Widget = require('web.Widget');
    let SystrayMenu = require('web.SystrayMenu');
    let Calculator = require('basic_calculator.Calculator');

    let CalculatorItem = Widget.extend({
        template: 'basic_calculator.calculator',
        events: {
            'click': '_onClick',
            'click .calc_value': '_insertValue',
            'click .calc_operator': '_insertOperator',
            'click .calc_control': '_insertControlValue',
            "keydown": "_onKeyDown",
        },

        init: function () {
            this.calculator = new Calculator();
            this.keyboardNumbers = {
                'Numpad1': 1, 'Numpad2': 2, 'Numpad3': 3, 'Numpad4': 4, 'Numpad5': 5, 'Numpad6': 6,
                'Numpad7': 7, 'Numpad8': 8, 'Numpad9': 9, 'Numpad0': 0, 'NumpadDecimal': '.'
            };
            this.keyboardOperators = {
                'NumpadAdd': '+',
                'NumpadSubtract': '-',
                'NumpadMultiply': '*',
                'NumpadDivide': '/'
            }
            this.keyboardControls = {'NumpadEnter': 'equals'}
        },

        _onClick: function (event) {
            if ($(event.target).is('i') === false && $(event.target).is('a') === false) {
                event.stopPropagation();
            }
        },

        _insertValue: function (event) {
            this.calculator.insertValue(event.target.value);
        },

        _insertOperator: function (event) {
            this.calculator.insertOperator(event.target.value);
        },

        _insertControlValue: function (event) {
            let processId = event.target.id;
            switch (processId) {
                case 'sign':
                    this.calculator.changeSign();
                    break;
                case 'clear':
                    this.calculator.clearNumber();
                    break;
                case 'clear_all':
                    this.calculator.reset();
                    break;
                case 'delete':
                    this.calculator.deleteLastValue();
                    break;
                case 'equals':
                    this.calculator.calculate();
                    break;
                default:
                    // Do nothing
                    return
            }
        },

        _onKeyDown: function (event) {
            let keyName = event.originalEvent.code;
            if (keyName in this.keyboardNumbers) {
                this.calculator.insertValue(this.keyboardNumbers[keyName]);
                event.preventDefault();
            } else if (keyName in this.keyboardOperators) {
                this.calculator.insertOperator(this.keyboardOperators[keyName]);
                event.preventDefault();
            } else if (keyName in this.keyboardControls) {
                if (this.keyboardControls[keyName] === 'equals') {
                    this.calculator.calculate();
                    event.preventDefault();
                }
            }
        },
    });

    SystrayMenu.Items.push(CalculatorItem);

    return CalculatorItem;
})
