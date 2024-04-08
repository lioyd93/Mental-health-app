from django.db import models
from django.contrib.auth.models import User

# Forum Category model
class ForumCategory(models.Model):
    Categoryname = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Forum Post model
class ForumPost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.ForeignKey(ForumCategory, on_delete=models.CASCADE)
    title = models.CharField(max_length=200)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

# Event model
class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return self.title

# Chat Room model
class ChatRoom(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

# Chat Message model
class ChatMessage(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    room = models.ForeignKey(ChatRoom, on_delete=models.CASCADE)
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'{self.user.username} in {self.room.name}: {self.message}'

# Workshop model
class Workshop(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateField()
    time = models.TimeField()

    def __str__(self):
        return self.title

# Resource model
class Resource(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    category = models.CharField(max_length=100)  # Example: Mental Health, Stress Management, etc.
    link = models.URLField()

    def __str__(self):
        return self.title



