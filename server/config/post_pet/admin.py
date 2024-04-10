from django.contrib import admin

from post_pet.models import PetPost, Like, Comment, Tags

admin.site.register(PetPost)
admin.site.register(Like)
admin.site.register(Tags)
admin.site.register(Comment)
