from django import forms
from django.forms import ModelForm

from votes.models import Vote, Voter, Choice


class VoteForm(ModelForm):
    class Meta:
        model = Vote
        fields = ['title', 'result', 'nb_choice']
        """read_only_fields = ['result', 'nb_all_vote', 'choice']"""
        widgets = {
            'title': forms.TextInput(attrs={'class': 'form_votea'}),
        }

class ChoiceForm(ModelForm):
    class Meta:
        model = Choice
        fields = ['description']   
        widgets = {
            'description': forms.TextInput(attrs={'class': 'form_voteb'}),
        }

    def clean_rowname(self):
        return self.cleaned_data['rowname'] or None
    


class VoterForm(ModelForm):
    class Meta:
        model = Voter
        fields = ['name']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form_votec'}),
        }
