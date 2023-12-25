from collections.abc import Mapping
from typing import Any
from django import forms
from django.core.files.base import File
from django.db.models.base import Model
from django.forms.utils import ErrorList
from .models import Listings
from django.contrib.gis.geos import Point

class ListingsForm(forms.ModelForm):
    class Meta:
        model = Listings
        fields = ['title', 'description', 'listings_type', 'property_status', 'price', 'rental_frequency', 'rooms', 'furnished', 'date_posted', 'location', 'latitude', 'longitude', 'picture1']

    latitude = forms.FloatField()
    longitude = forms.FloatField()

    def clean(self):
        data = super().clean()
        latitude = data.pop('latitude')
        longitude = data.pop('longitude')
        data['location'] = Point(latitude, longitude, srid=4326)
        return data
    
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        location = self.initial.get('location')
        if isinstance(location, Point):
            self.initial['latitude'] = location.tuple[0]
            self.initial['longitude'] = location.tuple[1]
