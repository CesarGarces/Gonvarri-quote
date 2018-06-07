Template.catalogo.rendered = function(){
  $(".select2_demo_1").select2();
  $('.product-images').slick({
      dots: true
  });
  $('#jstree1').jstree({
      'core' : {
          'check_callback' : true
      },
      'plugins' : [ 'types', 'dnd' ],
      'types' : {
          'default' : {
              'icon' : 'fa fa-folder'
          },
          'html' : {
              'icon' : 'fa fa-file-code-o'
          },
          'svg' : {
              'icon' : 'fa fa-file-picture-o'
          },
          'css' : {
              'icon' : 'fa fa-file-code-o'
          },
          'img' : {
              'icon' : 'fa fa-file-image-o'
          },
          'js' : {
              'icon' : 'fa fa-file-text-o'
          }

      }
  });
}
