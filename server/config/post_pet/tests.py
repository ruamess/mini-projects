from django.test import TestCase
from django.contrib.auth import get_user_model
from .models import Tags, PetPost, Like
from .utilus import get_tag_based_recommendations


class RecommendationFunctionTest(TestCase):
    def setUp(self):
        # Получаем модель пользователя
        self.User = get_user_model()

        # Создаем теги
        self.tag1 = Tags.objects.create(title='Tag1')
        self.tag2 = Tags.objects.create(title='Tag2')

        # Создаем пользователя
        self.user = self.User.objects.create_user(username='testuser', email='test@example.com',
                                                  password='testpassword')

        # Создаем посты с различными тегами
        self.post1 = PetPost.objects.create(title='Post 1', creator=self.user, tags=self.tag1)
        self.post2 = PetPost.objects.create(title='Post 2', creator=self.user, tags=self.tag2)
        self.post3 = PetPost.objects.create(title='Post 3', creator=self.user, tags=self.tag1)

        # Создаем лайки для постов
        self.like1 = Like.objects.create(user=self.user, post=self.post1)
        self.like2 = Like.objects.create(user=self.user, post=self.post2)

    def test_get_tag_based_recommendations(self):
        # Получаем рекомендации для пользователя
        recommendations, _ = get_tag_based_recommendations(self.user)

        # Проверяем, что количество рекомендованных постов соответствует ожидаемому
        self.assertEqual(len(recommendations), 1)

        # Проверяем, что в рекомендациях есть только посты с тегами, которые пользователь лайкнул
        for post in recommendations:
            self.assertIn(post.tags, self.user.like_set.values_list('post__tags', flat=True))

        # Проверяем, что рекомендуемые посты не включают посты, которые пользователь уже лайкнул
        self.assertNotIn(self.post1, recommendations)
        self.assertNotIn(self.post2, recommendations)

        # Проверяем, что рекомендуемые посты не включают посты, созданные пользователем
        self.assertNotIn(self.post3, recommendations)