from .serializers import ListingSerializer
from listings.models import Listings
from rest_framework import generics

class ListingList(generics.ListAPIView):
    queryset = Listings.objects.all()
    serializer_class = ListingSerializer