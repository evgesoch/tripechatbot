
from rest_framework import serializers
from chatbot.models import City, Owner, House


class CitySerializer(serializers.ModelSerializer):

    class Meta:
        model = City
        fields = ('id', 'cityname')


class OwnerSerializer(serializers.ModelSerializer):

    class Meta:
        model = Owner
        fields = ('id', 'fullname', 'username', 'password')


class HouseSerializer(serializers.ModelSerializer):

    class Meta:
        model = House
        fields = ('id', 'city', 'owner', 'price', 'area', 'salerent')




















