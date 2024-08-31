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

# Chat Message model
class ChatMessage(models.Model):
    user = models.CharField(max_length=100)
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user}: {self.message[:20]}..."

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



