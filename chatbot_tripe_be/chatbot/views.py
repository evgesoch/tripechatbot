from django.http import HttpResponse, JsonResponse
from django.template import loader
from django.views.decorators.csrf import csrf_exempt
from rest_framework.renderers import JSONRenderer
from rest_framework.parsers import JSONParser
from .models import City, Owner, House
from .serializers import CitySerializer, OwnerSerializer, HouseSerializer



def index2(request):
    template = loader.get_template('chatbot/index2.html')
    context = {}
    return HttpResponse(template.render(context, request))


# rest framework

# City View
@csrf_exempt
def city_list(request):
    if request.method == 'GET':
        cities = City.objects.all()
        serializer = CitySerializer(cities, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = CitySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def city_detail(request, pk):
    try:
        city = City.objects.get(pk=pk)
    except City.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = CitySerializer(city)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = CitySerializer(city, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        city.delete()
        return HttpResponse(status=204)




# Owner View
@csrf_exempt
def owner_list(request):
    if request.method == 'GET':
        owners = Owner.objects.all()
        serializer = OwnerSerializer(owners, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = OwnerSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

def owner_detail(request, pk):
    try:
        owner = Owner.objects.get(pk=pk)
    except Owner.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = OwnerSerializer(owner)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = OwnerSerializer(owner, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        owner.delete()
        return HttpResponse(status=204)




# House View
@csrf_exempt
def house_list(request):
    if request.method == 'GET':
        houses = House.objects.all()
        serializer = HouseSerializer(houses, many=True)
        return JsonResponse(serializer.data, safe=False)
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = HouseSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)

@csrf_exempt
def house_detail(request, pk):
    try:
        house = House.objects.get(pk=pk)
    except House.DoesNotExist:
        return HttpResponse(status=404)

    if request.method == 'GET':
        serializer = HouseSerializer(house)
        return JsonResponse(serializer.data)
    elif request.method == 'PUT':
        data = JSONParser().parse(request)
        serializer = HouseSerializer(house, data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data)
        return JsonResponse(serializer.errors, status=400)
    elif request.method == 'DELETE':
        house.delete()
        return HttpResponse(status=204)