from django.contrib import admin

from .models import Servidores, DayOff, Scheduler, Local

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


@admin.register(Scheduler)
class SchedulerAdmin(admin.ModelAdmin):
    list_display = ('name','area','eqp','func','local','timeFinish','timeStart')


@admin.register(Local)
class LocalAdmin(admin.ModelAdmin):
    list_display = ('roteiro_id','local')
