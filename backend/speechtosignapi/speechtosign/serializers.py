from rest_framework import serializers
from .models import SpeechToSign

class SpeechToSignSerializer(serializers.ModelSerializer):
    class Meta:
        model = SpeechToSign
        fields = ('id', 'title', 'description')