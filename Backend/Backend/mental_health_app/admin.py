from django.contrib import admin
from .models import Event, Workshop, Resource, ChatRoom, ChatMessage, ForumPost, ForumCategory

# Custom admin classes to improve the admin interface
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'time')
    list_filter = ('date',)
    search_fields = ('title', 'description')

class WorkshopAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'time')
    list_filter = ('date',)
    search_fields = ('title', 'description')

class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'category', 'link')
    list_filter = ('category',)
    search_fields = ('title', 'description')

class ChatRoomAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)

class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ('user', 'room', 'message', 'created_at')
    list_filter = ('created_at', 'room')
    search_fields = ('message',)

class ForumPostAdmin(admin.ModelAdmin):
    list_display = ('title', 'user', 'category', 'created_at')
    list_filter = ('created_at', 'category')
    search_fields = ('title', 'content')

class ForumCategoryAdmin(admin.ModelAdmin):
    list_display = ('Categoryname',)
    search_fields = ('Categoryname',)

# Register your models here.
admin.site.register(Event, EventAdmin)
admin.site.register(Workshop, WorkshopAdmin)
admin.site.register(Resource, ResourceAdmin)
admin.site.register(ChatRoom, ChatRoomAdmin)
admin.site.register(ChatMessage, ChatMessageAdmin)
admin.site.register(ForumPost, ForumPostAdmin)
admin.site.register(ForumCategory, ForumCategoryAdmin)
