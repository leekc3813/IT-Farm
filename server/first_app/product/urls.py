from django.urls import path
from .views import ProductCreateView, ProductUpdateView, ProductDeleteView, ProductReadView, ProductSearchView

urlpatterns = [
    path('create/', ProductCreateView.as_view()),
    path('update/', ProductUpdateView.as_view()),
    path('delete/', ProductDeleteView.as_view()),
    path('read/', ProductReadView.as_view()),
    path('search/', ProductSearchView.as_view()),
]
