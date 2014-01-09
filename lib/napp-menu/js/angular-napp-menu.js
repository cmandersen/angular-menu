/**
 *  Module
 *
 * Description
 */
angular.module('napp.menu', [])
	.directive('menu', ["$location",
		function(location) {
			return {
				restrict: "AE",
				transclude: true,
				replace: true,
				scope: {
					title: "@"
				},
				controller: function($scope) {
					$scope.items = [];

					this.addItem = function(route, element) {
						$scope.items[route] = element;

						if (route.replace("#", "") == location.path()) {
							angular.element(element).addClass("active");
						}
					};

					$scope.$on("$routeChangeStart", function() {
						var route = "#" + location.path();

						for (item in $scope.items) {
							if (item == route) {
								angular.element($scope.items[item]).addClass("active");
							} else {
								angular.element($scope.items[item]).removeClass("active");
							}
						}
					});
				},
				templateUrl: "/lib/napp-menu/partials/menu.html",
			};
		}
	])
	.directive('menuItem', function() {
		return {
			require: "^menu",
			restrict: 'AE',
			replace: true,
			transclude: true,
			scope: {
				route: "@"
			},
			link: function(scope, element, attrs, menuCtrl) {
				menuCtrl.addItem(scope.route, element);
			},
			templateUrl: "/lib/napp-menu/partials/menu-item.html",
		}
	});