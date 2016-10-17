/**
 * Created by Administrator on 2016/10/17.
 */
var app=angular.module('app',['ngRoute','controllers']);

//����ȫ�ֱ���
app.run(['$rootScope', function ($rootScope) {
    $rootScope.title='����һ��'

    $rootScope.topTaggle=true;

    $rootScope.index=0;

    $rootScope.pullRight=false;
    
    $rootScope.toggle= function () {
        $rootScope.pullRight=!$rootScope.pullRight;

        var dds=document.querySelectorAll('.navs dd');
        if($rootScope.pullRight){
            for(var i= 0,l=dds.length;i<l;i++){
                dds[i].style.transform='translate(0)';
                dds[i].style.transitionDelay='0.25s';
                dds[i].style.transitionDuration=0.15*(i+1)+'s'
            }
        }else{
            for(var i= 0,l=dds.length;i<l;i++){
                dds[i].style.transform='translate(-100%)';
                dds[i].style.transitionDelay='0';
                dds[i].style.transitionDuration=0.15*(dds.length-i)+'s'
            }
        }

    }
}])

//����·��ģ��
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/today',{
        templateUrl:'./views/center.html',
        controller:'today'
    }).when('/author',{
        templateUrl:'./views/author.html',
        controller:'author'
    })
}])