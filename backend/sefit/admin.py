from django.contrib import admin

from .models import Servidores, DayOff

@admin.register(Servidores)
class ServidoresAdmin(admin.ModelAdmin):
    list_display = (
        'mat', 'status', 'name', 'mat', 'email', 'genere', 
        'personal_cell', 'work_cell', 'work_cell', 'office', 
        'begin_hour', 'exit_hour', 'admission', 'gp', 'cpf', 'cnh', 
        'cat_cnh', 'district', 'city'
        )

@admin.register(DayOff)
class DayOffAdmin(admin.ModelAdmin):
    list_display = ('mat','dayOff','start_date','end_date')

