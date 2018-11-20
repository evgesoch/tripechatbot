from django.urls import path, include
from . import views




urlpatterns = [
    path('', views.index2, name='index2'),
    path('cities/', views.city_list),
    path('cities/<int:pk>/', views.city_detail),
    path('owners/', views.owner_list),
    path('owners/<int:pk>/', views.owner_detail),
    path('houses/', views.house_list),
    path('houses/<int:pk>/', views.house_detail),
]




