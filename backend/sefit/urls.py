from django.urls import path

from .views import ServidoresAPIView, ServidorAPIView 
from .views import DayOffsAPIView, DayOffAPIView 
from .views import SchedulersAPIView, SchedulerAPIView 
from .views import LocalsAPIView, LocalAPIView
from .views import SchedulerWorkersAPIView, SchedulerWorkerAPIView
from .views import SchedulerTypesAPIView, SchedulerTypeAPIView

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

    path('SchedulerWorkers/', SchedulerWorkersAPIView.as_view()),
    path('SchedulerWorkers/<int:pk>', SchedulerWorkersAPIView.as_view()),
    path('SchedulerWorker/<int:pk>', SchedulerWorkerAPIView.as_view()),

    path('SchedulerTypes/', SchedulerTypesAPIView.as_view()),
    path('SchedulerTypes/<int:pk>', SchedulerTypesAPIView.as_view()),

    path('locals/', LocalsAPIView.as_view()),
    path('locals/<int:pk>', LocalsAPIView.as_view()),
    path('local/<int:pk>', LocalAPIView.as_view())
]
