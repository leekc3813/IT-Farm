# Generated by Django 4.2.6 on 2023-11-07 06:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("farm_product", "0009_alter_farm_products_crop"),
    ]

    operations = [
        migrations.AlterField(
            model_name="farm_products",
            name="crop",
            field=models.IntegerField(default=0),
        ),
    ]
