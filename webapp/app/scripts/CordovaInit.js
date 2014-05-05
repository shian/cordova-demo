'use strict';

var CordovaInit = function() {
    var onDeviceReady = function() {
	receivedEvent('deviceready');
    };

    var receivedEvent = function(event) {
	console.log('Start event received, bootstrapping application setup.');
	angular.bootstrap($('body'), ['webapp']);
    };

    this.bindEvents = function() {
	document.addEventListener('deviceready', onDeviceReady, false);
    };

    if(window.cordova !== undefined){
	console.log('Cordova found, waiting for device.');
	this.bindEvents();
    } else {
	console.log('Cordova not found, booting application');
	receivedEvent('manual');
    }
};

$(function() {
    console.log('Bootstrapping!');
    new CordovaInit();
});
