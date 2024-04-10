from rest_framework import viewsets, status
from rest_framework.response import Response


from post_pet.models import PetPost, Like, Comment
from post_pet.serializers import SerializerPost, SerializerLike, SerializerComment


class PostViewsSet(viewsets.ModelViewSet):
    queryset = PetPost.objects.all()
    serializer_class = SerializerPost

    def retrieve(self, request, pk=None):
        queryset = self.get_queryset()
        post = queryset.filter(id=pk).first()
        if post is None:
            return Response({"error": "Запись не найдена"}, status=status.HTTP_404_NOT_FOUND)
        post.views += 1
        post.save()

        serializer = self.get_serializer(post)
        return Response(serializer.data)


class LikeViewsSet(viewsets.ModelViewSet):
    queryset = Like.objects.all()
    serializer_class = SerializerLike


class CommentViewsSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = SerializerComment


