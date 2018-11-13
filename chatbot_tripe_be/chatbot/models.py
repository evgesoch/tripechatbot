from django.db import models

# Create your models here.


class City(models.Model):
    cityname = models.CharField(max_length=500)

    def __str__(self):
        return self.cityname


class Owner(models.Model):
    fullname = models.CharField(max_length=500)
    username = models.CharField(max_length=500)
    password = models.CharField(max_length=100)

    def __str__(self):
        return self.fullname


class House(models.Model):
    city = models.ForeignKey(City, on_delete=models.CASCADE)
    owner = models.ForeignKey(Owner, on_delete=models.CASCADE)
    price = models.FloatField(null=True, blank=True, default=None)
    area = models.FloatField(null=True, blank=True, default=None)
    salerent = models.CharField(max_length=100, default=None)

    def __str__(self):
        return str(self.pk) + ': ' + str(self.city) + ' ' + str(self.owner)

