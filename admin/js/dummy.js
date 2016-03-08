app.controller('shadowController', function($scope,$http){
		var dirtyJSON = localStorage.getItem('targetJSON');
		if(dirtyJSON == null){
			$http.get('/tamc/api/index.json', {headers:{'Content-Type':'application/json'}}).success(function(response){
				$scope.templates = response.content;
			}, function(error){	console.log(error);	});
		}
		$scope.templates = JSON.parse(dirtyJSON);
		/*
		$http.get($scope.dummyURL, {headers:{'Content-Type':'application/json'}}).success(function(response){
			$scope.templates = response.content;
		}, function(error){	console.log(error);	});
		*/
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
    $scope.showLity = function(event, index){
      var temIndex = index;
      $scope.lityShow = true;
      $scope.lityTitle = event[index].name;
      $scope.lityImage = event[index].image;
      $scope.lityContent = event[index].content;
      $scope.nextEvent = function(){
        if(temIndex < event.length - 1){
          $scope.lityTitle = event[temIndex+1].name;
          $scope.lityImage = event[temIndex+1].image;
          $scope.lityContent = event[temIndex+1].content;
          temIndex++;
        }
      }
      $scope.lastEvent = function(){
        if(temIndex > 0){
          $scope.lityTitle = event[temIndex-1].name;
          $scope.lityImage = event[temIndex-1].image;
          $scope.lityContent = event[temIndex-1].content;
          temIndex--;
        }
      }
    }
    $scope.closeLity = function(){
      $scope.lityShow = false;
    }
    $scope.nextReader = function(object){
      if(this.start < object.length - 4){
        this.start = this.start + 1;
        return this.start;
      }
    }
    $scope.lastReader = function(){
      if(this.start > 0){
        this.start = this.start - 1;
        return this.start;
      }
    }
    $scope.shareToFacebook = function(){
      window.open('http://www.facebook.com/share.php?u=' + location.href);
    }
    $scope.shareToTwitter = function(){
      window.open('http://twitter.com/share?&amp;url=' + location.href);
    }

})
