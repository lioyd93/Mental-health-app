from django.contrib import admin
from django.urls import path
from django.http import HttpResponse
from mental_health_app.views import (
    ChatMessageListView,
    WorkshopListView,
    ResourceList,
    EventList,
    ForumCategoryListView,
    ForumTopicListView,
    ForumPostListView,
    SignInView,  
    SignUpView   
)

def homepage(request):
    return HttpResponse("Welcome to the Mental Health App!")


urlpatterns = [
    path('api/chat-messages/', ChatMessageListView.as_view(), name='chat-message-list'),
    path('api/workshops/', WorkshopListView.as_view(), name='workshop-list'),
    path('api/resources/', ResourceList.as_view(), name='resource-list'),
    path('api/events/', EventList.as_view(), name='event-list'),
    path('api/forum/categories/', ForumCategoryListView.as_view(), name='forum-category-list'),
    path('api/forum/topics/', ForumTopicListView.as_view(), name='forum-topic-list'),
    path('api/forum/posts/', ForumPostListView.as_view(), name='forum-post-list'),
    path('api/auth/signup/', SignUpView.as_view(), name='signup'),
    path('api/auth/signin/', SignInView.as_view(), name='signin'),
    path('', homepage, name='homepage'), 
]
