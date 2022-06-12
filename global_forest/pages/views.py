from itertools import count
from django.views.generic import CreateView
from django.urls import reverse
from .models import Result
from .forms import ResultModelForm
from django.shortcuts import render
from django.db.models import Q
import matplotlib.pyplot as plt
import matplotlib
import matplotlib.font_manager as fm

#폰트 이름 출력
# font_location = './static/fonts/NanumSquareRoundB.ttf'  #font 경로 설정
# font_name = fm.FontProperties(fname=font_location).get_name()
# print("==========================")
# print(font_name)
# print("==========================")

#폰트 매니저에 새로운 폰트 추가
font_dirs = ['./static/fonts/']
font_files = fm.findSystemFonts(fontpaths=font_dirs)
for font_file in font_files:
    fm.fontManager.addfont(font_file)

#폰트 변경
plt.rcParams['font.family'] = 'NanumSquareRound'


class ResultCreateView(CreateView):
    model = Result
    template_name = 'index.html'
    form_class = ResultModelForm

    def get_success_url(self):
        return reverse('result')  #두 번째 html 파일 이름으로 수정


def result(request):

    start = 14
    student_number_count = {}
    for i in range(9):
        tempSet = Result.objects.filter(student_number=str(start))
        student_number_count[start] = tempSet.count()
        start += 1

    # value 값의 역순으로 정렬 후 (key, value)튜플을 원소로 갖는 리스트 생성
    tuple_list = sorted(student_number_count.items(),
                        key=lambda x: x[1], reverse=True)
    print(tuple_list)

    top5_tuple_list = []  # 최상위 5개 아이템 선정
    for i in range(5):
        top5_tuple_list.append(tuple_list[i])

    top5_dict = dict(top5_tuple_list)
    ratio = top5_dict.values()  # 비율에 value 리스트 입력
    temp = []
    for t in top5_dict.keys():
        temp.append(str(t)+"학번")
    labels = temp  # label에 ['key + 학번'] 형태의 리스트 입력
    colors = ['#ff9999', '#ffc000', '#8fd9b6', '#d395d0', '#7AD1FF']
    wedgeprops = {'width': 0.7, 'edgecolor': 'w', 'linewidth': 5}

    plt.pie(ratio, labels=labels, autopct='%.1f%%', startangle=260,
            counterclock=False, colors=colors, wedgeprops=wedgeprops)
    plt.savefig('./static/img/top5_studentnumber.png', transparent=True)
    plt.clf()
    ###############################################################################################################################

    # 가장 많이 참여한 학과 도출
    major_count = []
    # 공대
    major_count.append(['computer', Result.objects.filter(Q(major="컴퓨터공학부") | Q(
        major="컴공") | Q(major="컴퓨터전자시스템공학부") | Q(major="컴전") | Q(major="컴퓨터공학")).count()])
    major_count.append(['information', Result.objects.filter(
        Q(major="정보통신공학과") | Q(major="정통") | Q(major="정보통신공학")).count()])
    major_count.append(['electronic', Result.objects.filter(
        Q(major="전자공학과") | Q(major="전자") | Q(major="전자공학")).count()])
    major_count.append(['industry', Result.objects.filter(Q(major="산업경영공학과") | Q(
        major="산업경영공학") | Q(major="산업경영") | Q(major="산경공")).count()])
    # 글스산
    major_count.append(['global_sport', Result.objects.filter(Q(major="글로벌스포츠산업") | Q(major="글로벌스포츠산업학과") | Q(
        major="글로벌스포츠산업학부") | Q(major="글스산") | Q(major="국제스포츠레저학과") | Q(major="국스레") | Q(major="국제스포츠레저")).count()])
    # 통번역
    major_count.append(['english', Result.objects.filter(
        Q(major="영어통번역학부") | Q(major="영어통번역") | Q(major="영통")).count()])
    major_count.append(['germany', Result.objects.filter(
        Q(major="독일어통번역학과") | Q(major="독일어통번역") | Q(major="독통")).count()])
    major_count.append(['spain', Result.objects.filter(
        Q(major="스페인어통번역학과") | Q(major="스페인어통번역") | Q(major="영통")).count()])
    major_count.append(['italy', Result.objects.filter(
        Q(major="이탈리아어통번역학과") | Q(major="이탈리아어통번역") | Q(major="이통")).count()])
    major_count.append(['china', Result.objects.filter(
        Q(major="중국어통번역학과") | Q(major="중국어통번역") | Q(major="중통")).count()])
    major_count.append(['japan', Result.objects.filter(
        Q(major="일본어통번역학과") | Q(major="일본어통번역") | Q(major="일통")).count()])
    major_count.append(['arab', Result.objects.filter(
        Q(major="아랍어통번역학과") | Q(major="아랍어통번역") | Q(major="아통")).count()])
    major_count.append(['indonesia', Result.objects.filter(
        Q(major="말레이·인도네시아어통번역학과") | Q(major="말레이·인도네시아어통번역학") | Q(major="마통")).count()])
    major_count.append(['thai', Result.objects.filter(
        Q(major="태국어통번역학과") | Q(major="태국어통번역") | Q(major="태통")).count()])
    # 인문대
    major_count.append(['philosophy', Result.objects.filter(
        Q(major="쳘학과") | Q(major="철학")).count()])
    major_count.append(['history', Result.objects.filter(
        Q(major="사학과") | Q(major="사학")).count()])
    major_count.append(['language', Result.objects.filter(
        Q(major="언어인지과학과") | Q(major="언어인지과학")).count()])
    major_count.append(['knowledge', Result.objects.filter(
        Q(major="지식콘텐츠학부") | Q(major="지식콘텐츠") | Q(major="지콘")).count()])
    # 동유럽
    major_count.append(['poland', Result.objects.filter(
        Q(major="폴란드어과") | Q(major="폴란드")).count()])
    major_count.append(['rumania', Result.objects.filter(
        Q(major="루마니아어과") | Q(major="루마니아")).count()])
    major_count.append(['cheko', Result.objects.filter(Q(major="체코슬로바키아어과") | Q(
        major="체코슬로바키아어과") | Q(major="체코어과"), Q(major="체코")).count()])
    major_count.append(['secro', Result.objects.filter(
        Q(major="세르비아크로아티아어과") | Q(major="세르비아크로아티아어") | Q(major="세크")).count()])
    major_count.append(['ukraine', Result.objects.filter(
        Q(major="우크라이나어과") | Q(major="우크라이나어")).count()])
    # 국지대
    major_count.append(['france', Result.objects.filter(
        Q(major="프랑스") | Q(major="프랑스학과")).count()])
    major_count.append(['brazil', Result.objects.filter(
        Q(major="브라질") | Q(major="브라질학과")).count()])
    major_count.append(['greece', Result.objects.filter(Q(major="그리스불가리아학과") | Q(
        major="그리스불가리아") | Q(major="그불") | Q(major="그불과")).count()])
    major_count.append(['indo', Result.objects.filter(
        Q(major="인도") | Q(major="인도학과")).count()])
    major_count.append(['asia', Result.objects.filter(
        Q(major="중앙아시아") | Q(major="중앙아시아학과") | Q(major="앙과")).count()])
    major_count.append(['africa', Result.objects.filter(Q(major="아프리카학부") | Q(major="아프리카학과") | Q(major='아카') | Q(
        major="동아프리카") | Q(major="서아프리카") | Q(major="남아프리카") | Q(major="동아프리카학과") | Q(major="서아프리카학과") | Q(major="남아프리카학과")).count()])
    major_count.append(['russia', Result.objects.filter(
        Q(major="러시아") | Q(major="러시아학과")).count()])
    major_count.append(['korea', Result.objects.filter(
        Q(major="한국") | Q(major="한국학과")).count()])
    # 경상대
    major_count.append(['gukgum', Result.objects.filter(
        Q(major="국제금융학과") | Q(major="국제금융") | Q(major="국금")).count()])
    major_count.append(['gbt', Result.objects.filter(
        Q(major="GBT학부") | Q(major="쥐비티") | Q(major="지비티")).count()])
    # 자연대
    major_count.append(['math', Result.objects.filter(
        Q(major="수학과") | Q(major="수학")).count()])
    major_count.append(['statistic', Result.objects.filter(
        Q(major="통계학과") | Q(major="통계") | Q(major="통계학")).count()])
    major_count.append(['elec_physic', Result.objects.filter(
        Q(major="전자물리학과") | Q(major="전물") | Q(major="전자물리")).count()])
    major_count.append(['envi', Result.objects.filter(
        Q(major="환경학과") | Q(major="환경")).count()])
    major_count.append(['bio_engineer', Result.objects.filter(
        Q(major="생명공학과") | Q(major="생공") | Q(major="생명공학")).count()])
    major_count.append(['chemical', Result.objects.filter(
        Q(major="화학과") | Q(major="화학")).count()])
    # 융인대
    major_count.append(['yoong_in', Result.objects.filter(
        Q(major="융합인재대학") | Q(major="융인대") | Q(major="융합인재") | Q(major="융인")).count()])
    # 바메공
    major_count.append(['bamegong', Result.objects.filter(Q(major="바이오메디컬공학부") | Q(
        major="바이오메디컬공학과") | Q(major="바메공") | Q(major="바메공학과") | Q(major="바메공학부")).count()])

    major_count.sort(key=lambda x: -x[1])
    for k in major_count:
        print(k)
    ratio_2 = []
    labels_2 = []
    for i in range(0, 5):
        ratio_2.append(major_count[i][1])
        temp = decide_label(major_count[i][0])
        labels_2.append(temp)
    colors = ['#ff9999', '#ffc000', '#8fd9b6', '#d395d0', '#7AD1FF']
    wedgeprops = {'width': 0.7, 'edgecolor': 'w', 'linewidth': 5}
    plt.pie(ratio_2, labels=labels_2, autopct='%.1f%%', startangle=260,
            counterclock=False, colors=colors, wedgeprops=wedgeprops)
    plt.savefig('./static/img/top5_major.png', transparent=True)
    plt.clf()
    return render(request, 'result.html')


