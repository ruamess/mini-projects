# Generated by Django 5.0.4 on 2024-04-08 13:15

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0002_user_like'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='like',
            new_name='likes',
        ),
    ]
