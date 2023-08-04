from django.urls import path

from .views import ServidoresAPIView, ServidorAPIView 
from .views import DayOffsAPIView, DayOffAPIView 

urlpatterns = [
    path('servidores/', ServidoresAPIView.as_view(), name='servidores_by_mat_list'),
    path('servidores/<int:pk>', ServidoresAPIView.as_view(), name='servidores'),
    path('servidor/<int:pk>', ServidorAPIView.as_view(), name='servidores_by_mat_alt'),

    path('dayOffs/', DayOffsAPIView.as_view(), name='dayOffs_by_mat_list'),
    path('dayOffs/<int:pk>', DayOffsAPIView.as_view(), name='dayOffs'),
    path('dayOff/<int:pk>', DayOffAPIView.as_view(), name='dayOff_by_mat_alt')
]
