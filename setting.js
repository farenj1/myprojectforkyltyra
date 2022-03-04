//repeater for image
$(document).ready(function(){
    for(var i = 0; i<1; i++){
        var taras = "<div class='img'><img class='imgg' id='taras1'src='img/taras.jpg'></div>";
        var franko = "<div class='img'><img class='imgg' id='franko1' src='img/franko.jpg'></div>";
        var kobyla = "<div class='img'><img class='imgg' id='kobyla1' src='img/kobyl.jpg'></div>";
        var kozyb = "<div class='img'><img class='imgg' id='kozyb1' src='img/kozyb.jpg'></div>";
        var lesya = "<div class='img'><img class='imgg' id='lesya1' src='img/lesyajpg.jpg'></div>";
        var kostenko = "<div class='img'><img class='imgg' id='kostenko1' src='img/kosten.jpg'></div>";
        $(".container").append(taras)
        $(".container").append(franko)
        $(".container").append(kobyla)
        $(".container").append(kozyb)
        $(".container").append(lesya)
        $(".container").append(kostenko) 
    }
})
//get radnom div
var arrki = ['#taras', '#franko', '#kobyla', '#kozyb', '#lesya', '#kostenko'];
var randomitem = arrki[Math.floor(Math.random()*arrki.length)];
var randomitem1 = randomitem + 1;
//random div screen 
$(document).ready(function(){
    document.getElementById('poisk').innerHTML = randomitem;
    if (randomitem == '#taras') {document.getElementById('poisk').innerHTML = "Тарас Шевченко";}
    else if(randomitem == '#franko') {document.getElementById('poisk').innerHTML = "Иван Франко";}
    else if(randomitem == '#kobyla') {document.getElementById('poisk').innerHTML = "Ольга Кобилянська";}
    else if(randomitem == '#kozyb') {document.getElementById('poisk').innerHTML = "Мыхайло Коцюбынськый";}
    else if(randomitem == '#lesya') {document.getElementById('poisk').innerHTML = "Леся Украинка";}
    else if(randomitem == '#kostenko') {document.getElementById('poisk').innerHTML = "Лина Костенко";}
    else {document.getElementById('poisk').innerHTML = "чето неизвестное";} 
    console.log(randomitem);
    console.log(randomitem1);
})
//detect var
var checky = 0;
var checknot = 0;
//detect function
function detect() {
    let selector = document.getElementById("selector");
    let taras = document.querySelector(randomitem);

    let object_1 = taras.getBoundingClientRect();
    x1 = object_1.left;
    y1 = object_1.top;
    w1 = object_1.width;
    h1 = object_1.height;

    let object_2 = selector.getBoundingClientRect();
    x2 = object_2.left;
    y2 = object_2.top;
    w2 = object_2.width;
    h2 = object_2.height;
    if (x1 < x2 + w2  && x1 + w1  > x2) {
        console.log('yep');
        checky++;
    }
    else{
        console.log('nope');
        checknot++;
    }
}
//detect function2
function detect1() {
    let selector = document.getElementById("selector");
    let taras = document.querySelector(randomitem1);

    let object_1 = taras.getBoundingClientRect();
    x1 = object_1.left;
    y1 = object_1.top;
    w1 = object_1.width;
    h1 = object_1.height;

    let object_2 = selector.getBoundingClientRect();
    x2 = object_2.left;
    y2 = object_2.top;
    w2 = object_2.width;
    h2 = object_2.height;
    if (x1 < x2 + w2  && x1 + w1  > x2) {
        console.log('yep1');
        checky++;
    }
    else{
        console.log('nope1');
        checknot++;
    }
}
//detect statistic
function statisticdetect() {
console.log("Da: " + checky);
console.log("Net: " + checknot);
}
//function on win
function win(){
    alert ("Your answer is correct😄");
    window.location.reload();
}
//function on lose
function lose(){
    alert ("Your answer is not correct😥");
    window.location.reload();
}
//win or lose detect
function winorlosedetect(){
    if (checky == 1) {win();}
    else {lose();}
}
//function for detect, detect1, statisticdetect, winorlosedetect in one
function allinone(){
    detect();
    detect1();
    statisticdetect();
    winorlosedetect();
}
//stoper function
function stopthisshit() {
    document.documentElement.style.setProperty("--gg", "paused");
    setTimeout(allinone, 100);
}
//debug output
function debug(){
    let taras = document.querySelector(randomitem);
    console.log (taras.getBoundingClientRect());}
    
