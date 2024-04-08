from django.urls import path, include
from rest_framework.routers import DefaultRouter

from post_pet.views import PostViewsSet, LikeViewsSet, CommentViewsSet

router = DefaultRouter()

router.register(r'post', PostViewsSet)
router.register(r'like', LikeViewsSet)
router.register(r'comment', CommentViewsSet)

urlpatterns = [
    path('', include(router.urls)),
]
