{
    'name': "POS Birim Ağırlık Hesaplayıcı",
    'summary': """Birim ağırlık hesaplama""",
    'description': """Birim ağırlık hesaplama aracıdır. 
    """,
    'version': '14.0.0.0.1',
    'category': 'Tools',
    'license': 'LGPL-3',
    'author': "Doğacan Özdemir",
    'website': "www.omerunesi.com",
    'contributors': [
        "Doğacan Özdemir <dogabeatz@gmail.com>",
    ],
    'support': 'info@omerunesi.com',
    'depends': [
        'base',
        'web','point_of_sale'
    ],
    'data': [
        'views/pos_templates.xml',
    ],
    'qweb': ['static/src/xml/pos_ticket_button_view.xml'],
    'images': [
        'static/description/screenshot_calculator.png'
    ],
    'installable': True,
    'application': False,
    'auto_install': False,
}