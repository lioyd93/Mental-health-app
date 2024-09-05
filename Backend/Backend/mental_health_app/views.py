from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login
from rest_framework_simplejwt.tokens import RefreshToken
from .models import (
    Event,
    ChatMessage,
    Report,
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
        username = request.data.get('username')
        password = request.data.get('password')
        email = request.data.get('email')
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')

        if not username or not password or not email:
            return Response({'error': 'Please provide all required fields: username, email, and password.'}, status=status.HTTP_400_BAD_REQUEST)

        if User.objects.filter(username=username).exists():
            return Response({'error': 'Username already taken.'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user = User.objects.create_user(
                username=username, 
                password=password, 
                email=email,
                first_name=first_name,
                last_name=last_name
            )
            user.save()

            tokens = get_tokens_for_user(user)
            return Response({'message': 'User created successfully', 'tokens': tokens}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': f'Failed to create user: {str(e)}'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
      
    
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

class ChatMessageListView(APIView):
    # Fetch messages for a specific room

  def get_messages(request, room):
    try:
        messages = ChatMessage.objects.filter(room=room).order_by('created_at')  # Fetch messages by room
        serializer = ChatMessageSerializer(messages, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# Send a message to a room with an anonymous user

  def send_message(request):
    data = request.data
    try:
        # Save the message with the provided anonymous user and room
        message = ChatMessage.objects.create(
            user=data.get('user', 'Anonymous'),  # Use "Anonymous" as a fallback
            text=data['text'],
            room=data['room']
        )
        serializer = ChatMessageSerializer(message)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# Report an inappropriate message

  def report_message(request):
    message_id = request.data.get('message_id')
    try:
        message = ChatMessage.objects.get(id=message_id)
        # Create a new report for the message
        Report.objects.create(message=message)
        return Response({"status": "Message reported successfully"}, status=status.HTTP_200_OK)
    except ChatMessage.DoesNotExist:
        return Response({"error": "Message not found"}, status=status.HTTP_404_NOT_FOUND)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
