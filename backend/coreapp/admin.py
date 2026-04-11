from django.contrib import admin

# Register your models here.
from .models import NCMS_USERS
from .models import Student_Model
from .models import NIICS_TEACHERS
from .models import Wing_Model
from .models import Gallery_Model

admin.site.register(NCMS_USERS)
admin.site.register(Student_Model)
admin.site.register(Wing_Model)
admin.site.register(Gallery_Model)
admin.site.register(NIICS_TEACHERS)
