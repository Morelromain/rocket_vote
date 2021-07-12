from django.urls import path, include

from votes import views


urlpatterns = [
    path('', views.accueil, name="accueil"),
    path('create_vote', views.create_vote, name="create_vote"),
    path('recap_vote/<int:id_vote>', views.recap_vote, name="recap_vote"),
    path('vote/<int:id_vote>', views.vote, name="vote"),
    path('votefinish/<int:id_vote>', views.votefinish, name="votefinish"),
]
