


Template.crearEncuesta.rendered = function(){

    // Initialize color picker

    $('.demo1').colorpicker();

    var divStyle = $('.back-change')[0].style;
    $('.demo').colorpicker({
        color: divStyle.backgroundColor
    }).on('changeColor', function(ev) {
        divStyle.backgroundColor = ev.color.toHex();
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
      function handleFile(e) {
        alert("hola!!!");
          var files = e.target.files;
          var i,f;
          for (i = 0; i != files.length; ++i) {
            f = files[i];
            var reader = new FileReader();
            var name = f.name;
            reader.onload = function(e) {
              var data = e.target.result;

              var workbook;
              if(rABS) {
                /* if binary string, read with type 'binary' */
                workbook = XLSX.read(data, {type: 'binary'});
              } else {
                /* if array buffer, convert to base64 */
                var arr = fixdata(data);
                workbook = XLSX.read(btoa(arr), {type: 'base64'});
              }
              alert("archivo!");
              /* DO SOMETHING WITH workbook HERE */
            };
            reader.readAsBinaryString(f);
          }
        }
        $("#inputImage").addEventListener('submit', handleFile, false);

}
