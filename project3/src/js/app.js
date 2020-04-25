$ (function(){

    let header = $("#header");
    let introH = header.height();
    let scrollPos = $(window).scrollTop();


    $(window).on("scroll", function() {
        scrollPos = $(this).scrollTop();

        if(scrollPos > introH){
            header.addClass("fixed");
        }else{
            header.removeClass("fixed");
        }
    });


    /*scroll*/


    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate ({
            scrollTop: elementOffset 
        }, 700);

    });


    /*nav*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on('click', function(event){
        event.preventDefault();

        nav.toggleClass("show");

    });

});
