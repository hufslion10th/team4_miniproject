const intro = document.querySelector("#intro");
const opening = document.querySelector("#opening");
const onboard = document.querySelector("#onboard");
const onboard1 = document.querySelector("#onboard1");
const onboard1_1 = document.querySelector("#onboard1_1");
const onboard1_2 = document.querySelector("#onboard1_2");
const onboard1_3 = document.querySelector("#onboard1_3");
const q1 = document.querySelector("#question1");
const q2 = document.querySelector("#question2");
const q3 = document.querySelector("#question3");
const q4 = document.querySelector("#question4");
const q5 = document.querySelector("#question5");
const q6 = document.querySelector("#question6");
const q7 = document.querySelector("#question7");
const loading = document.querySelector("#loading");
const result = document.querySelector("#result");
const progressBar = document.querySelector(".progressBar");
const keyArray = new Array();
const tagArray = new Array();

const descriptionArray = [
    {"key":"아시아에서 살고 개발자인 아기사슴", "description": "당신은 디버깅을 잘하는 아시아의 아기 사슴이군요!"},
    {"key":"아시아에서 살고 개발자인 너구리", "description": "당신은 코딩 천재 매운맛 아시안 농심 너구리군요!"},
    {"key":"아시아에서 살고 개발자인 부엉이", "description": "당신은 그 귀하다는 외대 출신 개발자 BOO입니까?"},
    {"key":"아시아에서 살고 개발자인 고양이", "description": "당신은 노트북만 보고있는 아시아의 고양이군요!!"},

    {"key":"아시아에서 살고 예술가인 아기사슴", "description": "당신은 아시아의 패션 트렌드를 선두하는 옷잘알 아기사슴이군요!"},
    {"key":"아시아에서 살고 예술가인 너구리", "description": "당신은 아시아에서 농심 표지 디자인을 한 너구리군요!"},
    {"key":"아시아에서 살고 예술가인 부엉이", "description": "당신은 아시아를 대표하는 세계를 순회하며 노래하는 부엉이군요!"},
    {"key":"아시아에서 살고 예술가인 고양이", "description": "당신은 아시아 거리를 자유롭게 거닐며 예술을 하는 고양이군요!"},

    {"key":"아시아에서 살고 요리사인 아기사슴", "description": "당신은 한국의 떡볶이를 세계화시킨 아기사슴이군요!"},
    {"key":"아시아에서 살고 요리사인 너구리", "description": "당신은 농심에서 스카웃한 코리안 너구리군요!"},
    {"key":"아시아에서 살고 요리사인 부엉이", "description": "당신은 아시아에서 자취 요리를 마스터한 부엉이군요!"},
    {"key":"아시아에서 살고 요리사인 고양이", "description": "당신은 솜방망이로 요리하는 아시안 셰프 고양이군요!"},

    {"key":"아시아에서 살고 마법사인 아기사슴", "description": "당신은 마법의 뿔을 가져 사냥꾼을 피해 다니는 아기사슴이군요! "},
    {"key":"아시아에서 살고 마법사인 너구리", "description": "당신은 닥터 스트레인지에게 마법을 전수 받은 아시아의 가오갤 너구리군요!"},
    {"key":"아시아에서 살고 마법사인 부엉이", "description": "당신은 마법 천자문 속 '하늘 천' 부엉이군요!"},
    {"key":"아시아에서 살고 마법사인 고양이", "description": "당신은 아시아에서 님부스 빗자루를 타고 다니는 마법사 고양이군요!"},

    {"key":"유럽에서 살고 개발자인 아기사슴", "description": "당신은 유럽에서 대박난 서비스를 만든 아기사슴 개발자군요!"},
    {"key":"유럽에서 살고 개발자인 너구리", "description": "당신은 유럽의 어느 도시에서 에스프레소를 마시며 개발하는 행복한 너구리군요!"},
    {"key":"유럽에서 살고 개발자인 부엉이", "description": "당신은 유럽의 다채로운 계절 산 사이를 자유롭게 활강하며 디버깅하는 새벽의 개발자 부엉이군요!"},
    {"key":"유럽에서 살고 개발자인 고양이", "description": "당신은 유럽을 자유롭게 누비는 디지털 노마드 개발자인 고양이군요!"},
    
    {"key":"유럽에서 살고 예술가인 아기사슴", "description": "당신은 루브르 박물관에 전시회를 연 빈센트 아기사슴이군요!"},
    {"key":"유럽에서 살고 예술가인 너구리", "description": "당신은 루브르 박물관 앞에서 행위 예술을 하는 너구리군요!"},
    {"key":"유럽에서 살고 예술가인 부엉이", "description": "당신은 호그와트에 편지배달 부업 뛰는 부엉이군요!"},
    {"key":"유럽에서 살고 예술가인 고양이", "description": "당신은 유럽에서 사실상 먹고 노는 팔자좋은 고양이군요!"},
    
    {"key":"유럽에서 살고 요리사인 아기사슴", "description": "당신은 라따뚜이에게 요리법을 전수 받은 아기사슴이군요!"},
    {"key":"유럽에서 살고 요리사인 너구리", "description": "당신은 유럽 요리를 모현의 숲에 전파한 슈퍼 요리사 너구리군요!"},
    {"key":"유럽에서 살고 요리사인 부엉이", "description": "당신은 프랑스 유명 요리학교 출신 부엉이군요!"},
    {"key":"유럽에서 살고 요리사인 고양이", "description": "당신은 숙취를 해장하기 위해 해장국을 직접 만들어 팔기 시작한 해장국 요리 장인 고양이군요!"},

    {"key":"유럽에서 살고 마법사인 아기사슴", "description": "당신은 에펠탑의 영혼을 받고 자란 자유로운 영혼의 아기사슴이군요!"},
    {"key":"유럽에서 살고 마법사인 너구리", "description": "당신은 중세 프랑스 유명한 마법사의 직속 후계자인 너구리군요!"},
    {"key":"유럽에서 살고 마법사인 부엉이", "description": "당신은 호그와트에 취업한 비행학 부엉이 교수님이군요! "},
    {"key":"유럽에서 살고 마법사인 고양이", "description": "당신은 라따뚜이를 잡으러 다니는 파이어 볼트 빗자루를 타는 고양이, 톰이군요!"},

    {"key":"아프리카에서 살고 개발자인 아기사슴", "description": "당신은 넓은 평야에서 코딩하다 눈망울이 건조해져버린 아기사슴이군요!"},
    {"key":"아프리카에서 살고 개발자인 너구리", "description": "당신은 사막에서 더위를 먹으며 개발하는 너구리군요!"},
    {"key":"아프리카에서 살고 개발자인 부엉이", "description": "당신은 넓은 평야의 밤에 깨어나 코딩하는 부엉이군요!"},
    {"key":"아프리카에서 살고 개발자인 고양이", "description": "당신은 피라미드 만들기 알고리즘 문제를 풀고 있는 스핑크스 고양이군요!"},
    
    {"key":"아프리카에서 살고 예술가인 아기사슴", "description": "당신은 힙한 패션으로 많은 사람들의 주목을 받고 이집트 피라미드 앞에서 패션쇼를한 아기사슴이군요!"},
    {"key":"아프리카에서 살고 예술가인 너구리", "description": "당신은 너구리굴을 아름답게 만드는 너구리굴 장인이군요."},
    {"key":"아프리카에서 살고 예술가인 부엉이", "description": "당신은 밤길을 아름답게 비춰주는 넓은 평야의 부엉이군요."},
    {"key":"아프리카에서 살고 예술가인 고양이", "description": "당신은 위대한 예술 작품을 만든 넓은 대륙에 한 번 나올까말까 한 감각적인 예술가 고양이군요!"},
    
    {"key":"아프리카에서 살고 요리사인 아기사슴", "description": "당신은 넓은 대륙에서 잘생기긴 쉐프가 있기로 유명한 식당에서 대박난 아기사슴이군요!"},
    {"key":"아프리카에서 살고 요리사인 너구리", "description": "당신은 어디에서나 삼시세끼 먹어도 질리지않는 까르보나라를 만드는 너구리군요!"},
    {"key":"아프리카에서 살고 요리사인 부엉이", "description": "당신은 넓은 대륙을 돌아다니며 사람들에게 행복한 야식을 선사하는 쉐프 부엉이군요!"},
    {"key":"아프리카에서 살고 요리사인 고양이", "description": "당신은 넓은 대륙의 동물 친구들이 맛잘알로 임명한 요리장인 고양이군요."},

    {"key":"아프리카에서 살고 마법사인 아기사슴", "description": "당신은 넓은 대륙에서 사람들의 예쁜 얼굴을 책임지는 성형마법을 구사하는 멋진 아기사슴이군요!"},
    {"key":"아프리카에서 살고 마법사인 너구리", "description": "당신은 덩치가 커질 수 있는 묘기를 부릴 수 있는 넓은 대륙의 너구리입니다!"},
    {"key":"아프리카에서 살고 마법사인 부엉이", "description": "당신은 밤이되면 밝은 빛을 내는 달을 소환할 수 있는 특별한 능력을 가진 부엉이군요!"},
    {"key":"아프리카에서 살고 마법사인 고양이", "description": "당신은 넓은 대륙을 순간이동할 마법으로 이동할 수 있는 빠르고 날렵한 고양이군요!"},
    
    {"key":"아메리카에서 살고 개발자인 아기사슴", "description": "당신은 자유롭고 싶지만 회사에서 일을 해야하는 불쌍한 아기사슴이군요!"},
    {"key":"아메리카에서 살고 개발자인 너구리", "description": "당신은 야근을 달고 살며 다크서클이 생긴 아메리카 대륙의 도시 너구리군요!"},
    {"key":"아메리카에서 살고 개발자인 부엉이", "description": "당신은 Forbes 100대 기업에서 고연봉을 받는 부엉이군요! "},
    {"key":"아메리카에서 살고 개발자인 고양이", "description": "당신은 실리콘 밸리에서 억대연봉을 받는 백엔드 개발자 고양이군요!"},

    {"key":"아메리카에서 살고 예술가인 아기사슴", "description": "당신이 그림그리길 좋아하는 겨울왕국 스벤 아들 친구 아기사슴이군요!"},
    {"key":"아메리카에서 살고 예술가인 너구리", "description": "당신은 다크서클의 힘으로 예술을 하는 너구리군요!"},
    {"key":"아메리카에서 살고 예술가인 부엉이", "description": "당신은 미국산 BOO가 틀림없군요! "},
    {"key":"아메리카에서 살고 예술가인 고양이", "description": "당신은 일이 취미인 성공한 예술가 고양이군요!"},
    
    {"key":"아메리카에서 살고 요리사인 아기사슴", "description": "당신은 3개의 미슐랭 스타를 받은 마스터 셰프 US에서 1등을 한 사슴이군요!"},
    {"key":"아메리카에서 살고 요리사인 너구리", "description": "당신은 미국 66번 국도에서 카마로를 몰고 있는 마스터 셰프 너구리군요!"},
    {"key":"아메리카에서 살고 요리사인 부엉이", "description": "당신은 식당이 너무 잘되어 돈쭐이 나고 있는 부엉이군요!"},
    {"key":"아메리카에서 살고 요리사인 고양이", "description": "당신은 츄르를 직접 만들어 먹길 좋아하는 뚱땡이 고양이군요!"},
    
    {"key":"아메리카에서 살고 마법사인 아기사슴", "description": "당신은 자유롭게 넓은 곳에서 뛰놀며 머글들 몰래 마법을 부리는 아기사슴이군요."},
    {"key":"아메리카에서 살고 마법사인 너구리", "description": "당신은 어떤 주문이든 외워버리는 너구리군요."},
    {"key":"아메리카에서 살고 마법사인 부엉이", "description": "당신은 아메리카의 넓은 곳을 투시하는 마법을 가진 부엉이군요!"},
    {"key":"아메리카에서 살고 마법사인 고양이", "description": "당신은 남들이 잘 모르는 새로운 주술을 외우는 자유로운 고양이군요!"},
    //js에서 이미지 불러오기 https://hokeydokey.tistory.com/96 
];

