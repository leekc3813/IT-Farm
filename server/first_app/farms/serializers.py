from .models import farms
from rest_framework import serializers


class FarmSerializer(serializers.ModelSerializer):
    class Meta:
        model = farms
        fields = '__all__'
    