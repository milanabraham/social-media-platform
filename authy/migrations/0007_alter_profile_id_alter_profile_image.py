# Generated by Django 5.0.1 on 2024-02-29 10:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('authy', '0006_auto_20220211_1935'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='default.jpg', null=True, upload_to='profile_pciture'),
        ),
    ]
