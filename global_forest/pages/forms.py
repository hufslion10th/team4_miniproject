from django import forms
from .models import Result

class ResultModelForm(forms.ModelForm):
    class Meta:
        model = Result
        fields = '__all__'