from rest_framework import viewsets, permissions

from post_pet.models import Post
from post_pet.serializers import SerializerPost


class PostViewsSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = SerializerPost
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
