from django.db.models import Count

from post_pet.models import PetPost, Tags


def get_tag_based_recommendations(user):
    user_liked_tags = Tags.objects.filter(post__like__user=user).distinct()

    recommended_posts = PetPost.objects.filter(tags__in=user_liked_tags) \
        .exclude(like__user=user) \
        .exclude(creator=user) \
        .annotate(total_likes=Count('like')) \
        .order_by('-total_likes')

    all_posts = PetPost.objects.exclude(like__user=user) \
        .exclude(creator=user) \
        .annotate(total_likes=Count('like')) \
        .order_by('-total_likes')

    return recommended_posts[:10], all_posts[:10]
