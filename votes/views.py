from django.shortcuts import render, redirect, reverse, get_object_or_404

from votes.forms import VoterForm, VoteForm, ChoiceForm
from votes.models import Vote, Voter, Choice

from random import randint



def accueil(request):
    """ accueil page """

    return render(request, 'accueil.html', locals())


def create_vote(request):
    """ create_vote page """

    def manage_choice(request, id_vote, desc, num_id_choice):
        choice_form = ChoiceForm(request.POST)
        nb = 0
        if choice_form.is_valid() and desc != "":
            nb += 1
            choice_modif = choice_form.save(False)
            choice_modif.description = desc
            choice_modif.vote = Vote.objects.get(pk=id_vote)
            choice_modif.num_id_choice = num_id_choice
            choice_modif.save()
        return nb

    if request.method == "GET":
        vote_form = VoteForm()
        choice_form = ChoiceForm
        return render(request, 'create_vote.html', locals())
        

    elif request.method == "POST":
        vote_form = VoteForm(request.POST)
        list_desc = request.POST.getlist('description')
        if vote_form.is_valid():
            vote_modif = vote_form.save(False)
            vote_modif.result = "resultat a faire"
            code = 999998
            while Vote.objects.filter(id=code).first() is not None:
                code = randint(100000, 999999)
            vote_modif.id = code
            vote_modif.nb_choice = 0
            vote_modif.save()
            nba = 0
            for num_id_choice, desc in enumerate(list_desc):
                nb = manage_choice(request, vote_modif.id, desc, num_id_choice)
                vote_modif.nb_choice += nb
            vote_modif.save()
            
        return redirect(reverse('recap_vote', kwargs={"id_vote": vote_modif.id}))




def recap_vote(request, id_vote):
    """ recap vote page """

    if request.method == "GET":
        return render(request, 'recap_vote.html', locals())

    elif request.method == "POST":
        return redirect(reverse('vote', kwargs={"id_vote": id_vote}))


def vote(request, id_vote):
    """ vote page """

    if request.method == "GET":
        my_vote = Vote.objects.get(pk=id_vote)
        choices = Choice.objects.filter(vote=id_vote)
        voter_form = VoterForm()
        return render(request, 'vote.html', locals())
        
    elif request.method == "POST":
        my_vote = Vote.objects.get(pk=id_vote)
        choices = Choice.objects.filter(vote=id_vote)
        note = request.POST.get('tabs')
        choice_form = ChoiceForm(instance=choices[int(note)])
        voter_form = VoterForm(request.POST)
        if voter_form.is_valid():
            voter_modif = voter_form.save(False)
            voter_modif.save()
        choice_modif = choice_form.save(False)
        choice_modif.description == choices[int(note)].description
        choice_modif.nb_vote += 1
        choice_modif.percent_vote = choice_modif.nb_vote*100
        if len(choice_modif.voters_names) < 100:
            choice_modif.voters_names += voter_modif.name + ", "
        elif "...." not in choice_modif.voters_names:
            choice_modif.voters_names += "...."
        choice_modif.save()
        my_vote.nb_all_vote += 1
        my_vote.save()
        return redirect(reverse('votefinish', kwargs={"id_vote": id_vote}))


def votefinish(request, id_vote):
    """ create_vote page """

    if request.method == "GET":
        my_vote = Vote.objects.get(pk=id_vote)
        choices = Choice.objects.filter(vote=id_vote)
        return render(request, 'votefinish.html', locals())
