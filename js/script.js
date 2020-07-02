$(document).ready(function() {
    //nav
    var navBtn=$(".mNav");
    var nav=$(".nav");
    var navCont=$(".nav_cont");
    var list=$(".menu");

    navBtn.on("click",function(e){
    e.preventDefault();
    $(this).toggleClass("active");
    nav.toggleClass("active");
    });
    if(navBtn.hasClass("active")){
    navBtn.on("click",function(){
        navCont.css({"animation-delay":"0.5s","transition-delay":"0.5s","opacity":"0"});
        list.css({"transition-delay":"0s","opacity":"0"});
    });
    }
    list.find(".nav_item").on("click", function () {
        navBtn.removeClass("active");
        nav.removeClass("active");
    });
    
    //scroll animation    
    var main = $("#section1");
    var cont2 = $("#section2");
    var cont = $("#section3>div.sec3");
    $(window).scroll(function(){
        var wScroll = $(this).scrollTop();
        
        if(wScroll>=main.offset().top){
            main.addClass("show");
        }
        if(wScroll>=cont2.offset().top-$(window).height()/3){
            cont2.addClass("show");
        }
        if(wScroll>=cont.eq(0).offset().top-$(window).height()/3){
            cont.eq(0).addClass("show");
        }
        if(wScroll>=cont.eq(1).offset().top-$(window).height()/3){
            cont.eq(1).addClass("show");
        }
        if(wScroll>=cont.eq(2).offset().top-$(window).height()/3){
            cont.eq(2).addClass("show");
        }
        if(wScroll>=cont.eq(3).offset().top-$(window).height()/3){
            cont.eq(3).addClass("show");
        }
        if(wScroll>=cont.eq(4).offset().top-$(window).height()/3){
            cont.eq(4).addClass("show");
        }
        if(wScroll>=cont.eq(5).offset().top-$(window).height()/3){
            cont.eq(5).addClass("show");
        }
        if(wScroll>=$("#section9").offset().top-$(window).height()){
            $("#section9").addClass("show");
        }            
    });

    $(window).resize(function(){
        var wWidth = $(window).width();        
        if(wWidth > 960 && $(".menu").is(":hidden") ){
            $(".nav").removeAttr("style");
        }
    });


    
    //섹션 1 캔버스 애니메이션
        var w = window.innerWidth,
            h = window.innerHeight,
            canvas = document.getElementById("bubble"),
            ctx = canvas.getContext("2d"),
            rate = 60,
            arc = 100,
            time,
            count,
            size = 7,
            speed = 20,
            lights = new Array,
            colors = ["#D4F4FA","#ffffff","#FAE0D4","#FAF4C0"];

        canvas.setAttribute("width",w);
        canvas.setAttribute("height",h);

        function init() {
          time = 0;
          count = 0;

          for(var i = 0; i < arc; i++) {
            lights[i] = {
              x: Math.ceil(Math.random() * w),
              y: Math.ceil(Math.random() * h),
              toX: Math.random() * 5 + 1,
              toY: Math.random() * 5 + 1,
              c: colors[Math.floor(Math.random()*colors.length)],
              size: Math.random() * size
            }
          }
        }

        function bubble() {
          ctx.clearRect(0,0,w,h);

          for(var i = 0; i < arc; i++) {
            var li = lights[i];

            ctx.beginPath();
            ctx.arc(li.x,li.y,li.size,0,Math.PI*2,false);
            ctx.fillStyle = li.c;
            ctx.fill();

            li.x = li.x + li.toX * (time * 0.05);
            li.y = li.y + li.toY * (time * 0.05);

            if(li.x > w) { li.x = 0; }
            if(li.y > h) { li.y = 0; }
            if(li.x < 0) { li.x = w; }
            if(li.y < 0) { li.y = h; }
          }
          if(time < speed) {
            time++;
          }
          timerID = setTimeout(bubble,1000/rate);
        }
        init();
        bubble(); 

    $(window).load(function(){
        $(".loading").delay("2000").fadeOut();
    });

    //스킬-이지파이차트
        function counter() {
            if ($(".sk .count").size()) {
                $c = $(".sk .count");

                $c.each(function () {
                    var $this = $(this);
                    $this.data("target", parseInt($this.html()));
                    $this.data("counted", false);
                    $this.html("0");
                });

                $(window).bind("scroll", function () {
                    var speed = 5000;

                    $c.each(function (i) {
                        var $t = $(this);
                        if (!$t.data("counted") && $(window).scrollTop() + $(window).height() >= $t.offset().top) {

                            $t.data("counted", true);

                            $t.animate({
                                dummy: 1
                            }, {
                                duration: speed,
                                step: function (now) {
                                    var $this = $(this);
                                    var val = Math.round($this.data("target") * now);
                                    $this.html(val);
                                },
                                easing: "easeInOutQuart"
                            });

                            // easy pie
                            $(".skill").easyPieChart({
                                barColor:"#FFB282",
                                scaleColor:"rgba(255,255,255,0)",
                                trackColor:"rgba(255,255,255,0)",
                                lineCap:"round",
                                lineWidth:"10",
                                animate:2000,
                                });
                        }
                    });
                }).triggerHandler("scroll");
            }
        }
        counter();


    console.clear();

});