(function () {
    'use strict';
    angular.module('glance.utils')
        .config(configure);

    /* @ngInject */
    function configure(cfpLoadingBarProvider) {
        ////
        cfpLoadingBarProvider.includeSpinner = false;
    }
})();
