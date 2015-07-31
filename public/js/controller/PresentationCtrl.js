'use strict';

iSlidesApp.controller('PresentationCtrl',[
    '$scope',
    '$http',
    '$location',
    'HomeService',
    'LoginService',
    'PresentationService',
    function($scope, $http, $location, HomeService, LoginService, PresentationService){
        $scope.logout = function() {
            return LoginService.logout();
        };

        $scope.create = function(){
            return PresentationService.create($scope.newPresentation);
        };

        this.dragstart = function(){
            console.log('dragstart', arguments);
        };

        this.drag = function(){
            console.log('drag', arguments);
        };

        this.dragend = function(){
            console.log('dragend', arguments);

            if(!arguments[0]) this.dropped = false;
        };

        this.dragenter = function(dropmodel){
            console.log('dragenter', arguments);
            this.active = dropmodel;
        };

        this.dragover = function(){
            console.log('dragover', arguments);
        };

        this.dragleave = function(){
            console.log('dragleave', arguments);
            this.active = undefined;
        };

        this.drop = function(dragmodel, model){
            console.log('drop', arguments);
            this.dropped = model;
        };

        this.isDropped = function(model){
            return this.dropped === model;
        };

        this.isActive = function(model){
            return this.active === model;
        };

        this.reset = function(){
            this.rect = {top:'0', left:'240px', width: '100px', height: '100px'};
            this.rect2 = {top:'200px', left:'440px', width: '100px', height: '100px'};
            this.rect3 = {top:'0', left:'440px', width: '100px', height: '100px'};
            this.rect4 = {top:'200px', left:'240px', width: '100px', height: '100px'};
        }

        this.reset();

        this.dragmodel = 'dragmodel1';
        this.dropmodels = [ 'dropmodel1', 'dropmodel2', 'dropmodel3' ];
    }
]);