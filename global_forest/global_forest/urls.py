"""global_forest URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import pages.views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', pages.views.home, name='home'),
    # path('onbaord/', pages.views.onboard, name='onboard'),
    # path('onboard1/', pages.views.onboard1, name='onboard1'),
    # # 특정 대상만 이동하는 페이지
    # path('onboard1_1/', pages.views.onboard1_1, name='onboard1_1'), #외대생만
    # path('onboard1_2/', pages.views.onboard1_2, name='onboard1_2'), #새내기만
    # path('onboard1_3/', pages.views.onboard1_3, name='onboard1_3'), #외부인만
    # #테스트 시작 오프닝
    # path('opening/', pages.views.opening, name='opening'),
    # #테스트 질문 시작
    # path('question1/', pages.views.question1, name='question1'),
    # path('question2/', pages.views.question2, name='question2'),
    # path('question3/', pages.views.question3, name='question3'),
    # path('question4/', pages.views.question4, name='question4'),
    # path('question5/', pages.views.question5, name='question5'),
    # path('question6/', pages.views.question6, name='question6'),
    # path('result/', pages.views.result, name='result'),
    # path('test/', pages.views.test, name='test')
]
