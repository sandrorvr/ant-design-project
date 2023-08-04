from rest_framework import generics

from .serializers import ServidoresSerializers, DayOffSerializers
from .models import Servidores, DayOff

#-----------------------------------------------------

class ServidoresAPIView(generics.ListCreateAPIView):
    queryset = Servidores.objects.all()
    serializer_class = ServidoresSerializers
    
class ServidorAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Servidores.objects.all()
    serializer_class = ServidoresSerializers


#-----------------------------------------------------

class DayOffsAPIView(generics.ListCreateAPIView):
    queryset = DayOff.objects.all()
    serializer_class = DayOffSerializers
    
class DayOffAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = DayOff.objects.all()
    serializer_class = DayOffSerializers

