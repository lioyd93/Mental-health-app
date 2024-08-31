from django.contrib import admin
from .models import Event, Workshop, Resource, ChatMessage, ForumPost

# Custom admin classes to improve the admin interface
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'time']  # Display these fields in the list view
    list_filter = ['date']  # Filter by date

class WorkshopAdmin(admin.ModelAdmin):
    list_display = ['title', 'date', 'time']  # Display these fields in the list view
    list_filter = ['date']  # Filter by date

class ResourceAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'link']


class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ['user', 'message']  # Display these fields in the list view
    list_filter = ['user']  # Filter by creation date

class ForumPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'category', 'created_at')
    list_filter = ['title']
    search_fields = ('title', 'content')



# Register your models here.
admin.site.register(Event, EventAdmin)
admin.site.register(Workshop, WorkshopAdmin)
admin.site.register(Resource, ResourceAdmin)
admin.site.register(ChatMessage, ChatMessageAdmin)
admin.site.register(ForumPost, ForumPostAdmin)

