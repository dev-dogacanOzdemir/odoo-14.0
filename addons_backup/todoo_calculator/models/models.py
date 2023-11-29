from odoo import models, fields


class PopupDemo(models.Model):
    _name = 'popup.demo'

    name = fields.Char(string='Name')
    email = fields.Char(string='Email')
