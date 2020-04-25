$ (function(){

    let header = $("#header");
    let intro = $("#intro");
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



    /*nav*/
    let nav = $("#nav");
    let navToggle = $("#navToggle");
    navToggle.on('click', function(event){
        event.preventDefault();

        nav.toggleClass("show");

    });

    

    
});