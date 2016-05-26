myApp.controller("mainPage", function($scope) {
	$scope.phones = [
		{
			brand: 'Sony',
			model: 'Z2',
			year: '2005',
			info: 'Sony Irure voluptate se domesticarum. Et eram exercitation ita anim aliquip id varias'
		},
		{
			brand: 'Samsung',
			model: 'J7',
			year: '2015',
			info: 'Sumsung Irure voluptate se domesticarum. Et eram exercitation ita anim aliquip id varias'
		},
		{
			brand: 'Nokia',
			model: 'Lumia',
			year: '2012',
			info: 'Nokia Irure voluptate se domesticarum. Et eram exercitation ita anim aliquip id varias'
		}
	];


	$scope.currentInfo = '';
	$scope.changeInfo = function(obj, event){

	};

});