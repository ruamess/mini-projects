from django.contrib import admin

from post_pet.models import PetPost, Like, Comment

admin.site.register(PetPost)
admin.site.register(Like)
admin.site.register(Comment)
