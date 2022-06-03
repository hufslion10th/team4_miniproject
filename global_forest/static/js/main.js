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
const loading = document.querySelector("#loading");
const result = document.querySelector("#result");
const progressBar = document.querySelector(".progressBar");
let keyArray = new Array();
let tagArray = new Array();

const descriptionArray = [
    {"key":"아시아에서 살고 개발자인 고양이", "description": "당신은 디버깅을 잘하는 아시아의 아기 사슴이군요!"},
    {"key":"아시아에서 살고 개발자인 너구리", "description": "당신은 코딩 천재 매운맛 아시안 농심 너구리군요!"},
    {"key":"아시아에서 살고 개발자인 부엉이", "description": "당신은 그 귀하다는 외대 출신 개발자 BOO입니까?"},
    {"key":"아시아에서 살고 개발자인 고양이", "description": "당신은 노트북만 보고있는 아시아의 고양이군요!!"},
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
    q6.style.WebkitAnimation = "fadeOut 1s";
    q6.style.Animation = "fadeOut 1s";
    setTimeout(() => {
        loading.style.WebkitAnimation = "fadeIn 1s";
        loading.style.Animation = "fadeIn 1s";
        setTimeout(() => {
            q6.style.display = "none";
            loading.style.display = "block";
        }, 200);
    }, 200);
    next16();
}

function next16() {
    loading.style.WebkitAnimation = "fadeOut 1s";
    loading.style.Animation = "fadeOut 1s";
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

    /*for (let i=0; descriptionArray.length; i++){
        if (sentence.innerHTML==descriptionArray[i].key){
            result_description.innerHTML = descriptionArray[i].description;
            break;
        }
    } */ //key랑 i랑 같으면 i를 다른 변수로 빼고 그 변수를 descriptionArray에 넣자.

    for (let v in descriptionArray){
        if (v==description_key) {
            result_description.innerHTML = descriptionArray.description;
            break;
        }
    }
}
