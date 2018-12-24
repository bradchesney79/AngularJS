var app = angular.module('app', []);

app.controller('mainController', function($scope) {
  $scope.message = "hello";
  $scope.cities = [
      { name: "Novi Sad", streets: ["street1", "street2"] },
      { name: "Beograd", streets: "street1, street2"  },
      { name: "Nis", streets: "street1, street2" }
                  ];
  $scope.city1 = "yey";

});

app.directive('myCity', function(){
  return{
    restrict: "E",
    template: "name: <div>{{cities.streets}}</div>"
  }
});

app.directive('myStreet', function(){
  return{
    restrict: "E",
    templateUrl: 'streets.html'
  }
});
