from django.shortcuts import render

# Create your views here.
def home(request):
  return render(request, 'index.html') #index.html을 띄워주는 함수