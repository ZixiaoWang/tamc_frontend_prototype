$scope.openPanel = function(index){
  angular.element(document.getElementById(index)).toggleClass("show");
  angular.element(document.getElementById("deck-"+index)).toggleClass("show");
}
$scope.openSideBar = function(){
  angular.element(document.getElementById("sidemenu")).toggleClass("open-side-menu");
  angular.element(document.getElementById("hamburger")).toggleClass("open-side-menu");
}
$scope.toEN = function(){
  $scope.templates = about.en;
  $scope.language = true;
}
$scope.toCN = function(){
  $scope.templates = about.cn;
  $scope.language = false;
}
$scope.shareToFacebook = function(){
  window.open('http://www.facebook.com/share.php?u=' + location.href);
}
$scope.shareToTwitter = function(){
  window.open('http://twitter.com/share?&amp;url=' + location.href);
}
$scope.showLity = function(event, index){
  var temIndex = index;
  $scope.lityShow = true;
  $scope.lityTitle = event[index].title;
  $scope.lityImage = event[index].image;
  $scope.lityLink = event.link;
  $scope.lityContent = event[index].content;
  $scope.nextEvent = function(){
    if(temIndex < event.length - 1){
      $scope.lityTitle = event[temIndex+1].title;
      $scope.lityImage = event[temIndex+1].image;
      $scope.lityLink = event.link;
      $scope.lityContent = event[temIndex+1].content;
      temIndex++;
    }
  }
  $scope.lastEvent = function(){
    if(temIndex > 0){
      $scope.lityTitle = event[temIndex-1].title;
      $scope.lityImage = event[temIndex-1].image;
      $scope.lityLink = event.link;
      $scope.lityContent = event[temIndex-1].content;
      temIndex--;
    }
  }
}
$scope.closeLity = function(){
  $scope.lityShow = false;
}
