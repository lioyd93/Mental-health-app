from django.test import TestCase
from django.contrib.auth.models import User
from .models import Event, Workshop, Resource
from rest_framework.test import APIClient
from rest_framework import status
from django.urls import reverse

class ModelTestCase(TestCase):
    """This class defines the test suite for the event, workshop, and resource models."""

    def setUp(self):
        """Define the test client and other test variables."""
        user = User.objects.create(username="testuser")
        
        self.event_title = "Understanding Anxiety"
        self.event = Event(title=self.event_title, description="Workshop on anxiety", date="2024-05-15", time="14:00")

        self.workshop_title = "Stress Management Workshop"
        self.workshop = Workshop(title=self.workshop_title, description="Learn how to manage stress", date="2024-06-20", time="16:00")

        self.resource_title = "Mindfulness Guide"
        self.resource = Resource(title=self.resource_title, description="A comprehensive guide to mindfulness", category="Mindfulness", link="http://example.com")

    def test_model_can_create_an_event(self):
        """Test the event model can create an event."""
        old_count = Event.objects.count()
        self.event.save()
        new_count = Event.objects.count()
        self.assertNotEqual(old_count, new_count)

    def test_model_can_create_a_workshop(self):
        """Test the workshop model can create a workshop."""
        old_count = Workshop.objects.count()
        self.workshop.save()
        new_count = Workshop.objects.count()
        self.assertNotEqual(old_count, new_count)

    def test_model_can_create_a_resource(self):
        """Test the resource model can create a resource."""
        old_count = Resource.objects.count()
        self.resource.save()
        new_count = Resource.objects.count()
        self.assertNotEqual(old_count, new_count)

class ViewTestCase(TestCase):
    """Test suite for the api views."""

    def setUp(self):
        """Define the test client and other test variables."""
        self.client = APIClient()
        self.event_data = {'title': 'New Event', 'description': 'A new event', 'date': '2024-07-01', 'time': '10:00'}
        self.event_response = self.client.post(
            reverse('create_event'),
            self.event_data,
            format="json")

    def test_api_can_create_an_event(self):
        """Test the api has event creation capability."""
        self.assertEqual(self.event_response.status_code, status.HTTP_201_CREATED)

    # Similar tests can be created for Workshop and Resource creation

