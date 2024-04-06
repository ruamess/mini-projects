from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission

from user_app.manager import user_avatar_path, CustomUserManager


class User(AbstractUser):
    email = models.EmailField("Email", unique=True)
    created_at = models.DateTimeField('Created', auto_now_add=True)
    username = models.CharField("User Name", max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to=user_avatar_path, blank=True, null=True)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username', ]

    objects = CustomUserManager()

    groups = models.ManyToManyField(Group, related_name="userapp_users")
    user_permissions = models.ManyToManyField(Permission, related_name="userapp_users")

    class Meta:
        permissions = [
            ("can_change_user_permissions", "Can change user permissions"),
        ]
        default_permissions = ()

    def __str__(self):
        return f"{self.email}-{self.pk}"
