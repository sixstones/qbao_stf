module.exports = angular.module('stf.device-data', [])
  .config(function($routeProvider) {
    $routeProvider
      .when('/deviceData', {
        template: require('./device-data.pug')
      })
  })
  .controller('DeviceDataCtrl', require('./device-data-controller'))
