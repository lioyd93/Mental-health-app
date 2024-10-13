import os
from django.core.asgi import get_asgi_application
from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'your_project_name.settings')

application = ProtocolTypeRouter({
    "http": get_asgi_application(),
    # Define WebSocket handling here later when using channels.routing
    "websocket": AuthMiddlewareStack(
        URLRouter(
            # Your routing configurations for WebSocket
        )
    ),
})
