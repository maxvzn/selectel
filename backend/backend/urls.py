from django.contrib import admin
from django.urls import path
from .views import UserWatch

urlpatterns = [
    path('admin/', admin.site.urls),
    path('watch_list/', UserWatch.as_view(), name='User List'),
]
