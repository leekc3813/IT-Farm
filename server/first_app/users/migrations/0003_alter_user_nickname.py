# Generated by Django 4.2.6 on 2023-10-27 10:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0002_user_nickname"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="nickname",
            field=models.CharField(max_length=100, unique=True),
        ),
    ]