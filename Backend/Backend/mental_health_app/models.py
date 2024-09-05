from django.db import models

# Forum Category model
class ForumCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class ForumTopic(models.Model):
    title = models.CharField(max_length=255)
    category = models.ForeignKey(ForumCategory, on_delete=models.CASCADE, related_name='topics')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class ForumPost(models.Model):
    topic = models.ForeignKey(ForumTopic, on_delete=models.CASCADE, default=1)  # Assuming 1 is a valid topic ID
    user = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Post by {self.user} on {self.topic.title}"

# Event model
class Event(models.Model):
    title = models.CharField(max_length=250)
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return self.title

def create_default_rooms():
    rooms = ["general", "anxiety-room", "stress-room", "depression-room"]
    for room_name in rooms:
        ChatRoom.objects.get_or_create(name=room_name)

# Function to return the default room, which is "general"
def get_general_room_id():
    return ChatRoom.objects.get_or_create(name="general")[0].id

class ChatRoom(models.Model):
    """Model to represent a chat room."""
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name
    
class ChatMessage(models.Model):
    """Model to represent chat messages within a room."""
    user = models.CharField(max_length=100)
    text = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    # Assign the default room as "general" initially
    room = models.ForeignKey(ChatRoom, related_name='messages', on_delete=models.CASCADE, default=get_general_room_id)

    def __str__(self):
        return f'Message from {self.user} in {self.room.name}'   


class Report(models.Model):
    """
    Model to represent a report made against a message.
    """
    message = models.ForeignKey(ChatMessage, on_delete=models.CASCADE)
    reported_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Report for message {self.message.id}'

# Workshop model
class Workshop(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField(default='Default description')
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return self.title

# Resource model
class Resource(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    link = models.URLField()

    def __str__(self):
        return self.title



