from django.shortcuts import render
from rest_framework import viewsets          
from .serializers import SpeechToSignSerializer      
from .models import SpeechToSign               
from url_filter.integrations.drf import DjangoFilterBackend  


class SpeechToSignView(viewsets.ModelViewSet):       
    serializer_class = SpeechToSignSerializer   
    queryset= SpeechToSign.objects.all()
    filter_backends = [DjangoFilterBackend]
    filter_fields = ['description']


    