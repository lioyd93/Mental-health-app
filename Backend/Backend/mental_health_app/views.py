from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.tokens import RefreshToken
from .models import (
    Event,
    ChatMessage,
    Workshop,
    Resource,
    ForumCategory,
    ForumTopic,
    ForumPost
)
from .Serializers import (
    EventSerializer,
    ChatMessageSerializer,
    WorkshopSerializer,
    ResourceSerializer,
    ForumCategorySerializer,
    ForumTopicSerializer,
    ForumPostSerializer
)

# Utility function to generate tokens for a user
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class SignUpView(APIView):
    def post(self, request):
        # Handle POST request for user sign-up
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        
        if not username or not password or not email:
            return Response({'error': 'All fields are required: username, password, email'}, status=status.HTTP_400_BAD_REQUEST)
        
        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username is already taken'}, status=status.HTTP_400_BAD_REQUEST)
        
        user = User.objects.create_user(username=username, password=password, email=email)
        user.save()
        
        return Response({'message': 'User created successfully'}, status=status.HTTP_201_CREATED)
    
    
class SignInView(APIView):
    def post(self, request):
        # Extract data from the request
        username = request.data.get('username')
        password = request.data.get('password')

        # Validate that both username and password are provided
        if not username or not password:
            return Response({'error': 'Please provide both username and password.'}, status=status.HTTP_400_BAD_REQUEST)

        # Authenticate the user
        user = authenticate(request, username=username, password=password)
        if user is not None:
            # Generate JWT tokens for the authenticated user
            tokens = get_tokens_for_user(user)
            return Response({'message': 'Login successful', 'tokens': tokens}, status=status.HTTP_200_OK)
        else:
            # Return an error if authentication fails
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)

# Additional views for workshops, resources, etc.
class WorkshopListView(APIView):
    def get(self, request):
        workshops = Workshop.objects.all()
        serializer = WorkshopSerializer(workshops, many=True)
        return Response(serializer.data)

class ResourceList(APIView):
    def get(self, request):
        resources = Resource.objects.all()
        serializer = ResourceSerializer(resources, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ResourceSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ChatMessageListView(APIView):
    def get(self, request):
        chat_messages = ChatMessage.objects.all()
        serializer = ChatMessageSerializer(chat_messages, many=True)
        return Response(serializer.data)

class EventList(APIView):
    def get(self, request):
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)    

class ForumCategoryListView(APIView):
    def get(self, request):
        categories = ForumCategory.objects.all()
        serializer = ForumCategorySerializer(categories, many=True)
        return Response(serializer.data)

class ForumTopicListView(APIView):
    def get(self, request):
        topics = ForumTopic.objects.all()
        serializer = ForumTopicSerializer(topics, many=True)
        return Response(serializer.data)

class ForumPostListView(APIView):
    def get(self, request):
        posts = ForumPost.objects.all()
        serializer = ForumPostSerializer(posts, many=True)
        return Response(serializer.data)
