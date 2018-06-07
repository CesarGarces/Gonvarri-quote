Template.layout2.rendered = function(){

    // Add special class for handel top navigation layout
    $('body').addClass('top-navigation');
    $('#page-wrapper').css("min-height", $(window).height()  + "px");
    // Minimalize menu when screen is less than 768px
    $(window).bind("resize load", function () {
        if ($(this).width() < 769) {
            $('body').addClass('body-small')
        } else {
            $('body').removeClass('body-small')
        }
    });

}

Template.layout2.destroyed = function(){

    // Remove special top navigation class
    $('body').removeClass('top-navigation');
};
