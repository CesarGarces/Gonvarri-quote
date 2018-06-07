Template.login.rendered = function(){

    // Add special class for handel top navigation layout
       $('body').addClass('fondo-bg');

}

Template.login.destroyed = function(){

    // Remove special top navigation class
     $('body').addClass('fondo-bg');
};

Template.login.events({
    'submit form': function(event, template) {
        event.preventDefault();
        var correoUsuario = event.target.login.value;
        var claveUsuario = event.target.password.value;
        Meteor.loginWithPassword(correoUsuario, claveUsuario);
        Router.go('/dashboard');
        //console.log("Form submitted.");
    }
});
