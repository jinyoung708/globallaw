$(function(){
    $(".m_gnb_btn").on("click", function(){
        $("body").css({"overflow": "hidden"});
        $("#header .m_gnb_box").addClass("show");
    });

    $(".m_gnb_close").on("click", function(){
        $("body").css({"overflow": "visible"});
        $("#header .m_gnb_box").removeClass("show");
    });

    $(window).on("scroll", function(){
        pageY = window.pageYOffset;
        if(pageY>$("#content").offset().top){
            $("#header").addClass("scrolled");
        }
        else{
            $("#header").removeClass("scrolled");
        }
        
    });
    $(window).scroll();
});