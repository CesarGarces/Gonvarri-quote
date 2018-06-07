Template.distribuidores.helpers({
  obtenerDistribuidores : function(filtro){
    distribuidores =  [
      {
          "pais": "Colombia",
          "ciudad": "Medellín",
          "nombre": "EQUIELECT S.A.S",
          "telefono": "444 3133",
          "email": "http://equielect.com.co/",
          "direccion": "Carrera 72 No. 30-53, Medellín"
      },
      {
          "pais": "Colombia",
          "ciudad": "Medellín",
          "nombre": "ELECTRICAS DE MEDELLIN - COMERCIAL S.A.",
          "telefono": "(574) 320 4469",
          "email": "http://www.edemco.co/",
          "direccion": "Cra 52 #10 -131, Medellín"
      },
      {
          "pais": "Colombia",
          "ciudad": "Medellín",
          "nombre": "ELECTROPARTES S.A.S",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "Bogotá",
          "nombre": "MATERIALES ELECTRICOS Y MECANICOS SAS",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "Bogotá",
          "nombre": "EDELCO S.A.S.",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "Bogotá",
          "nombre": "ELÉCTRICOS Y COMUNICACIONES ALFA LTDA",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "Barranquilla",
          "nombre": "FELIX TORRES Y CIA SAS",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "Barranquilla",
          "nombre": "EQUIEMET S.A.",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "Barranquilla",
          "nombre": "ISI ING. Y SERV. INDUSTRIALES S.A.S",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "Cali",
          "nombre": "ELEMENTOS ELÉCTRICOS S.A.",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "Cali",
          "nombre": "RG DISTRIBUCIONES S.A",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "Manizales",
          "nombre": "SUMINISTROS ELECT E IND SUMILEC S.A.",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "Manizales",
          "nombre": "RG DISTRIBUCIONES S.A",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "Bucaramanga",
          "nombre": "ELECTROVERA S.A.",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "Bucaramanga",
          "nombre": "INTERNACIONAL DE ELECTRICOS S.A.S",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Chile",
          "ciudad": "Santiago de Chile",
          "nombre": "DISTRIBUIDORA TÉCNICA ELÉCTRICA VITEL",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Perú",
          "ciudad": "Lima",
          "nombre": "MANELSA",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Perú",
          "ciudad": "Lima",
          "nombre": "ANIXTER INC",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Perú",
          "ciudad": "Lima",
          "nombre": "PROMELSA",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Bolivia",
          "ciudad": "Sucre",
          "nombre": "ELECTRORED BOLIVIA SRL",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Colombia",
          "ciudad": "ciudad",
          "nombre": "EYCOS (ELECTRICOS Y COMUNICACIÓN ALFA)",
          "telefono": "(+57 1) 286 66 00",
          "email": "email@pagina.com",
          "direccion": "CR 12 # 16-82"
      },
      {
          "pais": "Costa Rica",
          "ciudad": "ciudad",
          "nombre": "ALMACEN ELECTROMECANICO ALEMSA",
          "telefono": "(+506) 2 268 8007",
          "email": "email@pagina.com",
          "direccion": "San Sebastián. 250mts al Sur del Walmart- San Jose"
      },
      {
          "pais": "Guatemala",
          "ciudad": "ciudad",
          "nombre": "ELECTRICIDAD GENERAL GUATEMALA (EGENSA)",
          "telefono": "(+502) 2387-7575",
          "email": "email@pagina.com",
          "direccion": "2da. Calle 4-14 - Zona 10- Ciudad de Guatemala"
      },
      {
          "pais": "Colombia",
          "ciudad": "Bogotá",
          "nombre": "ANIXTER COLOMBIA SAS",
          "telefono": "(+57) 876 3838",
          "email": "email@pagina.com",
          "direccion": "Edificio Chico 3000 Carerra 11A #94-46 Piso 3-Bogota"
      },
      {
          "pais": "Costa Rica",
          "ciudad": "ciudad",
          "nombre": "ANIXTER INC",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "300 N. 125 O De Torre Mercedes Desarrollos IRGA , #25, San Jose de Costa Rica"
      },
      {
          "pais": "República Dominicana",
          "ciudad": "ciudad",
          "nombre": "ANIXTER INC",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Panamá",
          "ciudad": "ciudad",
          "nombre": "ANIXTER INC",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Guatemala",
          "ciudad": "ciudad",
          "nombre": "ANIXTER INC",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Nicaragua",
          "ciudad": "ciudad",
          "nombre": "ANIXTER INC",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "El Salvador",
          "ciudad": "ciudad",
          "nombre": "ANIXTER INC",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Honduras",
          "ciudad": "ciudad",
          "nombre": "ANIXTER INC",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Panamá",
          "ciudad": "ciudad",
          "nombre": "WARREN",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Panamá",
          "ciudad": "ciudad",
          "nombre": "RING RING ENERGY",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      },
      {
          "pais": "Salvador",
          "ciudad": "ciudad",
          "nombre": "SESA DEL SALVADOR",
          "telefono": "(+41)555 5555",
          "email": "email@pagina.com",
          "direccion": "cra 42 #30 -181"
      }
    ];
    return distribuidores;
  }


});

