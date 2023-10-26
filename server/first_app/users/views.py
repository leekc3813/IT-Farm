from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from django.contrib.auth import authenticate


class RegisterView(APIView):
    def post(self, request):
        print('호출')
        nickname = request.data.get('nickName')
        email = request.data.get('email')
        password = request.data.get('password')
        if not nickname or not email or not password:
            return Response({'error': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.create_user(
                username=nickname, email=email, password=password)
        except Exception as e:
            return Response({'error': str(e)}, status=status.HTTP_400_BAD_REQUEST)

        return Response({"message":"성공"}, status=status.HTTP_201_CREATED)


class LoginView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')
        if not email or not password:
            return Response({'error': 'Please provide both email and password'}, status=status.HTTP_400_BAD_REQUEST)

        user = authenticate(username=email, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            }, status=status.HTTP_200_OK)
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)
