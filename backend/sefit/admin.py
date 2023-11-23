from django.contrib import admin

from .models import Servidores, DayOff, Scheduler, SchedulerLocal, SchedulerWorker, SchedulerType

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
    list_display = ('typeScheduler','date')


@admin.register(SchedulerType)
class SchedulerTypeAdmin(admin.ModelAdmin):
    list_display = ('name','description')


@admin.register(SchedulerWorker)
class SchedulerAdmin(admin.ModelAdmin):
    list_display = ('servidor','scheduler','eqp','func','local','timeFinish','timeStart')


@admin.register(SchedulerLocal)
class SchedulerLocalAdmin(admin.ModelAdmin):
    list_display = ('area','local', 'typeScheduler')