function next1() {
    intro.style.WebkitAnimation = "fadeOut 1s";
    intro.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        opening.style.WebkitAnimation = "fadeIn 1s";
        opening.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            intro.style.display = "none";
            opening.style.display = "block";
        }, 200);
    }, 200);
}

function next2() {
    opening.style.WebkitAnimation = "fadeOut 1s";
    opening.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        onboard.style.WebkitAnimation = "fadeIn 1s";
        onboard.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            opening.style.display = "none";
            onboard.style.display = "block";
        }, 200);
    }, 200);
}

function next3() {
    onboard.style.WebkitAnimation = "fadeOut 1s";
    onboard.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        onboard1.style.WebkitAnimation = "fadeIn 1s";
        onboard1.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            onboard.style.display = "none";
            onboard1.style.display = "block";
        }, 200);
    }, 200);
}

function next4() {
    onboard1.style.WebkitAnimation = "fadeOut 1s";
    onboard1.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        onboard1_1.style.WebkitAnimation = "fadeIn 1s";
        onboard1_1.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            onboard1.style.display = "none";
            onboard1_1.style.display = "block";
        }, 200);
    }, 200);
}

function next5() {
    onboard1.style.WebkitAnimation = "fadeOut 1s";
    onboard1.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        onboard1_2.style.WebkitAnimation = "fadeIn 1s";
        onboard1_2.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            onboard1.style.display = "none";
            onboard1_2.style.display = "block";
        }, 200);
    }, 200);
}

