from django.urls import path
from .views import FarmProductCreateView, FarmProductUpdateView, FarmProductDeleteView, FarmProductReadView

urlpatterns = [
    path('create/', FarmProductCreateView.as_view()),
    path('update/', FarmProductUpdateView.as_view()),
    path('delete/', FarmProductDeleteView.as_view()),
    path('read/', FarmProductReadView.as_view()),
]
