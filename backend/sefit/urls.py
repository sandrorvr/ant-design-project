from django.urls import path

from .views import ServidoresAPIView, ServidorAPIView 
from .views import DayOffsAPIView, DayOffAPIView 
from .views import SchedulersAPIView, SchedulerAPIView 
from .views import LocalsAPIView, LocalAPIView

urlpatterns = [
    path('servidores/', ServidoresAPIView.as_view(), name='servidores_by_mat_list'),
    path('servidores/<int:pk>', ServidoresAPIView.as_view(), name='servidores'),
    path('servidor/<int:pk>', ServidorAPIView.as_view(), name='servidores_by_mat_alt'),

    path('dayOffs/', DayOffsAPIView.as_view(), name='dayOffs_by_mat_list'),
    path('dayOffs/<int:pk>', DayOffsAPIView.as_view(), name='dayOffs'),
    path('dayOff/<int:pk>', DayOffAPIView.as_view(), name='dayOff_by_mat_alt'),

    path('schedulers/', SchedulersAPIView.as_view(), name='Scheduler_list'),
    path('schedulers/<int:pk>', SchedulersAPIView.as_view(), name='Scheduler'),
    path('scheduler/<int:pk>', SchedulerAPIView.as_view(), name='Scheduler_list_alt'),

    path('locals/', LocalsAPIView.as_view(), name='Scheduler_list'),
    path('locals/<str:roteiro_id>', LocalsAPIView.as_view(), name='Scheduler'),
    path('local/<str:roteiro_id>', LocalAPIView.as_view(), name='Scheduler')
]
