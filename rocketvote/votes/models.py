from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings


class Voter(models.Model):
    name = models.CharField(max_length=15)

    def __str__(self):
        return self.name


class Vote(models.Model):
    title = models.CharField(max_length=50)
    result = models.CharField(max_length=20, null=True, blank=True)
    nb_choice = models.IntegerField(null=True, blank=True)
    nb_all_vote = models.IntegerField(default=0, null=True, blank=True)
    """date_created = models.DateTimeField(auto_now_add=True)"""
    """date_end = models.DateTimeField()"""
    """creator = models.ForeignKey(
        to=settings.AUTH_USER_MODEL, on_delete=models.CASCADE)"""
    """voter = models.ForeignKey(
        to=Voter, on_delete=models.CASCADE)"""

    def __str__(self):
        return self.title


class Choice(models.Model):
    description = models.CharField(max_length=30, null=True, blank=True)
    nb_vote = models.IntegerField(default=0)
    percent_vote = models.IntegerField(default=0, null=True, blank=True)
    num_id_choice = models.IntegerField(null=True, blank=True)
    voters_names = models.CharField(default="", max_length=120)
    vote = models.ForeignKey(
        to=Vote, on_delete=models.CASCADE,
        null=True, blank=True
        )

    def __str__(self):
        return self.description


