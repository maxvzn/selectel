from django.contrib.auth.models import User
from rest_framework.generics import ListAPIView
from .serializers import UserSerializer


class UserWatch(ListAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()
