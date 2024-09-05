from django.contrib import admin
from .models import Event, Workshop, Resource, ChatMessage, ForumTopic, ForumPost, ForumCategory

# Custom admin classes to improve the admin interface
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'time']  # Display these fields in the list view
    list_filter = ['date']  # Filter by date

class WorkshopAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'time']  # Display these fields in the list view
    list_filter = ['date']  # Filter by date

class ResourceAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'link']  # Display these fields in the list view

""" class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ['user', 'message']  # Display these fields in the list view
    list_filter = ['user']  # Filter by user and creation date """

class ForumCategoryAdmin(admin.ModelAdmin):
    list_display = ['name']  # Display category name in the list view

class ForumTopicAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'created_at']  # Display these fields in the list view
    list_filter = ['category', 'created_at']  # Filter by category and creation date
    search_fields = ['title']  # Add search functionality for topics

class ForumPostAdmin(admin.ModelAdmin):
    list_display = ['topic', 'user', 'created_at']  # Display these fields in the list view
    list_filter = ['topic', 'user', 'created_at']  # Filter by topic, user, and creation date
    search_fields = ['content']  # Add search functionality for posts

# Register your models here.
admin.site.register(Event, EventAdmin)
admin.site.register(Workshop, WorkshopAdmin)
admin.site.register(Resource, ResourceAdmin)
""" admin.site.register(ChatMessage, ChatMessageAdmin) """
admin.site.register(ForumCategory, ForumCategoryAdmin)
admin.site.register(ForumTopic, ForumTopicAdmin)
admin.site.register(ForumPost, ForumPostAdmin)
