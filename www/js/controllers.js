angular.module('starter.controllers', [])

.controller('HomeCtrl', function($scope) {
})

.controller('GalleryCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('NewsCtrl', function($scope, $stateParams, News) {
  $scope.news = News.all();
})

.controller('AccountCtrl', function($scope) {
});
