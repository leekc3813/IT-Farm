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
        auth_view.post(request)
        user_id = request.data.get('user_id')
        serializer = FarmProductSerializer(data={**request.data, 'user_id':user_id})
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)

class FarmProductUpdateView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)
        try:
            pk = request.data['farm_product_id']
            farm_product = get_object_or_404(Farm_products, pk=pk)
            farm_product.state = '등록완료'
            farm_product.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'message':f'실패: {e}'}, status=status.HTTP_400_BAD_REQUEST)
    
class FarmProductDeleteView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)
        farm_product_id = request.data.get('farm_product_id')
        farm_product = get_object_or_404(Farm_products, id=farm_product_id)
        try:
            farm_product.delete()
            return Response({'message':'삭제'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message':f'삭제 실패: {e}'}, status=status.HTTP_400_BAD_REQUEST)

class FarmProductReadView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)
        user_id = request.data.get('user_id')
        farm_product = Farm_products.objects.filter(user_id=user_id)
        serializer = FarmProductSerializer(farm_product,many=True)
        return Response(serializer.data)