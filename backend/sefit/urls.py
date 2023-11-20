from django.urls import path

from .views import ServidoresAPIView, ServidorAPIView 
from .views import DayOffsAPIView, DayOffAPIView 
from .views import SchedulersAPIView, SchedulerAPIView 
from .views import LocalsAPIView, LocalAPIView
from .views import SchedulerWorkersAPIView, SchedulerWorkerAPIView

urlpatterns = [
    path('servidores/', ServidoresAPIView.as_view()),
    path('servidores/<int:pk>', ServidoresAPIView.as_view()),
    path('servidor/<int:pk>', ServidorAPIView.as_view()),

    path('dayOffs/', DayOffsAPIView.as_view()),
    path('dayOffs/<int:pk>', DayOffsAPIView.as_view()),
    path('dayOff/<int:pk>', DayOffAPIView.as_view()),

    path('schedulers/', SchedulersAPIView.as_view()),
    path('schedulers/<int:pk>', SchedulersAPIView.as_view()),
    path('scheduler/<int:pk>', SchedulerAPIView.as_view()),

    path('schedulersInfo/', SchedulerWorkersAPIView.as_view()),


    path('locals/', LocalsAPIView.as_view()),
    path('locals/<str:roteiro_id>', LocalsAPIView.as_view()),
    path('local/<str:roteiro_id>', LocalAPIView.as_view())
]
