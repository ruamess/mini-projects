from rest_framework import serializers

from post_pet.models import PetPost, Like, Comment
from user_app.serializers import CustomUserSerializer


class SerializerPost(serializers.ModelSerializer):
    creator = CustomUserSerializer()

    class Meta:
        model = PetPost
        fields = "__all__"


class SerializerLike(serializers.ModelSerializer):
    user = CustomUserSerializer()
    post = SerializerPost()

    class Meta:
        model = Like
        fields = "__all__"


class SerializerComment(serializers.ModelSerializer):
    user = CustomUserSerializer()
    post = SerializerPost()

    class Meta:
        model = Comment
        fields = "__all__"
