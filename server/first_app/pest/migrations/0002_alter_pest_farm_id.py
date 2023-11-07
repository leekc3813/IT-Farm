from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("farms", "0005_farms_latitude_farms_longitude"),
        ("pest", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="pest",
            name="farm_id",
            field=models.ForeignKey(
                db_column="farm_id",
                on_delete=django.db.models.deletion.CASCADE,
                to="farms.farms",
            ),
        ),
    ]
