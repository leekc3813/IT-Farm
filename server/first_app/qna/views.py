from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.generics import get_object_or_404

from .models import Qna, Comment
from .serializers import QnaSerializer, CommentSerializer, CommentUpdateSerializer

from django.db.models import Q
from users.views import AuthView

class QnaCreateView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)
        serializer = QnaSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class QnaReadView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)

        qna = Qna.objects.all()
        serializer = QnaSerializer(qna, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class QnaDetailReadView(APIView):
    def get(self, request, qna_id):
        auth_view = AuthView()
        auth_view.post(request)
        # pk = request.data.get('qna_id')
        qna = Qna.objects.filter(qna_id=qna_id)
        serializer = QnaSerializer(qna, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class QnaUpdateView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)

        pk = request.data.get('qna_id')
        qna = get_object_or_404(Qna, user=request.user, qna_id=pk)
        serializer = QnaSerializer(qna, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class QnaDeleteView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)

        pk = request.data.get('qna_id')
        qna = get_object_or_404(Qna, qna_id=pk)
        try:
            qna.delete()
            return Response({'message': '삭제'}, status=status.HTTP_200_OK)
        except:
            return Response({'message': '실패'}, status=status.HTTP_400_BAD_REQUEST)

class QnaSearchView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)

        search = request.data.get('search', '')

        # 수정 필요
        if search:
            search_list = Qna.objects.filter(
                Q(subject__icontains=search) |
                Q(content__icontains=search),
            )
        else:
            search_list = Qna.objects.all()
        serializer = QnaSerializer(search_list, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

###### 댓글 #######
class CommentCreateView(APIView):
    def post(self, request):
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "성공"}, status=status.HTTP_201_CREATED)
        errors = serializer.errors
        return Response({"message": "실패", "error": errors}, status=status.HTTP_400_BAD_REQUEST)
    
class CommentReadView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)

        qna_id = request.data.get('qna')  
        comments = Comment.objects.filter(qna_id=qna_id)
        serializer = CommentSerializer(comments, many=True)
        return Response(serializer.data)

class CommentUpdateView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)

        pk = request.data.get('comment_id')
        comment = get_object_or_404(Comment, comment_id=pk)
        serializer = CommentUpdateSerializer(comment, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class CommentDeleteView(APIView):
    def post(self, request):
        auth_view = AuthView()
        auth_view.post(request)
        pk = request.data.get('comment_id')
        comment = get_object_or_404(Comment, comment_id=pk)
        if comment.is_valid():
            comment.delete()
            return Response({'message': '삭제'}, status=status.HTTP_200_OK)
        return Response({'message': '실패'}, status=status.HTTP_400_BAD_REQUEST)