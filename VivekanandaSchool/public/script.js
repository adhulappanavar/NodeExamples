(function()
{
   var app=angular.module("hello", [])
   
  var maincontroller=function($scope,$http)
  {
    var sucess=function(person)
    {
      $scope.students=person.data.hits.hits; 
	  console.log("logging person.data.hits");
      console.log(person.data.hits);      
      console.log($scope.students);  
    };
    
   
    $http.get("http://localhost:9200/vivekanandaschool/student/_search")
      .then(sucess)
    
    
  };
  app.controller("maincontroller", maincontroller);
}());