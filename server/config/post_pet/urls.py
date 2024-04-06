from django.urls import path, include
from rest_framework.routers import DefaultRouter

from post_pet.views import PostViewsSet

router = DefaultRouter()

router.register(r'post', PostViewsSet)

urlpatterns = [
    path('', include(router.urls)),
]
