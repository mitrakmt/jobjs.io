app.controller('AuthController', function($scope, $location, $http) {

  $scope.signup = function (userName, userEmail, userPassword) {
    $http.post("/api/signup", {name: userName, email: userEmail, password: userPassword})
      .then(function (data) {
        console.log(data)
      })
  }

});
