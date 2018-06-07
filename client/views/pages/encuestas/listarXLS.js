

Template.listaxlsDatos.rendered = function(){

    // Initialize dataTables
    $('.dataTables-example').dataTable({
        "dom": 'lTfigt',
        "language":{
          "url":"//cdn.datatables.net/plug-ins/1.10.13/i18n/Spanish.json"
        }



    });
    // Initialize i-check plugin
    $('.i-checks').iCheck({
        checkboxClass: 'icheckbox_square-green',
        radioClass: 'iradio_square-green'
    });
    $(".creardatos").click(function(){
      Router.go('/encuestas/cargar');

    });

    // Options for peity charts
    $("span.pie").peity("pie", {
        fill: ['#1ab394', '#d7d7d7', '#ffffff']
    });

    $(".line").peity("line",{
        fill: '#1ab394',
        stroke:'#169c81'
    });


};

Template.listaxlsDatos.helpers({
  encuestas(){
    return Encuestas.find({});
  }
});
