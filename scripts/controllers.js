/**
 * Created by Administrator on 2016/10/17.
 */
var controllers=angular.module('controllers',[]);

controllers.controller('slider',['$scope', function ($scope) {
    $scope.items=[
        {like:'#/today',class:'icon-home',txt:'今日一刻'},
        {like:'#/old',class:'icon-file-empty',txt:'往期内容'},
        {like:'#/author',class:'icon-pencil',txt:'热门作者'},
        {like:'#/column',class:'icon-menu',txt:'栏目浏览'},
        {like:'#/favo',class:'icon-heart',txt:'我的喜欢'},
        {like:'#/settings',class:'icon-cog',txt:'设置'},
    ]
}])
.controller('today',['$scope','$http','$rootScope' ,function ($scope,$http,$rootScope) {
        $rootScope.topTaggle=true;
        $rootScope.index=0;
        $rootScope.title='今日一刻';

        $http({
            url:'api/today.php?callback=JSON_CALLBACK',
            method:'jsonp'
        }).success(function (data) {
            $scope.posts=data.posts;
            $scope.date=data.date;
            $rootScope.topTaggle=false;
        })
    }])

.controller('author',['$scope','$http','$rootScope' ,function ($scope,$http,$rootScope) {
        $rootScope.topTaggle=true;
        $rootScope.index=2;
        $rootScope.title='热门作者';

        $http({
            url:'api/author.php?callback=JSON_CALLBACK',
            method:'jsonp'
        }).success(function (data) {
            $scope.authors=data.authors;
            $rootScope.topTaggle=false;
        })
    }])