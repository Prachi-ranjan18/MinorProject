from django.contrib import admin
from .models import SpeechToSign

# Register your models here.

class SpeechToSignAdmin(admin.ModelAdmin):  
    list_display = ('title', 'description')

    # Register your models here.
admin.site.register(SpeechToSign, SpeechToSignAdmin)