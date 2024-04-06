from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers


class CustomUserCreateSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = get_user_model()
        fields = ('id', 'email', 'username', 'password', 'image')

    def validate(self, attrs):
        if 'image' not in attrs:
            attrs['image'] = None
        return super().validate(attrs)


class CustomUserSerializer(serializers.ModelSerializer):
    anime_ratings = serializers.SerializerMethodField()
    comments = serializers.SerializerMethodField()

    class Meta:
        model = get_user_model()
        fields = ('id', 'username', 'email', 'image', 'anime_ratings', 'comments')

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        if not self.context['request'].user.is_superuser:
            ret.pop('image', None)
        return ret