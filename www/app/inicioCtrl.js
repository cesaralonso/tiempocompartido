app.controller('inicioCtrl', function ($scope, $rootScope, $routeParams, $location, $http, Data) {
    

    $scope.titulo1 = "Buscas vacaciones de calidad y al mejor precio para toda la familia?";
    $scope.texto1 = "Experimenta una diferente forma de vacacionar, disfruta de un tiempo compartido en los clubes mas importantes del mundo haciendo trato directo con los propietarios, sin intermediación! consiguiendo los mejores precios!, ¿que esperas?, esta oportunidad es única, comienza ahora!.";






    $scope.busqueda = function (buscador) {

        console.log(buscador);
        Data.post('busqueda', {
            buscador: buscador
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $scope.resultados = results;
                $scope.total = results.total;
            }
        });
    };




    $scope.destacadas = function () {
         Data.get('destacadas').then(function (results) {
            Data.toast(results);
            console.log(results);
           // $timeout($rootScope.membresias = results,1000);

            $scope.membresias = results;
           
            $scope.breakpoints = [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 0,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ];

        });
    }
    
    $scope.destacadas();

});

