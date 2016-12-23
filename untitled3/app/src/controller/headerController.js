/**
 * Created by zhipeng on 16/12/17.
 */
angular.module('app').controller('headCtrl', function($scope) {

    $scope.menu = [false,false,false,true];
    $scope.menuSelect = 3;
    $scope.menuClick = function(e){

        $scope.menu = $scope.menu.map(function(e,i){
            console.log(e,i);
            return false;
        });
        $scope.menuSelect = e;
        $scope.menu[e] = true;

        //$(this).find("div").addClass(".active")

    }

     $scope.menuOver = function(e){

         if($scope.menuSelect == e){

         }else {
             $scope.menu[e] = true;
         }
         //$(this).find("div").addClass(".active")

     }

    $scope.menuLeave = function(e){

        if($scope.menuSelect == e){

        }else{
            $scope.menu[e] = false;

        }

    }


})