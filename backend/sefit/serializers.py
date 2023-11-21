from rest_framework import serializers
from .models import Servidores, DayOff, Scheduler, Local, SchedulerWorker
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
    name = serializers.SerializerMethodField()
    class Meta:
        model = DayOff
        fields = [
            'id','mat','name','dayOff','start_date','end_date', 'comment'
        ]
    
    def get_name(self, obj):
        return obj.mat.name


class LocalSerializers(serializers.ModelSerializer):
    class Meta:
        model = Local
        fields = [
            'roteiro_id', 'local'
        ]

class SchedulerSerializers(serializers.ModelSerializer):
    class Meta:
        model = Scheduler
        fields = '__all__'


class SchedulerWorkerSerializers(serializers.ModelSerializer):

    scheduler = serializers.PrimaryKeyRelatedField(
        many=False,
        queryset=Scheduler.objects.all()
    )
    local = serializers.PrimaryKeyRelatedField(
    many=False,
    queryset=Local.objects.all()
    )
    class Meta:
        model = SchedulerWorker
        fields = fields = '__all__'
    
    