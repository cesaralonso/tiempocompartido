(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/js/themes/angular/main.js":[function(require,module,exports){
// CUSTOM
require('real-estate/js/_maps');

// Angular App
require('./angular/app.js');
require('./angular/config.router.js');
require('./angular/main.js');

// Directives
require('essential/js/angular/main');
require('layout/js/angular/main');
require('sidebar/js/angular/main');
require('maps/js/angular/_google-maps');
require('media/js/angular/main');
},{"./angular/app.js":"/Code/html/themes/real-estate-1.2.0/src/js/themes/angular/angular/app.js","./angular/config.router.js":"/Code/html/themes/real-estate-1.2.0/src/js/themes/angular/angular/config.router.js","./angular/main.js":"/Code/html/themes/real-estate-1.2.0/src/js/themes/angular/angular/main.js","essential/js/angular/main":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/main.js","layout/js/angular/main":"/Code/html/themes/real-estate-1.2.0/lib/layout/js/angular/main.js","maps/js/angular/_google-maps":"/Code/html/themes/real-estate-1.2.0/lib/maps/js/angular/_google-maps.js","media/js/angular/main":"/Code/html/themes/real-estate-1.2.0/lib/media/js/angular/main.js","real-estate/js/_maps":"/Code/html/themes/real-estate-1.2.0/lib/real-estate/js/_maps.js","sidebar/js/angular/main":"/Code/html/themes/real-estate-1.2.0/lib/sidebar/js/angular/main.js"}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_carousel.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('carousel', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkCarousel();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_check-all.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'check-all') {
                        el.tkCheckAll();
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_collapse.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'collapse') {
                        el.tkCollapse();
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_cover.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('cover', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function () {
                        el.tkCover();
                    }, 200);
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_datepicker.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('datepicker', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkDatePicker();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_daterangepicker.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('daterangepickerReport', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkDaterangepickerReport();
                }
            };
        } ])
        .directive('daterangepickerReservation', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkDaterangepickerReservation();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_expandable.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('expandable', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkExpandable();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_minicolors.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('minicolors', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkMiniColors();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_modal.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'modal') {
                        el.tkModal();
                    }
                    if (attrs.toggle == 'tk-modal-demo') {
                        el.tkModalDemo();
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_nestable.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('nestable', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkNestable();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_panel-collapse.js":[function(require,module,exports){
(function () {
    "use strict";

    var randomId = function () {
        /** @return String */
        var S4 = function () {
            return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
        };
        return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
    };

    angular.module('app')
        .directive('toggle', [ '$compile', function ($compile) {
            return {
                restrict: 'A',
                priority: 100,
                compile: function (el, attrs) {

                    if (attrs.toggle !== 'panel-collapse') return;

                    var body = angular.element('.panel-body', el),
                        id = body.attr('id') || randomId(),
                        collapse = angular.element('<div/>');

                    collapse
                        .attr('id', id)
                        .addClass('collapse' + (el.data('open') ? ' in' : ''))
                        .append(body.clone());

                    body.remove();

                    el.append(collapse);

                    $('.panel-collapse-trigger', el)
                        .attr('data-toggle', 'collapse')
                        .attr('data-target', '#' + id)
                        .collapse({trigger: false})
                        .removeAttr('style');

                    return function (scope, el, attrs) {
                    };

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_select2.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'select2' || attrs.toggle == 'select2-tags') {
                        el.tkSelect2();
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_selectpicker.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('selectpicker', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkSelectPicker();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_slider.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('slider', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.slider == 'default') {
                        el.tkSlider();
                    }

                    if (attrs.slider == 'formatter') {
                        el.tkSliderFormatter();
                    }

                }
            };
        } ]);

    angular.module('app')
        .directive('onSlide', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    el.tkSliderUpdate();

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_summernote.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('summernote', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkSummernote();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_tables.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'data-table') {
                        el.tkDataTable();
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_tabs.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'tab') {
                        el.click(function(e){
                            e.preventDefault();
                        });
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_touchspin.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'touch-spin') {
                        el.tkTouchSpin();
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_tree.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle == 'tree') {
                        el.tkFancyTree();
                    }

                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_wizard.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'wizard') {
                        el.tkWizard();
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/main.js":[function(require,module,exports){
require('./_panel-collapse');
require('./_carousel');
require('./_check-all');
require('./_collapse');
require('./_cover');
require('./_datepicker');
require('./_daterangepicker');
require('./_expandable');
require('./_minicolors');
require('./_modal');
require('./_nestable');
require('./_select2');
require('./_selectpicker');
require('./_slider');
require('./_summernote');
require('./_touchspin');
require('./_tables');
require('./_tabs');
require('./_tree');
require('./_wizard');
},{"./_carousel":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_carousel.js","./_check-all":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_check-all.js","./_collapse":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_collapse.js","./_cover":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_cover.js","./_datepicker":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_datepicker.js","./_daterangepicker":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_daterangepicker.js","./_expandable":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_expandable.js","./_minicolors":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_minicolors.js","./_modal":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_modal.js","./_nestable":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_nestable.js","./_panel-collapse":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_panel-collapse.js","./_select2":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_select2.js","./_selectpicker":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_selectpicker.js","./_slider":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_slider.js","./_summernote":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_summernote.js","./_tables":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_tables.js","./_tabs":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_tabs.js","./_touchspin":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_touchspin.js","./_tree":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_tree.js","./_wizard":"/Code/html/themes/real-estate-1.2.0/lib/essential/js/angular/_wizard.js"}],"/Code/html/themes/real-estate-1.2.0/lib/layout/js/angular/_gridalicious.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ '$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'gridalicious') {
                        $timeout(function(){
                            el.tkGridalicious();
                        }, 100);
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/layout/js/angular/_isotope.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ '$timeout', function ($timeout) {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'isotope') {
                        $timeout(function(){
                            el.tkIsotope();
                        }, 100);
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/layout/js/angular/_parallax.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('parallax', [ function () {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    el.tkParallax();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/layout/js/angular/_scrollable.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('scrollable', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el) {
                    el.tkScrollable();
                }
            };
        } ])
        .directive('scrollableH', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el) {
                    el.tkScrollable({ horizontal: true });
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/layout/js/angular/_sidebar-pc.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggle == 'sidebar-size-pc-demo') {
                        el.tkSidebarSizePcDemo();
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/layout/js/angular/main.js":[function(require,module,exports){
require('./_scrollable');
require('./_isotope');
require('./_parallax');
require('./_gridalicious');
require('./_sidebar-pc');
},{"./_gridalicious":"/Code/html/themes/real-estate-1.2.0/lib/layout/js/angular/_gridalicious.js","./_isotope":"/Code/html/themes/real-estate-1.2.0/lib/layout/js/angular/_isotope.js","./_parallax":"/Code/html/themes/real-estate-1.2.0/lib/layout/js/angular/_parallax.js","./_scrollable":"/Code/html/themes/real-estate-1.2.0/lib/layout/js/angular/_scrollable.js","./_sidebar-pc":"/Code/html/themes/real-estate-1.2.0/lib/layout/js/angular/_sidebar-pc.js"}],"/Code/html/themes/real-estate-1.2.0/lib/maps/js/angular/_google-maps.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggle', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (attrs.toggle !== 'google-maps') return;

                    el.tkGoogleMap();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/maps/js/google/_library.js":[function(require,module,exports){
module.exports = function () {

    var centerWindow = function (container, map, data) {

        if (data.lat && data.lng) {

            container.gmap('option', 'center', new google.maps.LatLng(data.lat, data.lng));

            map.panBy(0, -170);

            return true;

        }
        return false;
    };

    var centerMap = function (container, data) {

        if (data && data.length === 2) {

            container.gmap('option', 'center', new google.maps.LatLng(data[ 0 ], data[ 1 ]));

            return true;

        }
        return false;
    };

    var resize = function (container, map, windowData, mapData) {

        if (typeof google == 'undefined') return;

        google.maps.event.trigger(map, 'resize');

        if (! centerMap(container, mapData)) centerWindow(container, map, windowData);

    };

    return {
        centerWindow: centerWindow,
        centerMap: centerMap,
        resize: resize
    };

};
},{}],"/Code/html/themes/real-estate-1.2.0/lib/media/js/angular/_owl.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('owlBasic', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkOwlDefault();
                    }, 200);
                }
            };
        } ])
        .directive('owlMixed', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkOwlMixed();
                    }, 200);
                }
            };
        } ])
        .directive('owlPreview', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkOwlPreview();
                    }, 200);
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/media/js/angular/_slick.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('slickBasic', [ '$timeout', function ($timeout) {
            return {
                restrict: 'C',
                link: function (scope, el) {
                    $timeout(function(){
                        el.tkSlickDefault();
                    }, 200);
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/media/js/angular/main.js":[function(require,module,exports){
require('./_owl');
require('./_slick');
},{"./_owl":"/Code/html/themes/real-estate-1.2.0/lib/media/js/angular/_owl.js","./_slick":"/Code/html/themes/real-estate-1.2.0/lib/media/js/angular/_slick.js"}],"/Code/html/themes/real-estate-1.2.0/lib/real-estate/js/_maps.js":[function(require,module,exports){
(function ($) {
    "use strict";

    $(document).on('map.init', function(event, data) {

        if (data.container.is('#google-fs-realestate')) {

            var container = data.container,
                map = data.map,
                options = data.options,
                iw = data.iw.window;

            var library = require('../../maps/js/google/_library.js')();

            $(document).on('sidebar.shown sidebar.hidden', function (event, data) {
                if (data.target == '#sidebar-map' || data.target == "#sidebar-edit") {
                    var position = iw.getPosition(),
                        infoWindowData = {
                            lat: position.lat(),
                            lng: position.lng()
                        };
                    library.resize(container, map, infoWindowData, options.center);
                }
            });

            $(document).on('sidebar.shown', function (event, data) {
                if (data.target == "#sidebar-edit") {
                    $('#toggle-sidebar-edit').addClass('active');
                }
            });

            $(document).on('sidebar.hidden', function (event, data) {
                if (data.target == "#sidebar-edit") {
                    $('#toggle-sidebar-edit').removeClass('active');
                }
            });

        }

    });

})(jQuery);

},{"../../maps/js/google/_library.js":"/Code/html/themes/real-estate-1.2.0/lib/maps/js/google/_library.js"}],"/Code/html/themes/real-estate-1.2.0/lib/sidebar/js/angular/_sidebar-collapse.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('type', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (! el.is('.sidebar')) return;
                    if (attrs.type !== 'collapse') return;

                    el.tkSidebarCollapse();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/sidebar/js/angular/_sidebar-dropdown.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('type', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {

                    if (! el.is('.sidebar')) return;
                    if (attrs.type !== 'dropdown') return;

                    el.tkSidebarDropdown();
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/sidebar/js/angular/_sidebar-toggle-bar.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .directive('toggleBar', [ function () {
            return {
                restrict: 'A',
                link: function (scope, el, attrs) {
                    if (attrs.toggleBar) {
                        el.tkSidebarToggleBar();
                    }
                }
            };
        } ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/lib/sidebar/js/angular/main.js":[function(require,module,exports){
require('./_sidebar-dropdown');
require('./_sidebar-collapse');
require('./_sidebar-toggle-bar');
},{"./_sidebar-collapse":"/Code/html/themes/real-estate-1.2.0/lib/sidebar/js/angular/_sidebar-collapse.js","./_sidebar-dropdown":"/Code/html/themes/real-estate-1.2.0/lib/sidebar/js/angular/_sidebar-dropdown.js","./_sidebar-toggle-bar":"/Code/html/themes/real-estate-1.2.0/lib/sidebar/js/angular/_sidebar-toggle-bar.js"}],"/Code/html/themes/real-estate-1.2.0/src/js/themes/angular/angular/app.js":[function(require,module,exports){
(function(){
    'use strict';

    angular.module('app', [
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'ui.router',
        'ui.utils',
        'ui.jq'
    ]);

    var app = angular.module('app')
        .config(
        [ '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$interpolateProvider',
            function ($controllerProvider, $compileProvider, $filterProvider, $provide, $interpolateProvider) {
                app.controller = $controllerProvider.register;
                app.directive = $compileProvider.directive;
                app.filter = $filterProvider.register;
                app.factory = $provide.factory;
                app.service = $provide.service;
                app.constant = $provide.constant;
                app.value = $provide.value;

                $interpolateProvider.startSymbol('::');
                $interpolateProvider.endSymbol('::');
            }
        ]);

})();
},{}],"/Code/html/themes/real-estate-1.2.0/src/js/themes/angular/angular/config.router.js":[function(require,module,exports){
(function(){
    'use strict';

    angular.module('app')
        .run([ '$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ])
        .config(
        [ '$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $urlRouterProvider
                    .otherwise('/discover/map-full');

                $stateProvider
                    .state('discover', {
                        abstract: true,
                        url: '/discover',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('discover.map-full', {
                        url: '/map-full',
                        templateUrl: 'discover/map-full.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs';
                        }]
                    })
                    .state('discover.map-listing-list', {
                        url: '/map-listing-list',
                        templateUrl: 'discover/map-listing-list.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs sidebar-r-48pc-lg sidebar-r-40pc';
                        }]
                    })
                    .state('discover.map-listing-grid', {
                        url: '/map-listing-grid',
                        templateUrl: 'discover/map-listing-grid.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs sidebar-r-48pc-lg sidebar-r-40pc';
                        }]
                    })
                    .state('discover.listing', {
                        url: '/listing',
                        templateUrl: 'discover/listing.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l-sum-13';
                        }]
                    })
                    .state('discover.listing-grid', {
                        url: '/listing-grid',
                        templateUrl: 'discover/listing-grid.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l-sum-13';
                        }]
                    })
                    .state('discover.listing-map', {
                        url: '/listing-map',
                        templateUrl: 'discover/listing-map.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l-sum-13';
                        }]
                    });

                $stateProvider
                    .state('property', {
                        abstract: true,
                        url: '/property',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('property.map', {
                        url: '/map',
                        templateUrl: 'property/map.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs sidebar-r-48pc-lg sidebar-r-40pc';
                        }]
                    })
                    .state('property.property', {
                        url: '/property',
                        templateUrl: 'property/property.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs sidebar-r-25pc-lg sidebar-r-30pc';
                        }]
                    })
                    .state('property.edit', {
                        url: '/edit',
                        templateUrl: 'property/edit.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs sidebar-r-48pc-lg sidebar-r-40pc';
                        }]
                    });

                $stateProvider
                    .state('map-features', {
                        abstract: true,
                        url: '/map-features',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('map-features.themes', {
                        url: '/themes',
                        templateUrl: 'map-features/themes.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1 sidebar-r1-xs';
                        }]
                    })
                    .state('map-features.filters', {
                        url: '/filters',
                        templateUrl: 'map-features/filters.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l1';
                        }]
                    })
                    .state('map-features.markers', {
                        url: '/markers',
                        templateUrl: 'map-features/markers.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'st-layout ls-top-navbar ls-bottom-footer show-sidebar sidebar-l2';
                        }]
                    });

                $stateProvider
                    .state('front', {
                        abstract: true,
                        url: '/front',
                        template: '<div ui-view class="ui-view-main" />'
                    })
                    .state('front.home-map', {
                        url: '/home-map',
                        templateUrl: 'front/home-map.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
                        }]
                    })
                    .state('front.home-slider', {
                        url: '/home-slider',
                        templateUrl: 'front/home-slider.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'hide-sidebar ls-bottom-footer-fixed';
                        }]
                    })
                    .state('front.listing', {
                        url: '/listing',
                        templateUrl: 'front/listing.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
                        }]
                    })
                    .state('front.listing-grid', {
                        url: '/listing-grid',
                        templateUrl: 'front/listing-grid.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
                        }]
                    })
                    .state('front.property', {
                        url: '/property',
                        templateUrl: 'front/property.html',
                        controller: ['$scope', function($scope){
                            $scope.app.settings.htmlClass = 'hide-sidebar top-navbar ls-bottom-footer-fixed';
                        }]
                    });
            }
        ]
    );

})();
},{}],"/Code/html/themes/real-estate-1.2.0/src/js/themes/angular/angular/main.js":[function(require,module,exports){
(function () {
    "use strict";

    angular.module('app')
        .controller('AppCtrl', [ '$scope', '$state',
            function ($scope, $state) {

                $scope.app = {
                    settings: {
                        htmlClass: ''
                    }
                };

                $scope.$state = $state;

            } ]);

})();

},{}]},{},["./src/js/themes/angular/main.js"]);
