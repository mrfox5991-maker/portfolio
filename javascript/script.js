$(document).ready(function(){
    

    $('.navi>li').mouseover(function(){
       //$('.submenu').stop().slideDown(500);
       $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
       //$('.submenu').stop().slideUp(500);
       $(this).find('.submenu').stop().slideUp(500);
    });

    $(function (){
        $('.tabmenu>li>a').click(function(){
            $(this).parent().addClass("active")
            .siblings().removeClass("active");
            return false;
        });
    });

    // setInterval(function(){
    // $('.slidelist').delay(20000);
    // $('.slidelist').animate({marginLeft: -800});
    // $('.slidelist').delay(20000);
    // $('.slidelist').animate({marginLeft: -1600});
    // $('.slidelist').delay(20000);
    // $('.slidelist').animate({marginLeft: 0});
    // $('.slidelist').delay(20000);
    // });

    setInterval(function(){
        $('.gallery').delay(1000);
        $('.gallery').animate({marginLeft: 0});
        $('.gallery').delay(1000);
        $('.gallery').animate({marginLeft: '-100%'});
        $('.gallery').delay(1000);
        $('.gallery').animate({marginLeft: '-200%'});
        $('.gallery').delay(1000);
    });

    setInterval(function(){
        $('.discount').delay(2000);
        $('.discount').animate({marginLeft: 0});
        $('.discount').delay(2000);
        $('.discount').animate({marginLeft: '-100%'});
        $('.discount').delay(2000);
        //$('.discount').animate({marginLeft: '-200%'});
        //$('.discount').delay(2000);
    });

    // 팝업창에 주어진 이름을 변수로 던져 저장된 쿠키가 있는지 확인     
    if(!getCookie("popup")) {
        $(".popup_overlay").fadeIn(300);
    }    
    
    $(".closePopup, popup_overlay").on("click", function(e){
        if (e.target === this) {
           $(".popup_overlay").fadeOut(300);
        }
    });

    $(".today_cl").click(function(){
        setCookie00("popup", "done", 1);
        $(".popup_overlay").fadeOut(300);
    });
});


// 쿠키 가져오기 
function getCookie(name) {
    var nameOfCookie = name + "=";
    var x = 0;
    //console.log("document.cookie.length :"+document.cookie.length);
    while (x <= document.cookie.length) {
        var y = (x + nameOfCookie.length);
        //console.log("popup :"+document.cookie.substring(x, y));
        if (document.cookie.substring(x, y) == nameOfCookie) {
            if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
                endOfCookie = document.cookie.length;
            return unescape(document.cookie.substring(y, endOfCookie));
        }
        x = document.cookie.indexOf(" ", x) + 1;
        if (x == 0) break;
    }
    return "";
} 

// 24시간 기준 쿠키 설정하기 
// 00:00 시 기준 쿠키 설정하기 // expiredays 의 새벽 00:00:00 까지 쿠키 설정 
function setCookie00(name, value, expiredays) {
    var todayDate = new Date(); todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);
    if (todayDate > new Date()) {
        expiredays = expiredays - 1;
    }
    todayDate.setDate(todayDate.getDate() + expiredays);
    document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}