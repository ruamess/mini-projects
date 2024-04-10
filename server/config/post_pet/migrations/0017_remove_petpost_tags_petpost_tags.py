# Generated by Django 5.0.4 on 2024-04-09 15:55

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post_pet', '0016_tags_petpost_tags'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='petpost',
            name='tags',
        ),
        migrations.AddField(
            model_name='petpost',
            name='tags',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='post_pet.tags'),
            preserve_default=False,
        ),
    ]
