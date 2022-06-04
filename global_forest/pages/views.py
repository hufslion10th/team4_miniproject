from django.views.generic import CreateView
from django.urls import reverse
from .models import Result
from .forms import ResultModelForm
from django.shortcuts import render


class ResultCreateView(CreateView):
    model = Result
    template_name = 'index.html'
    form_class = ResultModelForm

    def get_success_url(self):
        return reverse('home')

    # def form_valid(self, form):  #사용자가 입력한 값에 result를 추가해서 db에 save
    #   form.instance.result = self.request.POST["result"]
    #   return super().form_valid(form)