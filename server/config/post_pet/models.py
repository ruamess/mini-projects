from django.db import models

from user_app.models import User


class Post(models.Model):
    title = models.CharField(max_length=255)
    headers = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='uploads/')
    creator = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title