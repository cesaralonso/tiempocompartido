'use-strict'
var idMem,
    idUser,
    prop_email,
    prop_ciudad,
    prop_iduser;

/*global google*/
app.controller('propertyCtrl', ['$scope', '$rootScope', '$routeParams', '$location', '$http', 'Data', function($scope, $rootScope, $routeParams, $location, $http, Data) {
    
    $scope.agregaComentario = function() {
        Data.post('agregacomentario', {
            idUser: "3594",
            idMem: idMem,
            pregunta: $scope.comentario
        }).then(function(results) {
            Data.toast(results);
            if (results.status == "success") {
                alert("comentario");
            }
        });
    }

    var imagen = [];

    $scope.enviarContacto = function() {

      var titulo = "Interesado en " + $scope.contacto.interes + " de tu tiempo compartido.";
      var cuerpo = "Datos del interesado. Nombre: " + $scope.contacto.fullname + ", Teléfono: " + $scope.contacto.telefono + ". Mensaje: " + $scope.contacto.mensaje;

        var contacto = {
            'titulo': titulo,
            'cuerpo': cuerpo,
            'id_envia': "3594",
            'id_recibe': prop_iduser,
            'categoria':'pregunta',
            'email_envia': $scope.contacto.email,
            'email_recibe': prop_email,
            'idMem': idMem
        }
        Data.post("enviarcontacto",contacto).then(function(result) {
            console.log("Enviar forma de contacto");
            console.log(result);
        });
    }

    $scope.getPropiedad = function(customer) {
        Data.get("propiedad/" + customer.idMem).then(function(results) {
            console.log(results);
            Data.toast(results);
            if (results.status == "success") {
                idMem = results.data.idMem;
                prop_email = results.data.usuario.email;
                prop_ciudad = results.data.ciudad;
                prop_iduser = results.data.usuario.id;


                //RELACIONADAS
                $scope.relacionadas();

                //Mapa
                var cities = [{
                    city: results.data.ciudad,
                    desc: results.data.informacion,
                    lat: results.data.googlemaps.latitude,
                    long: results.data.googlemaps.longitude
                }];
                var mapOptions = {
                    zoom: 4,
                    center: new google.maps.LatLng(results.data.googlemaps.latitude, results.data.googlemaps.longitude),
                    mapTypeId: google.maps.MapTypeId.TERRAIN
                }
                $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
                $scope.markers = [];
                var infoWindow = new google.maps.InfoWindow();
                var createMarker = function(info) {
                    var marker = new google.maps.Marker({
                        map: $scope.map,
                        position: new google.maps.LatLng(info.lat, info.long),
                        title: info.city
                    });
                    marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
                    google.maps.event.addListener(marker, 'click', function() {
                        infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
                        infoWindow.open($scope.map, marker);
                    });
                    $scope.markers.push(marker);
                }
                for (i = 0; i < cities.length; i++) {
                    createMarker(cities[i]);
                }
                $scope.openInfoWindow = function(e, selectedMarker) {
                    e.preventDefault();
                    google.maps.event.trigger(selectedMarker, 'click');
                }
                $scope.membresia = results.data;
                var imagenes = results.data.imagen;
                for (x = 0; x < imagenes.length; x++) {
                    imagen[x] = imagenes[x].dirImgs + imagenes[x].src;
                }
                $scope.index = 0;
                $scope.images = imagen;
                // callbacks for change in slides
                $scope.updateTsPrevious = function() {
                    $scope.tsPrevious = +new Date();
                };
                $scope.updateTsNext = function() {
                    $scope.tsNext = +new Date();
                };
            }
        });
    };
    $scope.getPropiedad($routeParams);

    $scope.relacionadas = function() {

        Data.post('relacionadas',{
          ciudad:prop_ciudad
        }).then(function(results) {
            Data.toast(results);
            console.log(results);

            $scope.relacionadas = results.data;

            $scope.breakpoints = [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4
                }
            }, {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1
                }
            }];
        });
    }

}]).directive('wallopSlider', function() {
    return {
        template: '<div class="wallop-slider {{animationClass}}"><ul class="wallop-slider__list"><li class="wallop-slider__item {{itemClasses[$index]}}" ng-repeat="i in images"><img src="{{i}}"></li></ul><div class="text-center"><button ng-show="images.length>1" class="st-button wallop-slider__btn wallop-slider__btn--previous btn btn-success btn--previous" ng-disabled="prevDisabled" ng-click="onPrevButtonClicked()">Ver imagen anterior</button> <button ng-show="images.length>1" class="st-button wallop-slider__btn wallop-slider__btn--next btn btn-success btn--next" ng-disabled="nextDisabled" ng-click="onNextButtonClicked()">Ver imagen siguiente</button></div></div>',
        restrict: 'EA',
        transclude: true,
        replace: false,
        scope: {
            images: '=',
            animation: '@',
            currentItemIndex: '=',
            onNext: '&',
            onPrevious: '&'
        },
        controller: function($scope, $timeout) {
            $scope.itemClasses = [];
            $scope.$watch('images', function(images) {
                if (images.length) {
                    _goTo(0);
                }
            });
            $scope.$watch('itemClasses', function(itemClasses) {
                console.log('itemClasses', itemClasses);
            });
            // set animation class corresponding to animation defined in CSS. e.g. rotate, slide
            if ($scope.animation) {
                $scope.animationClass = 'wallop-slider--' + $scope.animation;
            }
            var _displayOptions = {
                btnPreviousClass: 'wallop-slider__btn--previous',
                btnNextClass: 'wallop-slider__btn--next',
                itemClass: 'wallop-slider__item',
                currentItemClass: 'wallop-slider__item--current',
                showPreviousClass: 'wallop-slider__item--show-previous',
                showNextClass: 'wallop-slider__item--show-next',
                hidePreviousClass: 'wallop-slider__item--hide-previous',
                hideNextClass: 'wallop-slider__item--hide-next'
            };

            function updateClasses() {
                if ($scope.itemClasses.length !== $scope.images.length) {
                    $scope.itemClasses = [];
                    for (var i = 0; i < $scope.images.length; i++) {
                        $scope.itemClasses.push('');
                    }
                }
            }

            function _nextDisabled() {
                console.log('$scope.currentItemIndex', $scope.currentItemIndex, $scope.images.length);
                return ($scope.currentItemIndex + 1) === $scope.images.length;
            }

            function _prevDisabled() {
                return !$scope.currentItemIndex;
            }

            function _updatePagination() {
                $scope.nextDisabled = _nextDisabled();
                $scope.prevDisabled = _prevDisabled();
            }

            function _clearClasses() {
                for (var i = 0; i < $scope.images.length; i++) {
                    $scope.itemClasses[i] = '';
                }
            }
            // go to slide
            function _goTo(index) {
                console.log('_goTo', index);
                if (index >= $scope.images.length || index < 0 || index === $scope.currentItemIndex) {
                    if (!index) {
                        $scope.itemClasses[0] = _displayOptions.currentItemClass;
                    }
                    return;
                }
                _clearClasses();
                $scope.itemClasses[$scope.currentItemIndex] = (index > $scope.currentItemIndex) ? _displayOptions.hidePreviousClass : _displayOptions.hideNextClass;
                var currentClass = (index > $scope.currentItemIndex) ? _displayOptions.showNextClass : _displayOptions.showPreviousClass;
                $scope.itemClasses[index] = _displayOptions.currentItemClass + ' ' + currentClass;
                $scope.currentItemIndex = index;
                _updatePagination();
            }
            // button event handlers
            // consider using the ng-tap directive to remove delay
            $scope.onPrevButtonClicked = function() {
                _goTo($scope.currentItemIndex - 1);
            };
            $scope.onNextButtonClicked = function() {
                _goTo($scope.currentItemIndex + 1);
            };
            $scope.$watch('currentItemIndex', function(newVal, oldVal) {
                if (oldVal > newVal) {
                    if (typeof $scope.onPrevious === 'function') {
                        $scope.onPrevious();
                    }
                } else {
                    if (typeof $scope.onNext === 'function') {
                        $scope.onNext();
                    }
                }
            });
        }
    };
});