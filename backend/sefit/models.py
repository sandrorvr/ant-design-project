from django.db import models

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