function next6() {
    onboard1.style.WebkitAnimation = "fadeOut 1s";
    onboard1.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        onboard1_3.style.WebkitAnimation = "fadeIn 1s";
        onboard1_3.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            onboard1.style.display = "none";
            onboard1_3.style.display = "block";
        }, 200);
    }, 200);
}

function next7() {
    onboard1_1.style.WebkitAnimation = "fadeOut 1s";
    onboard1_1.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        q1.style.WebkitAnimation = "fadeIn 1s";
        q1.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            onboard1_1.style.display = "none";
            q1.style.display = "block";
        }, 200);
    }, 200);
}

function next8() {
    onboard1_2.style.WebkitAnimation = "fadeOut 1s";
    onboard1_2.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        q1.style.WebkitAnimation = "fadeIn 1s";
        q1.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            onboard1_2.style.display = "none";
            q1.style.display = "block";
        }, 200);
    }, 200);
}

function next9() {
    onboard1_3.style.WebkitAnimation = "fadeOut 1s";
    onboard1_3.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        q1.style.WebkitAnimation = "fadeIn 1s";
        q1.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            onboard1_3.style.display = "none";
            q1.style.display = "block";
        }, 200);
    }, 200);
}

function next10(key) {
    keyArray[0] = key;
    //특정 버튼이 눌렸을 때 key값을 keyArray에 저장.

    q1.style.WebkitAnimation = "fadeOut 1s";
    q1.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        q2.style.WebkitAnimation = "fadeIn 1s";
        q2.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            q1.style.display = "none";
            q2.style.display = "block";
        }, 200);
    }, 200);
}

