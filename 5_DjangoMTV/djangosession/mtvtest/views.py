from django.shortcuts import render
from .models import COUNT_TB

def index_view(request):

    if request.method == 'POST':

        try:
            COUNT_TB.objects.get()
        except:
            new = COUNT_TB()
            new.save()
        else:
            modify = COUNT_TB.objects.get()
            modify.count_num += 1
            modify.save()

    return render(request, 'mtvtest/index.html')