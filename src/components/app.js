// container for entire application

angular.module('chatter')

.controller('AppCtrl', function() {
  
})

.component('app', {
  controller: 'AppCtrl',
  templateUrl: 'src/templates/app.html'
  });