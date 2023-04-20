$(document).ready(function(){
    
    $('.header-right img').click( function(){
        $('.search-system').fadeIn();
    });
    
    $('.inputs span').click(function(){
        $('.search-system').fadeOut();
    });

    $('.inputs input').click(function(){
        $('.search-system').fadeIn();
    }); 

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
          $('.search-system').fadeOut();
        }
    }); 
    
    $(".search-system .inputs").click( function(e) {

        if (this !== e.target) return;

        $(".search-system").fadeOut();
    } );
    
    $(".menu-item").click(function(event){

        event.preventDefault();
        $('html, body').animate({
            scrollTop: $( $(this).attr("href")).offset().top
        }, 2000);
    });
});
