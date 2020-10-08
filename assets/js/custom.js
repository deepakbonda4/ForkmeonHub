$(function() {
    var header = $(".navbar-light");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 100) {
            header.addClass("navbar-light-after");
        } else {
            header.removeClass("navbar-light-after").addClass('navbar-light');
        }
    });
});

$('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");
    
    $('a').each(function () {
        $(this).removeClass('active');
    })
    $(this).addClass('active');
    
    var target = this.hash,
        menu = target;
    $target = $(target);
    $('html, body').stop().animate({
        'scrollTop': $target.offset().top+2
    }, 500, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
    });
    });


$(function(){
    var panelheader = $(".tab-box");
    var navbar = $(".navbar");
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 1720 && scroll < 4900) {
            navbar.removeClass("fixed-top");
            panelheader.addClass("fixed-top");
        }else{
            navbar.addClass("fixed-top");
            panelheader.removeClass("fixed-top");
        }
       
    });
});

          
          jQuery(function(t) {
            t(".lets-connect-form").submit(function() {
            return $this = t(this),
            t.post("sendemail.php", t(".lets-connect-form").serialize(), function(t) {
                "success" == t.type && $this.prev().text(t.message).fadeIn().delay(3e3)
             }),
             !1
  })
});

$(document).ready(function(){
    //    $(".tab-box-nav").click(
    //     function(){
    //         $(".tab-box-nav").removeClass('active');
    //         $(".tab-box-panel").removeClass('d-block');
    //         $(".tab-box-panel").addClass('d-none');
    //         $(this).addClass("active");
    //         $("#"+ $(this).attr("id") + "-image").removeClass("d-none");
    //         $("#"+ $(this).attr("id") + "-image").addClass("d-block");
            
    //     });
        
    $(".slider-nav-box").click(
        function(){
            $(".slider-nav-box").removeClass('active');
            $(".slider-image").removeClass('d-block');
            $(".slider-image").addClass('d-none');
            $(this).addClass("active");
            $("#"+ $(this).attr("id") + "-image").removeClass("d-none");
            $("#"+ $(this).attr("id") + "-image").addClass("d-block");
            
        });

        $(".mobile-mk-card").click(
        function(){
            $(".mobile-mk-card").removeClass('active');
            $(".mobile-mk-card-image").removeClass('d-block');
            $(".mobile-mk-card-image").addClass('d-none');
            $(this).addClass("active");
            $("#"+ $(this).attr("id") + "-image").removeClass("d-none");
            $("#"+ $(this).attr("id") + "-image").addClass("d-block");
            
        });
        
        
         $(".navbar-nav li a").click(function () {
        $(".nav-link").removeClass("active");
    var golink = $(this).hasClass("nav-link");    
        $(this).addClass("active");
});

       $(".tab-box-nav").click(function () {
        $(".tab-box-nav").removeClass("active");
    var golink = $(this).hasClass("tab-box-nav");    
        $(this).addClass("active");
});

      
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
            $('.tab-box-nav').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.tab-box-nav').removeClass("active");
                currLink.addClass("active");
            }
            else{
                currLink.removeClass("active");
            }
            });
                        }

$(document).on("scroll", onScroll);
  });
    