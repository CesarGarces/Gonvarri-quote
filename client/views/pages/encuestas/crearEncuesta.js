Template.crearEncuesta.rendered = function(){

    // Initialize color picker

    var divStyle = $('.ibox-title.back-change');
  
    $('.demo1').colorpicker().on('changeColor', function(ev) {
        divStyle.css("background-color", ev.color.toHex());
    });
    $('.demo2').colorpicker().on('changeColor', function(ev) {
        divStyle.css("color", ev.color.toHex());
    });


    var config = {
        '.chosen-select'           : {},
        '.chosen-select-deselect'  : {allow_single_deselect:true},
        '.chosen-select-no-single' : {disable_search_threshold:10},
        '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
        '.chosen-select-width'     : {width:"95%"}
    }
    for (var selector in config) {
        $(selector).chosen(config[selector]);
    }

}
