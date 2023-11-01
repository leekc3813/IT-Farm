from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from .models import Farm_products
from django.shortcuts import get_object_or_404
from users.views import AuthView


class FarmProductCreateView(APIView):
    def post(self, request):
        auth_view = AuthView()
        response = auth_view.post(request)
        serializer = FarmProductSerializer(data={**request.data, 'user_id':response.data.get('user')['id']})
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)

class FarmProductUpdateView(APIView):
    def post(self, request):
        pk = request.data['farm_id']
        farm_product = get_object_or_404(Farm_products, pk=pk)
        serializer = FarmProductSerializer(instance=farm_product, data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)
    
class FarmProductDeleteView(APIView):
    def post(self, request):
        farm_id = request.data.get('farm_id')
        farm_product = get_object_or_404(Farm_products, id=farm_id)
        farm_product.delete()
        return Response({'message':'삭제'})

class FarmProductReadView(APIView):
    def post(self, request):
        auth_view = AuthView()
        response = auth_view.post(request)
        user_id = response.data.get('user')['id']
        farm_product = Farm_products.objects.filter(user_id=user_id)
        serializer = FarmProductSerializer(farm_product,many=True)
        return Response(serializer.data)