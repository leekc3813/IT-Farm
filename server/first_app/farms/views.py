from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from .models import Farms
from django.shortcuts import get_object_or_404
from users.views import AuthView
from .distance import distance


class FarmCreateView(APIView):
    def post(self, request):
        auth_view = AuthView()
        response = auth_view.post(request)
        user_id = response.data.get('id') if response.status_code == 200 else response.data.get('user').get('id')
        center = distance(request.data.get('address'))
        serializer = FarmSerializer(data={**request.data, 'user_id':user_id, 'center':center})
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)

class FarmUpdateView(APIView):
    def post(self, request):
        auth_view = AuthView()
        response = auth_view.post(request)
        pk = request.data['farm_id']
        farm = get_object_or_404(Farms, pk=pk)
        user_id = response.data.get('id') if response.status_code == 200 else response.data.get('user').get('id')
        center = distance(request.data.get('address'))
        serializer = FarmSerializer(instance=farm, data={**request.data, 'user_id':user_id, 'center':center})
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)
    
class FarmDeleteView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)
        farm_id = request.data.get('farm_id')
        farm = get_object_or_404(Farms, id=farm_id)
        farm.delete()
        return Response({'message':'삭제'})

class FarmReadView(APIView):
    def post(self, request):
        auth_view = AuthView()
        response = auth_view.post(request)
        user_id = response.data.get('id') if response.status_code == 200 else response.data.get('user').get('id')
        farms = Farms.objects.filter(user_id=user_id)
        serializer = FarmSerializer(farms,many=True)
        return Response(serializer.data)