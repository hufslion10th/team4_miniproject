from django.views.generic import CreateView
from django.urls import reverse
from .models import Result
from .forms import ResultModelForm
from django.shortcuts import render
from .models import Result
from .forms import ResultModelForm


class ResultCreateView(CreateView):
    model = Result
    template_name = 'index.html'
    form_class = ResultModelForm

    def get_success_url(self):
        return reverse('result')

    # 결과 값 저장시에만 사용
    # def form_valid(self, form):  #사용자가 입력한 값에 result를 추가해서 db에 save
    # form.instance.result = self.request.POST["result"]
    # return super().form_valid(form)

def result(request):
    return render(request, 'result.html')
