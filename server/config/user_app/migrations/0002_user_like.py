# Generated by Django 5.0.4 on 2024-04-08 13:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='like',
            field=models.PositiveIntegerField(default=0),
        ),
    ]