from django.urls import path
from .views import *

urlpatterns = [
    path('', OrderView.as_view()),
    path('pay/', OrderPayView.as_view()),
    path('review/',ReviewCreateView.as_view()),
]