def decide_label(name):
    if name == 'computer':
        return "컴퓨터공학과"
    elif name == 'information':
        return "정보통신공학과"
    elif name == 'electronic':
        return "전자공학과"
    elif name == 'industry':
        return "산업경영공학과"
    elif name == 'global_sport':
        return "글로벌스포츠산업학부"
    elif name == 'english':
        return "영어통번역학과"
    elif name == 'germany':
        return "독일어통번역학과"
    elif name == 'italy':
        return "이탈리아어통번역학과"
    elif name == 'china':
        return "중국어통번역학과"
    elif name == 'japan':
        return "일본어통번역학과"
    elif name == 'arab':
        return "아랍어통번역학과"
    elif name == 'indonesia':
        return "말레이인도네시아어통번역학과"
    elif name == 'thai':
        return "태국어통번역학과"
    elif name == 'philosophy':
        return "철학과"
    elif name == 'history':
        return "사학과"
    elif name == 'language':
        return "언어인지과학과"
    elif name == 'knowledge':
        return "지식콘텐츠학부"
    elif name == 'poland':
        return "폴란드어과"
    elif name == 'rumania':
        return "루마니아어과"
    elif name == 'cheko':
        return "체코슬로바키아어과"
    elif name == 'secro':
        return "세르비아크로아티아어과"
    elif name == 'france':
        return "프랑스학과"
    elif name == 'brazil':
        return "브라질학과"
    elif name == 'greece':
        return "그리스·불가리아학과"
    elif name == 'indo':
        return "인도학과"
    elif name == 'asia':
        return "중앙아시아학과"
    elif name == 'africa':
        return "아프리카학부"
    elif name == 'russia':
        return "러시아학과"
    elif name == 'korea':
        return "한국학과"
    elif name == 'gukgum':
        return "국제금융학과"
    elif name == 'gbt':
        return "GBT학부"
    elif name == 'math':
        return "수학과"
    elif name == 'statistic':
        return "통계학과"
    elif name == 'elec_physic':
        return "전자물리학과"
    elif name == 'envi':
        return "환경학과"
    elif name == 'bio_engineer':
        return "생명공학과"
    elif name == 'chemical':
        return "화학과"
    elif name == 'yoong_in':
        return "융합인재대학"
    elif name == 'bamegong':
        return "바이오메디컬공학부"
