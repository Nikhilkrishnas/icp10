var angularApp = angular.module('detailsApp', []);
angularApp.controller('detailsCtrl',function($scope,$http){
    $scope.getDetails=function(){
       $scope.imgurl= $scope.urllink;
    $http({
        method: 'GET',
        url:'https://limitless-garden-92158.herokuapp.com/getDetails?url='+$scope.urllink
        }).then(function successCallBack(response){
        $scope.result=response.data.rawData.outputs[0].data.colors;
        //var x="";
        //for(var results in result){
          //  x=x+results.w3c.name+":"+results.w3c.hex+"\t"+results.valueOf;
        //}
      //  $scope.details=x;
        },function errorCallBack(response){
            console.log(response);
        })
    }
});