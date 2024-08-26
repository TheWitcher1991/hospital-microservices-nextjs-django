# Generated by Django 4.2.15 on 2024-08-26 20:20

import django.contrib.auth.models
from django.db import migrations
import django.db.models.manager


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_session_alter_user_managers_remove_user_type_and_more'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='patientcart',
            managers=[
                ('drafts', django.db.models.manager.Manager()),
            ],
        ),
        migrations.AlterModelManagers(
            name='service',
            managers=[
                ('free', django.db.models.manager.Manager()),
            ],
        ),
        migrations.AlterModelManagers(
            name='user',
            managers=[
                ('patients', django.db.models.manager.Manager()),
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
    ]
