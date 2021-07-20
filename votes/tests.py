from django.test import TestCase
from django.urls import reverse


class RocketVoteTest(TestCase):

    def setUp(self):
        self.fake_url_index = '/fake_index'
        self.true_url_index = reverse("accueil")

    def test_bad_url_index(self):
        response = self.client.get(self.fake_url_index)
        assert response.status_code in [404]

    def test_happy_url_index(self):
        response = self.client.get(self.true_url_index)
        assert response.status_code in [200]

    def test_happy_url_create_vote(self):
        response = self.client.get(reverse("create_vote"))
        assert response.status_code in [200]
