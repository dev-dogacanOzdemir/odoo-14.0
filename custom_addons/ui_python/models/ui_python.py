from odoo import api, fields, models
from odoo.tools.safe_eval import safe_eval


class UiPython(models.Model):
    _name = 'ui.python'
    _description = 'Ui Python'
    _rec_name = 'rec_name'

    DEFAULT_ENV_VARIABLES = """ #Available variables:
    #  - self: Current Object
    #  - self.env: Odoo Enviroment on which the action is triggered
    #  - self.env.user: Return the current user (as an instance)
    #  - self.env.is_system: Return whether the current user has group "settings", or is in superuser mode.
    #  - self.env.is_admin: Return whether the current user has group "Access Rights", or is in superuser mode.
    #  - self.env.is_superuser: Return Whether the enviroment is in superuser mode.
    #  - self.env.company: Return the current company (as an instance)
    #  - self.env.companies: Return a recordset of the enabled campanies by the user  
    #  - self.env.lang: Return the current language code"""

    rec_name = fields.Char(default='Ui Python', readonly=1, invisible=True)
    model_id = fields.Many2one('ir.model', string='Model')
    python_code = fields.Text(string='Python Code')
    results = fields.Text(string='Results')
    helpful_commands = fields.Text(string='Helpful Commands', default=DEFAULT_ENV_VARIABLES)

    def execute_method(self):
        try:
            if self.model_id:
                model = self.env[self.model_id.model]
            else:
                model = self
            if self.python_code:
                self.results = safe_eval(self.python_code.strip(), {'self': model}, mode="eval")
            else:
                self.results = "Please add some codes !"
        except Exception as error:
            self.results = str(error)

    def clear_method(self):
        self.python_code = ''
        self.results = ''
