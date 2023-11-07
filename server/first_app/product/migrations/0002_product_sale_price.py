from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("product", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="product",
            name="sale_price",
            field=models.IntegerField(null=True),
        ),
    ]
