from django.urls import path
from .views import FarmSaveView, FarmUpdateView, FarmDeleteView, FarmListView

urlpatterns = [
    path('save/', FarmSaveView.as_view()),
    path('update/', FarmUpdateView.as_view()),
    path('delete/', FarmDeleteView.as_view()),
    path('list/', FarmListView.as_view()),
]
