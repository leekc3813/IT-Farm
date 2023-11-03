from django.urls import path
from .views import PestCreateView, PestUpdateView, PestDeleteView, PestReadView

urlpatterns = [
    path('create/', PestCreateView.as_view()),
    path('update/', PestUpdateView.as_view()),
    path('delete/', PestDeleteView.as_view()),
    path('read/', PestReadView.as_view()),
]
