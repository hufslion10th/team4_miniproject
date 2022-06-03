from django.views.generic import CreateView
from django.urls import reverse
from .models import Result
from .forms import ResultModelForm


class ResultCreateView(CreateView):
    model = Result
    template_name = 'index.html'
    form_class = ResultModelForm

    def get_success_url(self):
        return reverse('index')


# from django.shortcuts import render
# from .forms import ResultModelForm

# # Create your views here.
# def home(request):
#   result = ResultModelForm()
#   return render(request, 'index.html', {'result':result}) #index.html에 reuslt변수에 담긴 모델 폼 전달

# def onboard(request):
#   return render(request, 'onboard.html')

# def onboard1(request):
#   return render(request, 'onboard1.html')

# #외대생만 해당함.
# def onboard1_1(request):
#   return render(request, 'onboard1_1.html')

# #예비새내기만
# def onboard1_2(request):
#   return render(request, 'onboard1_2.html')

# #외부인만
# def onboard1_3(request):
#   return render(request, 'onboard1_3.html')

# def opening(request):
#   return render(request, 'opening.html')

# def question1(request):
#   return render(request, 'question1.html')

# def question2(request):
#   return render(request, 'question2.html')

# def question3(request):
#   return render(request, 'question3.html')

# def question4(request):
#   return render(request, 'question4.html')

# def question5(request):
#   return render(request, 'question5.html')

# def question6(request):
#   return render(request, 'question6.html')

# def result(request):
#   return render(request, 'result.html')
# def test(request):
#   return render(request, 'test.html') #test.html을 띄워주는 함수
