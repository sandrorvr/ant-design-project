# Generated by Django 4.2.7 on 2023-12-26 15:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sefit', '0008_alter_schedulerworker_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='schedulerworker',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
