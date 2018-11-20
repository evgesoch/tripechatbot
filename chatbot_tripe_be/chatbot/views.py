from django.http import HttpResponse, JsonResponse, Http404
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from django.template import loader
from .models import City, Owner, House
from .serializers import CitySerializer, OwnerSerializer, HouseSerializer



def index2(request):
    template = loader.get_template('chatbot/index2.html')
    context = {}
    return HttpResponse(template.render(context, request))


# rest framework

# City View
@api_view(['GET', 'POST'])
def city_list(request, format=None):
    if request.method == 'GET':
        cities = City.objects.all()
        serializer = CitySerializer(cities, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CitySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def city_detail(request, pk, format=None):
    try:
        city = City.objects.get(pk=pk)
    except City.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = CitySerializer(city)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = CitySerializer(city, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        city.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




# Owner View
@api_view(['GET', 'POST'])
def owner_list(request, format=None):
    if request.method == 'GET':
        owners = Owner.objects.all()
        serializer = OwnerSerializer(owners, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = OwnerSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def owner_detail(request, pk, format=None):
    try:
        owner = Owner.objects.get(pk=pk)
    except Owner.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = OwnerSerializer(owner)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = OwnerSerializer(owner, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        owner.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)




# House View
@api_view(['GET', 'POST'])
def house_list(request, format=None):
    if request.method == 'GET':
        houses = House.objects.all()
        serializer = HouseSerializer(houses, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = HouseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def house_detail(request, pk, format=None):
    try:
        house = House.objects.get(pk=pk)
    except House.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = HouseSerializer(house)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = HouseSerializer(house, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'DELETE':
        house.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)