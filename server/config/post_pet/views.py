from rest_framework import viewsets, permissions, filters
from rest_framework.response import Response

from post_pet.models import PetPost
from post_pet.serializers import SerializerPost


class PostViewsSet(viewsets.ModelViewSet):
    queryset = PetPost.objects.all()
    serializer_class = SerializerPost
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def retrieve(self, request, pk=None):
        queryset = self.get_queryset()
        post = queryset.filter(id=pk).first()
        serializer = self.get_serializer(post)
        return Response(serializer.data)
