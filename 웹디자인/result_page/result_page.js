// 홈페이지 검색버튼 //
const search = document.getElementById('search');
const search_ap = document.querySelector('.search');

search.addEventListener('click', () => {
    search_ap.classList.add('search-appear');
    search_ap.focus();
});

search_ap.addEventListener('blur', () => {
    search_ap.classList.remove('search-appear');
});


////////////////////////////////hover-sight////////////////////////////////
var hover_box = document.getElementById('hover-box');

const hd_div = document.querySelector('.hd-div');
const st_div = document.querySelector('.st-div');
const di_div = document.querySelector('.di-div');
const as_div = document.querySelector('.as-div');
const kd_div = document.querySelector('.kd-div');

const hd = document.querySelector('.hd');
const st = document.querySelector('.st');
const di = document.querySelector('.di');
const as = document.querySelector('.as');
const kd = document.querySelector('.kd');


////////////////////////////////hd////////////////////////////////
hd.addEventListener('focus', () => {

    hd_div.classList.add('hd-visible');
})

hd.addEventListener('blur', () => {

    hd_div.classList.remove('hd-visible');
})

////////////////////////////////st////////////////////////////////
st.addEventListener('focus', () => {

    st_div.classList.add('st-visible');
})

st.addEventListener('blur', () => {

    st_div.classList.remove('st-visible');
})

////////////////////////////////di////////////////////////////////
di.addEventListener('focus', () => {

    di_div.classList.add('di-visible');
})

di.addEventListener('blur', () => {

    di_div.classList.remove('di-visible');
})

////////////////////////////////as////////////////////////////////
as.addEventListener('focus', () => {

    as_div.classList.add('as-visible');
})

as.addEventListener('blur', () => {

    as_div.classList.remove('as-visible');
})


////////////////////////////////kd////////////////////////////////

kd.addEventListener('focus', () => {

    kd_div.classList.add('kd-visible');
})

kd.addEventListener('blur', () => {

    kd_div.classList.remove('kd-visible');
})




/////////////////////////wardle-game////////////////////////////////
var answer = '콜레스테롤';

var input = document.getElementsByTagName('input');
var input1 = document.querySelectorAll('.w-input1');
var input2 = document.querySelectorAll('.w-input2');
var input3 = document.querySelectorAll('.w-input3');
var input4 = document.querySelectorAll('.w-input4');
var input5 = document.querySelectorAll('.w-input5');

const life_count = 5;

document.querySelector('.wg-submit').addEventListener('click', function() {

    let count = 0;

    for (let i = 0; i<5; i++) {
        if (input1[i].value == answer[i]) {
            input1[i].style.background = '#4BE785';
        } else if (answer.includes(input1[i].value)) {
            input1[i].style.background = '#EEFC7D';
        } else {
            input1[i].style.background = '#CFC6C8';
        };

        if (input1[i].value == '') {
            input1[i].style.background = '#fff';
        };

    };
    if (input1[0].value == '') {
        alert('한글자 이상의 문자를 입력하세요!');
        }
})

document.querySelector('.wg-submit').addEventListener('click', function() {

    for (let i = 0; i<5; i++) {
        if (input2[i].value == answer[i]) {
            input2[i].style.background = '#4BE785';
        } else if (answer.includes(input2[i].value)) {
            input2[i].style.background = '#EEFC7D';
        } else {
            input2[i].style.background = '#CFC6C8';
        };

        if (input2[i].value == '') {
            input2[i].style.background = '#fff';
        }
    }
})

document.querySelector('.wg-submit').addEventListener('click', function() {
    
    for (let i = 0; i<5; i++) {
        if (input3[i].value == answer[i]) {
            input3[i].style.background = '#4BE785';
        } else if (answer.includes(input3[i].value)) {
            input3[i].style.background = '#EEFC7D';
        } else {
            input3[i].style.background = '#CFC6C8';
        };

        if (input3[i].value == '') {
            input3[i].style.background = '#fff';
        };
    }
})

document.querySelector('.wg-submit').addEventListener('click', function() {

    for (let i = 0; i<5; i++) {
        if (input4[i].value == answer[i]) {
            input4[i].style.background = '#4BE785';
        } else if (answer.includes(input4[i].value)) {
            input4[i].style.background = '#EEFC7D';
        } else {
            input4[i].style.background = '#CFC6C8';
        };

        if (input4[i].value == '') {
            input4[i].style.background = '#fff';
        };
    }
})

document.querySelector('.wg-submit').addEventListener('click', function() {

    for (let i = 0; i<5; i++) {
        if (input5[i].value == answer[i]) {
            input5[i].style.background = '#4BE785';
        } else if (answer.includes(input5[i].value)) {
            input5[i].style.background = '#EEFC7D';
        } else {
            input5[i].style.background = '#CFC6C8';
        };

        if (input5[i].value == '') {
            input5[i].style.background = '#fff';
        }
    }
})



