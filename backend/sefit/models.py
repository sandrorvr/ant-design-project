from django.db import models

TYPE_FUNCTIONS = [
    ('agt', 'AGENTE'),
    ('coo', 'COORDENADOR'),
    ('sup', 'SUPERVISOR'),
]

TYPE_EQP = [
    ('vtr', 'VIATURA'),
    ('mt', 'MOTO'),
    ('po', 'A Pé')
]

class Servidores(models.Model):
    status = models.CharField(max_length=10, default='ativo') 
    name = models.CharField(max_length=45)
    mat = models.IntegerField(primary_key=True)
    email = models.EmailField(null=True)
    genere = models.CharField(max_length=1)
    personal_cell = models.CharField(max_length=11)
    work_cell = models.CharField(max_length=11)
    office = models.CharField(max_length=20)
    begin_hour = models.TimeField()
    exit_hour = models.TimeField()
    admission = models.DateField(null=True)
    gp = models.CharField(max_length=10, blank=True, null=True)
    cpf = models.IntegerField()
    cnh = models.IntegerField()
    cat_cnh = models.CharField(max_length=2, null=True)
    district = models.CharField(max_length=30, null=True)
    city = models.CharField(max_length=30, null=True)

    def __str__(self):
        return self.name
    
class DayOff(models.Model):
    mat = models.ForeignKey(Servidores, on_delete=models.CASCADE)
    dayOff = models.CharField(max_length=20)
    start_date = models.DateField(null=True)
    end_date = models.DateField(null=True)
    comment = models.TextField(max_length=150, null=True)

    def __str__(self):
        return self.dayOff
    
class Local(models.Model):
    roteiro_id = models.CharField(max_length=20, primary_key=True)
    local = models.CharField(max_length=20)

    def __str__(self):
        return f'{self.local} - {self.roteiro_id}'
    
class SchedulerInfo(models.Model):
    name = models.CharField(max_length=80)
    date = models.DateField()
    description = models.TextField(max_length=250)
    timeFinish = models.TimeField()
    timeStart = models.TimeField()
    def __str__(self):
        return f'{self.name} - {self.date.year}'

class Scheduler(models.Model):
    area = models.CharField(max_length=20)
    eqp = models.CharField(max_length=4, choices=TYPE_EQP)
    func = models.CharField(max_length=3, choices=TYPE_FUNCTIONS)
    local = models.ForeignKey(Local, on_delete=models.CASCADE)
    scheduler = models.ForeignKey(SchedulerInfo, on_delete=models.CASCADE)
    name = models.CharField(max_length=40)
    timeFinish = models.TimeField(null=True)
    timeStart = models.TimeField(null=True)
    


    