
from django.contrib import admin
from django.http import HttpResponse
from django.urls import path
from mental_health_app.views import ChatRoomList, ChatMessageListView
from mental_health_app.views import WorkshopListView, ResourceList,PostList ,EventList

def homepage(request):
    return HttpResponse("Welcome to the Mental Health App!")


urlpatterns = [
    path('api/chat-messages/', ChatMessageListView.as_view(), name='chat-message-list'),
    path('api/workshops/', WorkshopListView.as_view(), name='workshop-list'),
    path('api/resources/', ResourceList.as_view(), name='resource-list'),
    path('api/chatrooms/', ChatRoomList.as_view(), name='chatroom-list'),
    path('api/posts/', PostList.as_view(), name='post-list'),
    path('api/events/', EventList.as_view(), name='event-list'),
    path('', homepage, name='homepage'), 

]
