//= require jquery3

$(document).ready(function(){

// =============== VERSION BOUTONS =================
    $('#title-prez').on('click', function() {
        $('#prez').css("display", "block");
        $('#desserts').css("display", "none");
        $('#menu').css("display", "none");
        $('#title-prez').css("background-color", "rgba(63, 63, 63, 0.5)");
        $('#title-desserts').css("background-color", "transparent");
        $('#title-menu').css("background-color", "transparent");
    });

    $('#title-menu').on('click', function() {
        $('#menu').css("display", "block");
        $('#prez').css("display", "none");
        $('#desserts').css("display", "none");
        $('#title-menu').css("background-color", "rgba(63, 63, 63, 0.5)");
        $('#title-prez').css("background-color", "transparent");
        $('#title-desserts').css("background-color", "transparent");
    });

    $('#title-desserts').on('click', function() {
        $('#desserts').css("display", "block");
        $('#prez').css("display", "none");
        $('#menu').css("display", "none");
        $('#title-desserts').css("background-color", "rgba(63, 63, 63, 0.5)");
        $('#title-prez').css("background-color", "transparent");
        $('#title-menu').css("background-color", "transparent");
    });


/* =============== VERSION LIENS ==================
    $('.tablist').on('click', '.tablinks', function(e) {
        e.preventDefault();


    var tab = $('.tablinks').removeClass('active');
    var tabcontent = $('.tabcontent').removeClass('show');


    $(this).addClass('active');
    $($(this).attr('href')).addClass('show');

    });
*/
});
