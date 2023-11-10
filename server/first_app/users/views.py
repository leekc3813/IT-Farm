import jwt
from rest_framework.views import APIView
from .serializers import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404
from first_app.my_settings import SECRET_KEY



class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_CREATED)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        if not email or not password:
            return Response({'error': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=email, password=password)
        if user:
            refresh = TokenObtainPairSerializer.get_token(user)
            access = refresh.access_token

            response = Response({'message':'로그인 성공'},status=status.HTTP_201_CREATED)
            response.set_cookie('access_token', access, httponly=True, secure=True, max_age=3600)
            response.set_cookie('refresh_token', refresh, httponly=True, secure=True, max_age=86400)
            return response
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class LogoutView(APIView):
    def post(self, request):
        user_id = request.data.get('user_id')
        user = RefreshToken.objects.filter(user_id=user_id)
        if user:
            user.delete()
            return Response({
                'message': 'Logout success'
            }, status=status.HTTP_200_OK)
        return Response({'error':'로그인 x'}, status=status.HTTP_401_UNAUTHORIZED)
    

class TestView(APIView):
    def post(self, request):
        access = request.COOKIES.get('access_token')
        refresh = request.COOKIES.get('refresh_token')
        return Response({'access':access,'refresh':refresh})