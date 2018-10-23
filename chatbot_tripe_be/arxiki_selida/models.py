from django.db import models

# Create your models here.


class Questions(models.Model):
    faqs = models.CharField(max_length=500)

    def __str__(self):
        return "Question" + str(self.pk)


class Answers(models.Model):
    questions = models.ForeignKey(Questions, on_delete=models.CASCADE)
    answers = models.CharField(max_length=10000)
