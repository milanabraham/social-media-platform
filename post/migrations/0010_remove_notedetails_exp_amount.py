# Generated by Django 3.1 on 2024-04-12 05:17

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0009_notedetails_preview_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='notedetails',
            name='exp_amount',
        ),
    ]