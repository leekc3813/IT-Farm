# Generated by Django 4.2.6 on 2023-10-30 00:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("users", "0005_user_address_user_address_detail_user_mail_number_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="user",
            name="user_type",
            field=models.CharField(default="buyer", max_length=100),
        ),
    ]