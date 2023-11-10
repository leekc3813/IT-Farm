from django.urls import path
from .views import *

urlpatterns = [
    path('create/', OrderCreateView.as_view()),
    path('pay/', OrderPayView.as_view()),
    path('delete/',OrderDeleteView.as_view()),
    path('review/',ReviewCreateView.as_view()),
]
