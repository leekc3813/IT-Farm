from django.db import models

class Farm_products(models.Model):
    eco = models.CharField(max_length=100,null=False)
    kind = models.CharField(max_length=100,null=False)
    crop = models.IntegerField(default=0,null=False)
    unit_type = models.BooleanField(default=True)