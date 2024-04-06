from rest_framework import serializers

from post_pet.models import Post


class SerializerPost(serializers.Serializer):
    class Meta:
        model = Post
        fields = "__all__"