function next11(key) {
    keyArray[1] = key;
    q2.style.WebkitAnimation = "fadeOut 1s";
    q2.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        q3.style.WebkitAnimation = "fadeIn 1s";
        q3.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            q2.style.display = "none";
            q3.style.display = "block";
        }, 200);
    }, 200);
}

function next12(tag) {
    tagArray[0] = tag;
    q3.style.WebkitAnimation = "fadeOut 1s";
    q3.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        q4.style.WebkitAnimation = "fadeIn 1s";
        q4.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            q3.style.display = "none";
            q4.style.display = "block";
        }, 200);
    }, 200);
}

function next13(tag) {
    tagArray[1] = tag;
    q4.style.WebkitAnimation = "fadeOut 1s";
    q4.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        q5.style.WebkitAnimation = "fadeIn 1s";
        q5.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            q4.style.display = "none";
            q5.style.display = "block";
        }, 200);
    }, 200);
}

function next14(key) {
    keyArray[2] = key;
    q5.style.WebkitAnimation = "fadeOut 1s";
    q5.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        q6.style.WebkitAnimation = "fadeIn 1s";
        q6.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            q5.style.display = "none";
            q6.style.display = "block";
        }, 200);
    }, 200);
}

function next15(tag) {
    tagArray[2] = tag;
    q6.style.WebkitAnimation = "fadeOut 0.2s";
    q6.style.Animation = "fadeOut 0.2s";
    setTimeout(() => {
        loading.style.WebkitAnimation = "fadeIn 0.2s";
        loading.style.Animation = "fadeIn 0.2s";
        setTimeout(() => {
            q6.style.display = "none";
            loading.style.display = "block";
        }, 200);
    }, 200);

    loading_func();
}

