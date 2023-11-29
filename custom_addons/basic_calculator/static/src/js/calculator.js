odoo.define('basic_calculator.Calculator', function (require) {
    "use strict";

    let Class = require("web.Class");

    let Calculator = Class.extend({
        init: function () {
            this.isNewNumber = true;
            this.isNegativeNumber = false;
            this.lastInput = ''
        },

        insertValue: function (value) {
            if (!this.isNewNumber) {
                let currentValue = document.getElementById("number").value;
                document.getElementById("number").value = currentValue + value;
            } else {
                if (value === '.') {
                    document.getElementById("number").value = '0' + value;
                } else {
                    document.getElementById("number").value = value;
                }
                this.isNewNumber = false;
            }
            this.lastInput = 'number'
        },

        insertOperator: function (operator) {
            let currentNumber = document.getElementById("number").value;
            let currentOperation = document.getElementById("math_operation").value;
            let newOperation = "";
            if (this.lastInput === '') {
                currentNumber = '0';
            }

            if (operator === '=' || ['+', '-', '*', '/'].includes(currentOperation.substring(currentOperation.length - 1))) {
                if (this.lastInput === 'operator') {
                    newOperation = `${currentOperation.substring(0, currentOperation.length - 1)}${operator}`;
                } else {
                    newOperation = `${currentOperation} ${currentNumber} ${operator}`;
                }
            } else {
                newOperation = `${currentNumber} ${operator}`;
            }
            document.getElementById("math_operation").value = newOperation;
            this.isNewNumber = true;
            this.lastInput = 'operator';
        },

        calculate: function () {
            let currentOperation = document.getElementById("math_operation").value;
            if (currentOperation === '0' || currentOperation.includes('=')) {
                return;
            }
            this.insertOperator('=');
            let newOperation = document.getElementById("math_operation").value;
            document.getElementById("number").value = eval(newOperation.substring(0, newOperation.length - 1));
        },

        changeSign: function () {
            let currentNumber = document.getElementById("number").value;
            let isNegativeNumber = false;
            if (currentNumber.length === 0) {
                return;
            }
            if (currentNumber[0] === '-') {
                isNegativeNumber = true;
            }

            let newNumber = '';
            if (!isNegativeNumber) {
                newNumber = '-' + currentNumber;
            } else {
                newNumber = currentNumber.substring(1, currentNumber.length);
            }
            document.getElementById("number").value = newNumber;
        },

        clearNumber: function () {
            document.getElementById("number").value = '';
        },

        reset: function () {
            this.isNewNumber = true;
            this.lastInput = ''
            this.clearNumber();
            document.getElementById("math_operation").value = '0';
        },

        deleteLastValue: function () {
            let currentNumber = document.getElementById("number").value;
            document.getElementById("number").value = currentNumber.substring(0, currentNumber.length - 1);
        },
    });

    return Calculator;
});
