# Generated by Django 4.2.6 on 2023-11-03 02:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("farms", "0003_rename_eco_farms_address_detail_remove_farms_kind_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="farms",
            name="center",
            field=models.CharField(default="광주", max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name="farms",
            name="user_id",
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
