# clientes/admin.py
from django.contrib import admin
from .models import Cliente

class ClienteAdmin(admin.ModelAdmin):
    list_display = ('id', 'nome', 'cpf', 'data_nascimento', 'email')
    search_fields = ('nome', 'cpf')
    list_filter = ('data_nascimento',)

admin.site.register(Cliente, ClienteAdmin)