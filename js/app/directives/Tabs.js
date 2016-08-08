function Tabs() {
  return {
    transclude: true,
    controller: function(){
      this.tabs = [];
      
      this.addTab = function(tab){
        this.tabs.push(tab);
      };

      this.selectTab = function(index){
        this.tabs.forEach(function(elem){ elem.selected = false });
        this.tabs[index].selected = true;
      };
    },
    controllerAs: 'tabs',
    template: [
      '<div class="tabs">',
        '<ul class="tabs__list">',
          '<li ng-repeat="tab in tabs.tabs" ng-click="tabs.selectTab($index)"',
          '<a href="" ng-click="tabs.selectTab(tab)">{{tab.label}}</a>',
          '<li>',
        '</ul>',
        '<div class="tabs__content" ng-transclude></div>',
      '<div>'
    ].join(''),
    link: function($scope,$element,$attrs,$ctrl){
      $ctrl.selectTab($attrs.active || 0)
    }
  }
}

angular
  .module('app')
  .directive('tabs',Tabs);
