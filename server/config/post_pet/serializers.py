from rest_framework import serializers

from post_pet.models import PetPost, Like, Comment


class SerializerPost(serializers.ModelSerializer):
    class Meta:
        model = PetPost
        fields = "__all__"


class SerializerLike(serializers.ModelSerializer):
    class Meta:
        model = Like
        fields = "__all__"


class SerializerComment(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = "__all__"
