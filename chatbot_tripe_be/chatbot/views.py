from django.http import HttpResponse
from django.template import loader


def index2(request):
    template = loader.get_template('chatbot/index2.html')
    context = {}
    return HttpResponse(template.render(context, request))
