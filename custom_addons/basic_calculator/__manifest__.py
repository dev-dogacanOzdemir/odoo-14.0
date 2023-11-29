# -*- coding: utf-8 -*-

{
    'name': "Basic Calculator",

    'summary': "Do Your Mathematical Calculations Easily",

    'author': "Ali Badran",
    'website': "https://github.com/ali-badran-95",

    'category': 'Extra Tools',
    'version': '1.0',

    # any module necessary for this one to work correctly
    'depends': ['base', 'web'],

    # always loaded
    'data': [
        'views/assets.xml',
    ],

    'qweb': [
        'static/src/xml/calculator_layout.xml'
    ],

    'images': ['static/description/assets/images/banner.png'],
    'installable': True,
    'application': False,
    'auto_install': False,
    'license': 'AGPL-3',
}
