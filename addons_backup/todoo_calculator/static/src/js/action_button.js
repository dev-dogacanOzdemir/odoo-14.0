odoo.define('pos_action_button.ActionButton',function(require) {
    "use strict";
    var pos_screens = require('point_of_sale.screens');
    var DashboardButton = pos_screens.ActionButtonWidget.extend({
        template : 'DashboardButton',
        button_click : function (){
            alert('Dashboard button clicked')
        },
    });

    pos_screens.define_action_button({
        'name' : 'Dashboard',
        'widget' : DashboardButton,
        'condition' : function (){return this.pos;},
    });
});