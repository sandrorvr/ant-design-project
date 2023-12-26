from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework import status
import io

from .serializers import ServidoresSerializers, DayOffSerializers, SchedulerSerializers, \
                         SchedulerLocalSerializers, SchedulerWorkerSerializers, SchedulerTypeSerializers
from .models import Servidores, DayOff, SchedulerWorker, SchedulerLocal, Scheduler, SchedulerType

#-----------------------------------------------------

class ServidoresAPIView(generics.ListCreateAPIView):
    queryset = Servidores.objects.all()
    serializer_class = ServidoresSerializers

    def get_queryset(self):
        queryset = Servidores.objects.all()
        params = dict(self.request.query_params)
        for item in params.items():
            param = {item[0]:item[1][0]}
            queryset = queryset.filter(**param)
        return queryset
    
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

#class SchedulerWorkersAPIView(generics.ListCreateAPIView):
#    queryset = SchedulerWorker.objects.all()
#    serializer_class = SchedulerWorkerSerializers
class SchedulerWorkersAPIView(APIView):
    def get(self, request):
        queryset = SchedulerWorker.objects.all()
        serializer = SchedulerWorkerSerializers(queryset, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = SchedulerWorkerSerializers(data=request.data, many=True)
        if serializer.is_valid():
            serializer.save()
            return Response('ok')
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class SchedulerWorkerAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SchedulerWorker.objects.all()
    serializer_class = SchedulerWorkerSerializers

#-----------------------------------------------------

class LocalsAPIView(generics.ListCreateAPIView):
    queryset = SchedulerLocal.objects.all()
    serializer_class = SchedulerLocalSerializers

    def get_queryset(self):
        queryset = SchedulerLocal.objects.order_by('area')
        params = dict(self.request.query_params)
        for item in params.items():
            param = {item[0]:item[1][0]}
            queryset = queryset.filter(**param)
        return queryset

class LocalAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SchedulerLocal.objects.all()
    serializer_class = SchedulerLocalSerializers

#-----------------------------------------------------

class SchedulersAPIView(generics.ListCreateAPIView):
    queryset = Scheduler.objects.all()
    serializer_class = SchedulerSerializers

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        print(dir(serializer.id))
        return Response('ok')
    
    
class SchedulerAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Scheduler.objects.all()
    serializer_class = SchedulerSerializers

#-----------------------------------------------------

class SchedulerTypesAPIView(generics.ListCreateAPIView):
    queryset = SchedulerType.objects.all()
    serializer_class = SchedulerTypeSerializers
    
    
class SchedulerTypeAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = SchedulerType.objects.all()
    serializer_class = SchedulerTypeSerializers