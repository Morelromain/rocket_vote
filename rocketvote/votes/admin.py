from django.contrib import admin

from .models import Voter, Choice, Vote


admin.site.register(Voter)
admin.site.register(Choice)
admin.site.register(Vote)
