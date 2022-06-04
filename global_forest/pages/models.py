from xml.dom.pulldom import START_DOCUMENT
from django.db import models

class Result(models.Model):
    student_number = models.CharField(max_length=15, null=True)
    major = models.CharField(max_length=15, null=True)
    nickname = models.CharField(max_length=20, null=True)
    result = models.TextField(null=True)

    def __str__(self):
        return self.nickname
        