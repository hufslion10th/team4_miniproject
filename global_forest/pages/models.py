from xml.dom.pulldom import START_DOCUMENT
from django.db import models
from .choice import *

class Result(models.Model):
    student_number = models.CharField(max_length=15, null=True)
    major = models.CharField(max_length=15, null=True)
    user_type = models.CharField(choices=TYPE_CHOICES, max_length=15, verbose_name="유저타입", null=False)
    question1 = models.CharField(choices=QUESTION1_CHOICES, max_length=15, verbose_name="질문 1", null=False)
    question2 = models.CharField(choices=QUESTION2_CHOICES, max_length=15, verbose_name="질문 2", null=False)
    question3 = models.CharField(choices=QUESTION3_CHOICES, max_length=15, verbose_name="질문 3", null=False)
    question4 = models.CharField(choices=QUESTION4_CHOICES, max_length=15, verbose_name="질문 4", null=False)
    question5 = models.CharField(choices=QUESTION5_CHOICES, max_length=15, verbose_name="질문 5", null=False)
    question6 = models.CharField(choices=QUESTION6_CHOICES, max_length=15, verbose_name="질문 6", null=False)
