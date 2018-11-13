from django.contrib import admin
from .models import City, Owner, House

# Register your models here.

admin.site.register(City)
admin.site.register(Owner)
admin.site.register(House)
