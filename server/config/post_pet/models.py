from django.db import models

from user_app.models import User


class Like(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='likes_received')
    post = models.ForeignKey('PetPost', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def save(self, *args, **kwargs):
        super(Like, self).save(*args, **kwargs)
        self.update_user_likes_count()

    def delete(self, *args, **kwargs):
        super(Like, self).delete(*args, **kwargs)
        self.update_user_likes_count()

    def update_user_likes_count(self):
        user = self.post.creator
        user.likes = Like.objects.filter(post__creator=user).count()
        user.save()


class PetPost(models.Model):
    title = models.CharField(max_length=255)
    headers = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.ImageField(upload_to='image/')
    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='posts_received')
    views = models.PositiveIntegerField(default=0)
    count_comments = models.PositiveIntegerField(default=0)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.update_creator_posts_count()

    def delete(self, *args, **kwargs):
        super().delete(*args, **kwargs)
        self.update_creator_posts_count()

    def update_creator_posts_count(self):
        self.creator.posts = self.creator.posts_received.count()
        self.creator.save()

    def update_comments_count(self):
        self.count_comments = self.comments_received.count()
        self.save()

    def __str__(self):
        return f'{self.title}-{self.pk}'


class Comment(models.Model):
    content = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post = models.ForeignKey('PetPost', on_delete=models.CASCADE, related_name='comments_received')
    like = models.PositiveIntegerField(default=0)

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.post.update_comments_count()

    def delete(self, *args, **kwargs):
        super().delete(*args, **kwargs)
        self.post.update_comments_count()

    def __str__(self):
        return self.user.username
