var text = document.querySelector('.text');
var text2 = document.querySelector('.text2');
var text3 = document.querySelector('.text3');
var text4 = document.querySelector('.text4');
var text5 = document.querySelector('.text5');

var cha = document.querySelector('.cha');
var cha2 = document.querySelector('.cha2');
var cha3 = document.querySelector('.cha3');
var cha4 = document.querySelector('.cha4');
var cha5 = document.querySelector('.cha5');

var room = document.querySelector('.room');
var room2 = document.querySelector('.room2');
var room3 = document.querySelector('.room3');
var room4 = document.querySelector('.room4');
var room5 = document.querySelector('.room5');

var array = ["田中先生","鈴木先生","石原先生","池田先生","遠藤先生"];
var heya = ["第一教室","第二教室","体育館"];
var ja = '国語';
var pe = '体育';
var si = '理科';
var so = '社会';
var ma = '数学';

text.addEventListener('keyup',onkeyup);
text2.addEventListener('keyup',onkeyup2);
text3.addEventListener('keyup',onkeyup3);
text4.addEventListener('keyup',onkeyup4);
text5.addEventListener('keyup',onkeyup5);

//1行目
function onkeyup(){
    var result = text.value;
    
    if(result == ja){
        cha.innerHTML = array[0];
        room.innerHTML = heya[0];
    }else if(result == pe){
        cha.innerHTML = array[1];
        room.innerHTML = heya[2];
    }else if(result == si){
        cha.innerHTML = array[2];
        room.innerHTML = heya[1];
    }else if(result == so){
        cha.innerHTML = array[3];
        room.innerHTML = heya[0];
    }else if(result == ma){
        cha.innerHTML = array[4];
        room.innerHTML = heya[1];
    }
}
//2行目
function onkeyup2(){
    var result2 = text2.value;
    
    if(result2 == ja){
        cha2.innerHTML = array[0];
        room2.innerHTML = heya[0];
    }else if(result2 == pe){
        cha2.innerHTML = array[1];
        room2.innerHTML = heya[2];
    }else if(result2 == si){
        cha2.innerHTML = array[2];
        room2.innerHTML = heya[1];
    }else if(result2 == so){
        cha2.innerHTML = array[3];
        room2.innerHTML = heya[0];
    }else if(result2 == ma){
        cha2.innerHTML = array[4];
        room2.innerHTML = heya[1];
    }
}

//3行目
function onkeyup3(){
    var result3 = text3.value;
    
    if(result3 == ja){
        cha3.innerHTML = array[0];
        room3.innerHTML = heya[0];
    }else if(result3 == pe){
        cha3.innerHTML = array[1];
        room3.innerHTML = heya[2];
    }else if(result3 == si){
        cha3.innerHTML = array[2];
        room3.innerHTML = heya[1];
    }else if(result3 == so){
        cha3.innerHTML = array[3];
        room3.innerHTML = heya[0];
    }else if(result3 == ma){
        cha3.innerHTML = array[4];
        room3.innerHTML = heya[1];
    }
}

//4行目
function onkeyup4(){
    var result4 = text4.value;
    
    if(result4 == ja){
        cha4.innerHTML = array[0];
        room4.innerHTML = heya[0];
    }else if(result4 == pe){
        cha4.innerHTML = array[1];
        room4.innerHTML = heya[2];
    }else if(result4 == si){
        cha4.innerHTML = array[2];
        room4.innerHTML = heya[1];
    }else if(result4 == so){
        cha4.innerHTML = array[3];
        room4.innerHTML = heya[0];
    }else if(result4 == ma){
        cha4.innerHTML = array[4];
        room4.innerHTML = heya[1];
    }
}

//5行目
function onkeyup5(){
    var result5 = text5.value;
    
    if(result5 == ja){
        cha5.innerHTML = array[0];
        room5.innerHTML = heya[0];
    }else if(result5 == pe){
        cha5.innerHTML = array[1];
        room5.innerHTML = heya[2];
    }else if(result5 == si){
        cha5.innerHTML = array[2];
        room5.innerHTML = heya[1];
    }else if(result5 == so){
        cha5.innerHTML = array[3];
        room5.innerHTML = heya[0];
    }else if(result5 == ma){
        cha5.innerHTML = array[4];
        room5.innerHTML = heya[1];
    }
}
//長くなってごめんなさい、今後もっとコンパクトにまとめられるようにします。。