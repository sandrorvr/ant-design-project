from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status
import io

from .serializers import ServidoresSerializers, DayOffSerializers, SchedulerSerializers, \
                         LocalSerializers, SchedulerWorkerSerializers
from .models import Servidores, DayOff, SchedulerWorker, Local, Scheduler

#-----------------------------------------------------

class ServidoresAPIView(generics.ListCreateAPIView):
    queryset = Servidores.objects.all()
    serializer_class = ServidoresSerializers
    
class ServidorAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Servidores.objects.all()
    serializer_class = ServidoresSerializers


#-----------------------------------------------------

#class DayOffsAPIView(generics.ListCreateAPIView):
#   queryset = DayOff.objects.all().order_by('-pk')
#    serializer_class = DayOffSerializers

class DayOffsAPIView(APIView):
    def getAttrServidor(self, mat):
        return Servidores.objects.get(mat=int(mat)).name

    def get(self, request):
        queryset = DayOff.objects.all().order_by('-pk')
        serializer = DayOffSerializers(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = DayOffSerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            name_wk = self.getAttrServidor(request.data['mat'])
            return Response(name_wk)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class DayOffAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DayOff.objects.all()
    serializer_class = DayOffSerializers()

#-----------------------------------------------------

class SchedulerWorkersAPIView(generics.ListCreateAPIView):
    queryset = SchedulerWorker.objects.all()
    serializer_class = SchedulerWorkerSerializers
    
    
class SchedulerWorkerAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SchedulerWorker.objects.all()
    serializer_class = SchedulerWorkerSerializers

#-----------------------------------------------------

class LocalsAPIView(generics.ListCreateAPIView):
    lookup_field = 'roteiro_id'
    queryset = Local.objects.all()
    serializer_class = LocalSerializers

class LocalAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = 'roteiro_id'
    queryset = Local.objects.all()
    serializer_class = LocalSerializers

#-----------------------------------------------------

class SchedulersAPIView(generics.ListCreateAPIView):
    queryset = Scheduler.objects.all()
    serializer_class = SchedulerSerializers
    
    
class SchedulerAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Scheduler.objects.all()
    serializer_class = SchedulerSerializers