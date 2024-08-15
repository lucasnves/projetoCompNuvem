# clientes/urls.py
from django.urls import path
from .views import cliente_list, cliente_detail, cliente_create, cliente_update, cliente_delete

urlpatterns = [
    path('', cliente_list, name='cliente_list'),
    path('<int:pk>/', cliente_detail, name='cliente_detail'),
    path('create/', cliente_create, name='cliente_create'),
    path('<int:pk>/update/', cliente_update, name='cliente_update'),
    path('<int:pk>/delete/', cliente_delete, name='cliente_delete'),
]