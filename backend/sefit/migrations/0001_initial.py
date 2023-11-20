# Generated by Django 4.2.7 on 2023-11-20 11:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Local',
            fields=[
                ('roteiro_id', models.CharField(max_length=20, primary_key=True, serialize=False)),
                ('local', models.CharField(max_length=20)),
            ],
        ),
        migrations.CreateModel(
            name='SchedulerInfo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=80)),
                ('date', models.DateField()),
                ('description', models.TextField(max_length=250)),
                ('timeFinish', models.TimeField()),
                ('timeStart', models.TimeField()),
            ],
        ),
        migrations.CreateModel(
            name='Servidores',
            fields=[
                ('status', models.CharField(default='ativo', max_length=10)),
                ('name', models.CharField(max_length=45)),
                ('mat', models.IntegerField(primary_key=True, serialize=False)),
                ('email', models.EmailField(max_length=254, null=True)),
                ('genere', models.CharField(max_length=1)),
                ('personal_cell', models.CharField(max_length=11)),
                ('work_cell', models.CharField(max_length=11)),
                ('office', models.CharField(max_length=20)),
                ('begin_hour', models.TimeField()),
                ('exit_hour', models.TimeField()),
                ('admission', models.DateField(null=True)),
                ('gp', models.CharField(blank=True, max_length=10, null=True)),
                ('cpf', models.IntegerField()),
                ('cnh', models.IntegerField()),
                ('cat_cnh', models.CharField(max_length=2, null=True)),
                ('district', models.CharField(max_length=30, null=True)),
                ('city', models.CharField(max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Scheduler',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('area', models.CharField(max_length=20)),
                ('eqp', models.CharField(choices=[('vtr', 'VIATURA'), ('mt', 'MOTO'), ('po', 'A Pé')], max_length=4)),
                ('func', models.CharField(choices=[('agt', 'AGENTE'), ('coo', 'COORDENADOR'), ('sup', 'SUPERVISOR')], max_length=3)),
                ('name', models.CharField(max_length=40)),
                ('timeFinish', models.TimeField(null=True)),
                ('timeStart', models.TimeField(null=True)),
                ('local', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sefit.local')),
                ('scheduler', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sefit.schedulerinfo')),
            ],
        ),
        migrations.CreateModel(
            name='DayOff',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dayOff', models.CharField(max_length=20)),
                ('start_date', models.DateField(null=True)),
                ('end_date', models.DateField(null=True)),
                ('comment', models.TextField(max_length=150, null=True)),
                ('mat', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='sefit.servidores')),
            ],
        ),
    ]
