"""
URL configuration for Backend project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.views import PostList
from django.views import EventList
from django.views import ChatRoomList, ChatMessageList
from django.views import WorkshopList, ResourceList


# urlpatterns = [
#     path('admin/', admin.site.urls),
# ]

urlpatterns = [
    path('posts/', PostList.as_view(), name='post-list'),
     path('events/', EventList.as_view(), name='event-list'),
     path('chat-rooms/', ChatRoomList.as_view(), name='chat-room-list'),
    path('chat-messages/', ChatMessageList.as_view(), name='chat-message-list'),
     path('workshops/', WorkshopList.as_view(), name='workshop-list'),
    path('resources/', ResourceList.as_view(), name='resource-list'),
]