Template.distribuidores.rendered = function(){

  $('.modal').appendTo("body");
        // Options for Google map
        // More info see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
      /*  var mapOptions1 = {
            zoom: 11,
            center: new google.maps.LatLng(40.6700, -73.9400),
            // Style for Google Maps
            styles: [{
                "featureType": "water",
                "stylers": [{"saturation": 43}, {"lightness": -11}, {"hue": "#0088ff"}]
            }, {
                "featureType": "road",
                "elementType": "geometry.fill",
                "stylers": [{"hue": "#ff0000"}, {"saturation": -100}, {"lightness": 99}]
            }, {
                "featureType": "road",
                "elementType": "geometry.stroke",
                "stylers": [{"color": "#808080"}, {"lightness": 54}]
            }, {
                "featureType": "landscape.man_made",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ece2d9"}]
            }, {
                "featureType": "poi.park",
                "elementType": "geometry.fill",
                "stylers": [{"color": "#ccdca1"}]
            }, {
                "featureType": "road",
                "elementType": "labels.text.fill",
                "stylers": [{"color": "#767676"}]
            }, {
                "featureType": "road",
                "elementType": "labels.text.stroke",
                "stylers": [{"color": "#ffffff"}]
            }, {"featureType": "poi", "stylers": [{"visibility": "off"}]}, {
                "featureType": "landscape.natural",
                "elementType": "geometry.fill",
                "stylers": [{"visibility": "on"}, {"color": "#b8cb93"}]
            }, {"featureType": "poi.park", "stylers": [{"visibility": "on"}]}, {
                "featureType": "poi.sports_complex",
                "stylers": [{"visibility": "on"}]
            }, {"featureType": "poi.medical", "stylers": [{"visibility": "on"}]}, {
                "featureType": "poi.business",
                "stylers": [{"visibility": "simplified"}]
            }]
        };

        var mapOptions2 = {
            zoom: 11,
            center: new google.maps.LatLng(40.6700, -73.9400),
            // Style for Google Maps
            styles: [{
                "featureType": "all",
                "elementType": "all",
                "stylers": [{"invert_lightness": true}, {"saturation": 10}, {"lightness": 30}, {"gamma": 0.5}, {"hue": "#435158"}]
            }]
        };

        var mapOptions3 = {
            center: new google.maps.LatLng(36.964645, -122.01523),
            zoom: 18,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
            // Style for Google Maps
            styles: [{
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{"visibility": "off"}]
            }, {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [{"color": "#fffffa"}]
            }, {"featureType": "water", "stylers": [{"lightness": 50}]}, {
                "featureType": "road",
                "elementType": "labels",
                "stylers": [{"visibility": "off"}]
            }, {"featureType": "transit", "stylers": [{"visibility": "off"}]}, {
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{"lightness": 40}]
            }]
        };
  */
        var mapOptions4 = {
            zoom: 11,
            center: new google.maps.LatLng(5.6396664,-73.2470313),
            // Style for Google Maps
            styles: [{"stylers": [{"hue": "#3d93c9"}, {"visibility": "on"}, {"invert_lightness": false}, {"saturation": 60}, {"lightness": 30}]}]
        };
  /*

        var fenway = new google.maps.LatLng(42.345573, -71.098326);
        var mapOptions5 = {
            zoom: 14,
            center: fenway,
            // Style for Google Maps
            styles: [{
                featureType: "landscape",
                stylers: [{saturation: -100}, {lightness: 65}, {visibility: "on"}]
            }, {
                featureType: "poi",
                stylers: [{saturation: -100}, {lightness: 51}, {visibility: "simplified"}]
            }, {
                featureType: "road.highway",
                stylers: [{saturation: -100}, {visibility: "simplified"}]
            }, {
                featureType: "road.arterial",
                stylers: [{saturation: -100}, {lightness: 30}, {visibility: "on"}]
            }, {
                featureType: "road.local",
                stylers: [{saturation: -100}, {lightness: 40}, {visibility: "on"}]
            }, {
                featureType: "transit",
                stylers: [{saturation: -100}, {visibility: "simplified"}]
            }, {
                featureType: "administrative.province",
                stylers: [{visibility: "off"}]
            }, {
                featureType: "administrative.locality",
                stylers: [{visibility: "off"}]
            }, {featureType: "administrative.neighborhood", stylers: [{visibility: "on"}]}, {
                featureType: "water",
                elementType: "labels",
                stylers: [{visibility: "on"}, {lightness: -25}, {saturation: -100}]
            }, {
                featureType: "water",
                elementType: "geometry",
                stylers: [{hue: "#ffff00"}, {lightness: -25}, {saturation: -97}]
            }]
        };

        var panoramaOptions = {
            position: fenway,
            pov: {
                heading: 10,
                pitch: 10
            }
        };
        var panorama = new google.maps.StreetViewPanorama(document.getElementById('pano'), panoramaOptions);
  */
        // Get all html elements for map
        // var mapElement1 = document.getElementById('map1');
        // var mapElement2 = document.getElementById('map2');
        // var mapElement3 = document.getElementById('map3');
        var mapElement4 = document.getElementById('map4');

        // Create the Google Map using elements
        // var map1 = new google.maps.Map(mapElement1, mapOptions1);
        // var map2 = new google.maps.Map(mapElement2, mapOptions2);
        // var map3 = new google.maps.Map(mapElement3, mapOptions3);
        var map4 = new google.maps.Map(mapElement4, mapOptions4);
        var marker1 = new google.maps.Marker({
            position:{lat: 5.6037619, lng: -73.4896764},
            map: map4,
            icon:"/img/mapmarker.png",
            title: 'Estacion 1'
          });
          marker1.addListener('click', function() {
            $("#estacion1").click();

            });
        var marker2 = new google.maps.Marker({
            position:{lat: 5.7037619, lng: -73.4896764},
            map: map4,
            icon:"/img/mapmarker.png",
            title: 'Estacion 2'
          });
          marker2.addListener('click', function() {
            $("#estacion2").click();

            });
        var marker3 = new google.maps.Marker({
            position:{lat: 5.5037619, lng: -73.3896764},
            map: map4,
            icon:"/img/mapmarker.png",
            title: 'Estacion 3'
          });
          marker3.addListener('click', function() {
            $("#estacion3").click();

            });
        var marker4 = new google.maps.Marker({
            position:{lat: 5.6437619, lng: -73.2896764},
            map: map4,
            icon:"/img/mapmarker.png",
            title: 'Estacion 4'
          });
          marker4.addListener('click', function() {
            $("#estacion4").click();

            });
        var marker5 = new google.maps.Marker({
            position:{lat: 5.7637619, lng: -73.1896764},
            map: map4,
            icon:"/img/mapmarker.png",
            title: 'Estacion 5'
          });
          marker5.addListener('click', function() {
            $("#estacion5").click();

            });
        var marker6 = new google.maps.Marker({
            position:{lat: 5.6937619, lng: -73.1896764},
            map: map4,
            icon:"/img/mapmarker.png",
            title: 'Estacion 6'
          });
          marker6.addListener('click', function() {
            $("#estacion6").click();

            });


}
