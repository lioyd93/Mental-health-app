from rest_framework import serializers
from .models import Post
from .models import Event
from rest_framework import serializers
from .models import ChatRoom, ChatMessage
from django.contrib.auth.models import User
from .models import Workshop, Resource


class WorkshopSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workshop
        fields = ['id', 'title', 'description', 'date', 'time']

class ResourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Resource
        fields = ['id', 'title', 'description', 'category', 'link']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class ChatRoomSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatRoom
        fields = ['id', 'name']

class ChatMessageSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    room = ChatRoomSerializer()

    class Meta:
        model = ChatMessage
        fields = ['id', 'user', 'room', 'message', 'created_at']

class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ['id', 'title', 'content', 'created_at']
class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['id', 'title', 'description', 'date', 'time']