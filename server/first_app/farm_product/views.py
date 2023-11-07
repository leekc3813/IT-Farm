from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from .models import Farm_products
from django.shortcuts import get_object_or_404
from users.views import AuthView
from farms.models import Farms


class FarmProductCreateView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)
        user_id = request.data.get('user_id')
        farm_id = request.data.get('farm_id')
        unit_type = request.data.get('unit_type')
        crop = request.data.get('crop')
        if unit_type:
            crop *= 0.6
        center = Farms.objects.get(id=farm_id).center
        serializer = FarmProductSerializer(data={**request.data, 'user_id':user_id, 'center':center, 'crop':crop})
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
            pk = request.data.get('farm_product_id')
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
        farm_id = request.data.get('farm_id')
        center = request.data.get('center')
        if center:
            farm_product = Farm_products.objects.filter(center=center)
        else :    
            farm_product = Farm_products.objects.filter(farm_id=farm_id)
        serializer = FarmReadSerializer(farm_product,many=True)
        return Response(serializer.data)