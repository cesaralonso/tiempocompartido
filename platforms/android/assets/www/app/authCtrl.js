app.controller('authCtrl', ['$scope','CONFIG', 'authFactory', 'jwtHelper', 'store', '$location', 'Data', function($scope, CONFIG, authFactory, jwtHelper, store, $location, Data)
   {
    //initially set those objects to null to avoid undefined error
    $scope.login = {};
    $scope.signup = {};
    $scope.doLogin = function (customer) {

        authFactory.login(customer).then(function(res)
        {

console.log(res);

            if(res.data && res.data.code == 0)
            {

            Data.toast(res);
                store.set('token', res.data.response.token);
                $location.path("inicio");
            }

        });




    };
    $scope.signup = {email:'',password:'',nombre:'',telefono:'',pais:'',ciudad:''};
    $scope.signUp = function (customer) {
        Data.post('signUp', {
            customer: customer
        }).then(function (results) {
            Data.toast(results);
            if (results.status == "success") {
                $location.path('inicio');
            }
        });
    };
    $scope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('login');
        });
    }


}])

.factory("authFactory", ["$http", "$q", "CONFIG", function($http, $q, CONFIG)
{
    return {
        login: function(customer)
        {
            var deferred;
            deferred = $q.defer();
            $http({
                method: 'POST',
                skipAuthorization: true,
                url: CONFIG.APIURL+'/auth/login',
                data: "email=" + customer.email + "&password=" + customer.password,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            })
            .then(function(res)
            {
                deferred.resolve(res);
            })
            .then(function(error)
            {
                deferred.reject(error);
            })
            return deferred.promise;
        }
    }
}]);

