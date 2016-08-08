function tab() {
  return {
    scope: {
      label: '@'
    },
    transclude: true,
    require: '^tabs',
    controllerAs: 'tabs',
    template: [
      '<div class="tabs__content" ng-if="tab.selected">',
        '<div ng-transclude></div>',
      '</div>'
    ].join(''),
    link: function($scope,$element,$attrs,$ctrl){
      $scope.tab = { label: $scope.label, selected: false };
      $ctrl.addTab($scope.tab);
    }
  }
}
angular
  .module('app')
  .directive('tab',tab);
