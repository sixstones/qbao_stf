var oboe = require('oboe')
module.exports =
  function DeviceDataCtrl($scope) {
    var defaultColumns = [
      {
        name: 'model'
      }
      , {
        name: 'carrier'
      }
      , {
        name: 'cpu'
      }
      , {
        name: 'dat'
      }
      , {
        name: 'display'
      }
      , {
        name: 'maker'
      }
      , {
        name: 'memory'
      }
      , {
        name: 'name'
      }
      , {
        name: 'os'
      }
    ]

    $scope.columns = defaultColumns
    allDevices = []

    oboe('/app/deviceData')
      .node('deviceData', function(devices) {
        for(var device in devices){
          devices[device]['model'] = device
          $scope.allDevices.push(devices[device])
        }

        console.log(allDevices)
      })

  }
