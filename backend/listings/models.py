# from django.db import models
# from random import choices
from django.contrib.gis.db import models

from django.utils import timezone

class Listings(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(null=True, blank=True)
    choices_listing_type = (
        ('House', 'House'),
        ('Appartment', 'Appartment'),
        ('Office', 'Office')
    )
    listings_type = models.CharField(max_length=30, choices=choices_listing_type)
    choices_property_status = (
        ("Sale", "Sale"),
        ("Rent", "Rent")
    )
    property_status = models.CharField(max_length=30, blank=True, null=True, choices=choices_property_status)
    price = models.DecimalField(max_digits=50, decimal_places=0)
    choices_rental_frequency = (
        ("Month", "Month"),
        ("Week", "Week"),
        ("Day", "Day")
    )
    rental_frequency = models.CharField(max_length=20, blank=True, null=True, choices=choices_rental_frequency)
    rooms = models.IntegerField(blank=True, null=True)
    furnished = models.BooleanField(default=False)
    date_posted = models.DateTimeField(default=timezone.now)
    location = models.PointField(blank=True, null=True, srid=4326)

    picture1 = models.ImageField(blank=True, null=True, upload_to="pictures/%Y/%m/%d/")

    def __str__(self):
        return self.title