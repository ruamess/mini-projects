from django.contrib.auth import get_user_model
from rest_framework import serializers

from post_pet.models import PetPost, Like, Comment


class SerializerCreator(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'image',)


class SerializerPost(serializers.ModelSerializer):
    creator = SerializerCreator()

    class Meta:
        model = PetPost
        fields = "__all__"


class SerializerLike(serializers.ModelSerializer):
    user = SerializerCreator()
    post = SerializerPost()

    class Meta:
        model = Like
        fields = "__all__"


class SerializerComment(serializers.ModelSerializer):
    user = SerializerCreator()
    post = SerializerPost()

    class Meta:
        model = Comment
        fields = "__all__"
