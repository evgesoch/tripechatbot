from django.urls import path, include
from rest_framework.urlpatterns import format_suffix_patterns
from . import views




urlpatterns = [
    path('', views.index2, name='index2'),
    path('cities/', views.CityList.as_view()),
    path('cities/<int:pk>/', views.CityDetail.as_view()),
    path('owners/', views.OwnerList.as_view()),
    path('owners/<int:pk>/', views.OwnerDetail.as_view()),
    path('houses/', views.HouseList.as_view()),
    path('houses/<int:pk>/', views.HouseDetail.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)


