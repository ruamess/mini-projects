# Generated by Django 5.0.4 on 2024-04-10 13:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_app', '0004_user_posts'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(blank=True, max_length=255, null=True, unique=True, verbose_name='User Name'),
        ),
    ]