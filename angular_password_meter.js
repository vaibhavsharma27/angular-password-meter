(function () {
  'use strict';
  var TOTAL_PASSWORD_STRENGTH_SECTION = 5;
  angular.module('angular-password-meter', []).directive('passwordMeter', function () {
        return {
            restrict: 'E',
            scope: {},
            bindToController: {
                passwordStrength: '<'
            },
            controller: PasswordMeterController,
			controllerAs: 'passwordMeterController',
            template: '<div class="password-meter-container"><div ng-repeat="i in passwordMeterController.getNumber() track by $index" class="password-strength-section" ' +
            'ng-class="{\'password-strength-1\':(passwordMeterController.passwordStrength.strength === 1 && passwordMeterController.passwordStrength.strength>$index),' +
            '  \'password-strength-2\':(passwordMeterController.passwordStrength.strength === 2 && passwordMeterController.passwordStrength.strength>$index),' +
            ' \'password-strength-3\':(passwordMeterController.passwordStrength.strength === 3 && passwordMeterController.passwordStrength.strength>$index),' +
            ' \'password-strength-4\':(passwordMeterController.passwordStrength.strength === 4 && passwordMeterController.passwordStrength.strength>$index),' +
            ' \'password-strength-5\':(passwordMeterController.passwordStrength.strength === 5 && passwordMeterController.passwordStrength.strength>$index)}"></div></div>'
        };
    });
	
	function PasswordMeterController (){
            var vm = this;
            vm.peterSectionsCount = TOTAL_PASSWORD_STRENGTH_SECTION;
            vm.getNumber = function() {
                return new Array(vm.peterSectionsCount);
            };
        }
})();