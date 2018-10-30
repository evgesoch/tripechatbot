from django.db import models

# Create your models here.


class Houses(models.Model):
    city = models.CharField(max_length=100)
    salerent = models.CharField(max_length=100)
    link = models.CharField(max_length=5000)
    userrequest = models.CharField(max_length=5000)

class Userrequests(models.Model):
    linkur = models.ForeignKey(Houses, on_delete=models.CASCADE)
    textrequest = models.CharField(max_length=5000)