/*result.html*/

function send_result() {
    location.href='/result/';
}

function replay() {
    location.href='/';
}

function discord() {
    alert('외대생만을 위한 디스코드 채널을 준비 중입니다.');
}


let idx = 0;

function changeImgs() {
    const imgs = document.getElementsByClassName("loading__img");  // "loading__img"는 html에 나중에 class 이름 추가  
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = "none";
    }
    idx ++;

    if (idx > imgs.length) {
        idx = 1;
    }
    imgs[idx-1].style.display = "block";
    setTimeout(changeImgs, 150);
}

window.onload = function() {
    changeImgs();
}

function loading_func() {
    console.log("함수 호출 load");
    loading.style.WebkitAnimation = "fadeOut 3s"; //3초 동안 랜덤으로 동물 이미지 생성
    loading.style.Animation = "fadeOut 3";
    setTimeout(() => {
        result.style.WebkitAnimation = "fadeIn 1s";
        result.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            loading.style.display = "none";
            result.style.display = "block";
        }, 1000);
    }, 1000);

    result_page();
}

function result_page() {
    const sentence = document.querySelector('.result__sentence');
    sentence.innerHTML = `${keyArray[1]}에서 살고 ${keyArray[2]}인 ${keyArray[0]}`;
    console.log(sentence.innerHTML);

    const result_tag1 = document.querySelector(".result__tag_1");
    result_tag1.innerHTML = `${tagArray[0]}`;
    
    const result_tag2 = document.querySelector(".result__tag_2");
    result_tag2.innerHTML = `${tagArray[1]}`;
    
    const result_tag3 = document.querySelector(".result__tag_3");
    result_tag3.innerHTML = `${tagArray[2]}`;
    
    const result_description = document.querySelector(".result__description");
    console.log(result_description);

    const img = document.querySelector('.result__img');
    let image_location = `${}`;

    for (let i=0; descriptionArray.length; i++){
        if (sentence.innerHTML==descriptionArray[i].key){
            result_description.innerHTML = descriptionArray[i].description;
            
            img.setAttribute("src", "/static/img/개발자_부.png");
            break;
        }
    } //key랑 i랑 같으면 i를 다른 변수로 빼고 그 변수를 descriptionArray에 넣자.
    /*for (let v in descriptionArray){
        if (v==description.key) {
            result_description.innerHTML = descriptionArray.description;
            break;
        }
    }*/
}