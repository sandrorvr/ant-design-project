from rest_framework import serializers
from .models import Servidores, DayOff, Scheduler, SchedulerWorker, SchedulerLocal, SchedulerType
class ServidoresSerializers(serializers.ModelSerializer):
    class Meta:
        model = Servidores
        fields = [
            'mat', 'status', 'name', 'mat', 'email', 'genere', 
            'personal_cell', 'work_cell', 'work_cell', 'office', 
            'begin_hour', 'exit_hour', 'admission', 'gp', 'cpf', 'cnh', 
            'cat_cnh', 'district', 'city'
        ]

class DayOffSerializers(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = DayOff
        fields = [
            'id','mat','name','dayOff','start_date','end_date', 'comment'
        ]
    
    def get_name(self, obj):
        return obj.mat.name


class SchedulerLocalSerializers(serializers.ModelSerializer):
    class Meta:
        model = SchedulerLocal
        fields = '__all__'

class SchedulerTypeSerializers(serializers.ModelSerializer):
    class Meta:
        model = SchedulerType
        fields = ['id','name', 'description']

class SchedulerSerializers(serializers.ModelSerializer):
    
    class Meta:
        model = Scheduler
        fields = ['id','typeScheduler','date','obs', 'timeFinish','timeStart']

    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['typeScheduler'] = SchedulerTypeSerializers(instance.typeScheduler).data
        return response

class SchedulerWorkerSerializers(serializers.ModelSerializer):

    class Meta:
        model = SchedulerWorker
        fields = [
            "id", "scheduler", 
            "local", "eqp", 
            "func", "servidor", "timeFinish", "timeStart"
            ]
    
    def to_representation(self, instance):
        response = super().to_representation(instance)
        response['local'] = SchedulerLocalSerializers(instance.local).data
        response['scheduler'] = SchedulerSerializers(instance.scheduler).data
        response['servidor'] = ServidoresSerializers(instance.servidor).data
        return response

    