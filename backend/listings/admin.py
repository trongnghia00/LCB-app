from django.contrib import admin
from listings.models import Listings
from .forms import ListingsForm

# Register your models here.

class ListingAdmin(admin.ModelAdmin):
    form = ListingsForm

admin.site.register(Listings, ListingAdmin)