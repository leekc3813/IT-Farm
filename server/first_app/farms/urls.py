from django.urls import path
from .views import FarmView

urlpatterns = [
    path('save/', FarmView.as_view(), name='save'),
]
