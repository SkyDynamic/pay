document.onreadystatechange=function () {
    if (document.readyState=="complete"){
         loadingFade();
    }
}
function loadingFade() {
var opacity=1;
var loadingBackground=document.getElementById('loading_bg');
var time=setInterval(function () {
    if (opacity<=0){
         clearInterval(time);
         //loadingPage.remove();
         $('#loading').remove();
         $('#pay').fadeIn(2500)
    }

    loadingBackground.style.opacity=opacity;
    opacity-=0.4;
},100);
}
