from django.shortcuts import render

# Create your views here.
def home(request):
  return render(request, 'index.html') #index.html을 띄워주는 함수

def onboard(request):
  return render(request, 'onboard.html')

def onboard1(request):
  return render(request, 'onboard1.html')

#외대생만 해당함.
def onboard1_1(request):
  return render(request, 'onboard1_1.html')

#예비새내기만
def onboard1_2(request):
  return render(request, 'onboard1_2.html')

#외부인만
def onboard1_3(request):
  return render(request, 'onboard1_3.html')

def opening(request):
  return render(request, 'opening.html')

def question1(request):
  return render(request, 'question1.html')

def question2(request):
  return render(request, 'question2.html')

def question3(request):
  return render(request, 'question3.html')

def question4(request):
  return render(request, 'question4.html')

def question5(request):
  return render(request, 'question5.html')

def question6(request):
  return render(request, 'question6.html')

def result(request):
  return render(request, 'result.html')
