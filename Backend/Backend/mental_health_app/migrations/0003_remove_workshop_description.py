# Generated by Django 5.0.3 on 2024-08-31 15:57

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mental_health_app', '0002_post'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='workshop',
            name='description',
        ),
    ]
