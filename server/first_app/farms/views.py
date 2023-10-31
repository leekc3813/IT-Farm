from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from first_app.my_settings import SECRET_KEY


class FarmView(APIView):
    def post(self, request):
        serializer = FarmSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            farm = serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)
