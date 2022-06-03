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
const progressBar = document.querySelector(".progressBar")

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

function next10() {
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

function next11() {
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

function next12() {
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

function next13() {
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

function next14() {
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

function next15() {
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
}
