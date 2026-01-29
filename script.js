$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: [" Web Designer","Article Writer","Newscaster"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ " I love to read","I love playing Ukulele","I love Writing Poems/Stories"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
       

    $('.project-link').click(function(e){
    e.preventDefault();

    var type = $(this).data('type'); 
    var src = $(this).attr('href');  

    if(type === "video"){
        $('#lightbox-img').hide();
        $('#lightbox-video').attr('src', src).show()[0].play();
    } else {
        $('#lightbox-video').hide();
        $('#lightbox-img').attr('src', src).show();
    }

        $('#lightbox').fadeIn();
    });

    $('.close, .lightbox').click(function(){
        $('#lightbox-video')[0].pause(); 
        $('#lightbox').fadeOut();
    });

    $('#lightbox-img, #lightbox-video').click(function(e){
        e.stopPropagation();
    });





    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});