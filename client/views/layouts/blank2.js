Template.blankLayout2.rendered = function(){

    // Add special class for handel top navigation layout
       $('.footer').addClass('fixed_full');

}

Template.blankLayout2.destroyed = function(){

    // Remove special top navigation class
     $('.footer').addClass('fixed_full');
};
