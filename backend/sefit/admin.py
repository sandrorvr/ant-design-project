from django.contrib import admin

from .models import Servidores, DayOff, Scheduler, Local, SchedulerWorker

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
class SchedulerInfoAdmin(admin.ModelAdmin):
    list_display = ('name','date')

@admin.register(SchedulerWorker)
class SchedulerAdmin(admin.ModelAdmin):
    list_display = ('servidor','scheduler','area','eqp','func','local','timeFinish','timeStart')


@admin.register(Local)
class LocalAdmin(admin.ModelAdmin):
    list_display = ('roteiro_id','local')

