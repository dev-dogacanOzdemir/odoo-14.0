# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name' : 'Birim Ağırlık',
    'version' : '1.0',
    'author': 'Doğacan Özdemir',
    'licence' : 'TR-1',
    'summary': 'Birim ağırlık hesaplama butonu (POS Ekranı)',
    'description': """""",
    'category': 'Point Of Sales',
    'website': 'https://www.omerunesi.com/',
    'images' : [],
    'depends' : ['base','point_of_sale'],
    'data': [ 'views/pos_templates.xml'
             ],
    'qweb': ['static/xml/pos_product_button_view.xml'],
    'installable': True,
    'application': True,
    'auto_install': False,
}
