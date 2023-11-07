from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from .serializers import *
from .models import Product
from django.shortcuts import get_object_or_404
from users.views import AuthView


class ProductCreateView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)

class ProductUpdateView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)
        pk = request.data.get('product_id')
        product = get_object_or_404(Product, pk=pk)
        serializer = ProductSerializer(instance=product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)
    
class ProductDeleteView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)
        product_id = request.data.get('product_id')
        product = get_object_or_404(Product, id=product_id)
        try:
            product.delete()
            return Response({'message':'삭제'}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({'message':f'삭제 실패: {e}'}, status=status.HTTP_400_REQUEST)

class ProductReadView(APIView):
    def post(self, request):
        products = Product.objects.all
        serializer = ProductSerializer(products,many=True)
        return Response(serializer.data)
    
class ProductSearchView(APIView):
    def post(self, request):
        product_name = request.data.get('name')
        products = Product.objects.filter(name__icontains=product_name)
        serializer = ProductSerializer(products,many=True)
        return Response(serializer.data)