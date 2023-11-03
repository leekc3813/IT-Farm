from .models import Farm_products
from rest_framework import serializers


class FarmProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Farm_products
        fields = '__all__'
    