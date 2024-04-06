from rest_framework import serializers

from post_pet.models import PetPost


class SerializerPost(serializers.ModelSerializer):
    class Meta:
        model = PetPost
        fields = "__all__"
