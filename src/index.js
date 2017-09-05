angular.module('chatter', [])
.config(function($sceDelegateProvider) {
  $sceDelegateProvider.resourceUrlWhitelist([
    'self',
    'http://chattercube.thirdtape.com/**'
  ]);
});