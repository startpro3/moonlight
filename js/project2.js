/* global $, alert, console */

$(function(){

    'use strict';

    // Adjust Header Height

    var myHeader = $('.header'),
        mySlider = $('.slider');

    myHeader.height($(window).height());

    $(window).resize(function(){
        myHeader.height($(window).height());

        // Adjust Bxslider List Item Center
        mySlider.each(function(){
            if($(window).width()<1300){
                $('.slide').css('border','0');
                $(this).css('paddingTop', ($(window).height()-$('.slider .slide').height())/2);

            }else{
                $(this).css('paddingTop', ($(window).height()-$('.slider .slide').height())/2);
            }
            
        });

    });


    // Links Add Active Class

    $('.links li a').click(function(){
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    // Adjust Bxslider List Item Center
    mySlider.each(function(){
        if($(window).width()<1300){
            $('.slide').css('border','0');
            $(this).css('paddingTop', ($(window).height()-$('.slider .slide').height())/2);

        }else{
            $(this).css('paddingTop', ($(window).height()-$('.slider .slide').height())/2);
        }

    });


    // CSS
    // $('.services').css({
    //                     'height': '1000px', 
    //                     'padding': '40px'
    //                 });
    // $('.special-heading').css('position','relative');
   
    

    // Trigger The Bx Slider
    // $('.bxslider').bxSlider();
    mySlider.bxSlider({
        pager:false
    });

    // Smooth Scroll To Div
    $('.links li a').click(function(){
        $('html, body').animate({
            scrollTop:$('#' + $(this).data('val')).offset().top
        }, 1000);
        // console.log($(this).data('val'));

    });

    // Our Auto Slider Code
    (function autoSlider(){
        $('.slider2 .active').each(function(){
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider();
                });
            }else{
                $(this).delay(3000).fadeOut(1000, function(){
                    $(this).removeClass('active');
                    $('.slider2 div').eq(0).addClass('active').fadeIn();
                    autoSlider();
                });
            }
        });
    }());


    // Trigger MixitUp
    $('#container').mixItUp();

    // shuffling
    $('.shuffle li').click(function(){
        $(this).addClass('selected').siblings().removeClass('selected');
    });

    /// adjusting NiceScroll / Trigger
    $("html").niceScroll({
        cursorcolor : "#f96ea3",
        cursorwidth : "6.5px",
        cursorborder : "#f96ea3",
        scrollspeed : "75",
        zindex:99999999,
    
    });
});
