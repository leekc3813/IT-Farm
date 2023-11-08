from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404
from .models import Order
from .serializers import *
from users.views import AuthView

# 주문하기 
class OrderView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)
        serializer = OrderSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
# 결제하기
class OrderPayView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)

        pk = request.data.get('order_number')
        order = Order.objects.get(order_number=pk)
        
        # 결제 완료되면 0 -> 1 변경 
        if order:
            order.status = 1
            order.save()
            return Response({'message': '성공'}, status=status.HTTP_200_OK)        
        return Response({'message': '실패'}, status=status.HTTP_400_OK)
    
# 리뷰 작성
class ReviewCreateView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)
        
        product_id = request.data.get('product')
        nickname = request.data.get('nickname')

        # status = 1 (결제 완료된 주문)
        try:
            order = Order.objects.filter(nickname=nickname, product_id=product_id, status=1)
        except:
            return Response({'message': '이 상품에 대한 리뷰를 작성할 권한이 없습니다.'}, status=status.HTTP_403_FORBIDDEN)
        
        serializer = ReviewSerializer(order, data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
