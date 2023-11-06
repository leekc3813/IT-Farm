# Generated by Django 4.2.6 on 2023-11-06 05:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("farms", "0004_farms_center_farms_user_id"),
    ]

    operations = [
        migrations.AddField(
            model_name="farms",
            name="latitude",
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="farms",
            name="longitude",
            field=models.FloatField(default=0),
            preserve_default=False,
        ),
    ]