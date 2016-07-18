var myapp = angular.module('myApp', []);

myapp.controller('myCtrl', function ($scope, $http) {
	$scope.stateData = [];
	$scope.filterVal = '';
	$http.get('https://gist.githubusercontent.com/mshafrir/2646763/raw/8b0dbb93521f5d6889502305335104218454c2bf/states_hash.json').then((response) => {
		var data = response.data;
		for (state in data) {
			$scope.stateData.push({ short: state, long: data[state] })
		}
	});
	$scope.originalData = $scope.stateData;
	$scope.onchangelistener = () => {

	};
})

myapp.filter('letterFilter', function () {
	return function (items, letters) {
		var m = [];
		var matcher = new RegExp(letters, 'i');
		items = items.map((v) => {
			if (v.long.substr(0,letters.length).match(matcher)) {
				m.push(v);
				return v;
			}
		})
		return m;
	}
})