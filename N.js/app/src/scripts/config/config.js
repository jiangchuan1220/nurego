// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
require.config({
    paths: {
        json2: '../../bower_components/json2/json2',
        json3: '../../../bower_components/json3/lib/json3',
        requirejs: '../../bower_components/requirejs/require',
        text: '../../bower_components/requirejs-text/text',
        backbone: '../../bower_components/backbone/backbone',
        jquery: '../../bower_components/jquery/dist/jquery',
        'requirejs-text': '../../bower_components/requirejs-text/text',
        underscore: '../../bower_components/underscore/underscore',
        constants: '../services/constants',
        utils: '../services/utils',
        widgetFactory: '../services/widget_factory',
        loginModel: '../models/login',
        registrationModel: '../models/registration',
        priceListModel: '../models/price_list',
        tosModel: '../models/terms_of_service',
        tosStatusModel: '../models/terms_of_service_status',
        loginViewCtrl: '../components/login/login.ctrl',
        priceListViewCtrl: '../components/price_list/price_list.ctrl',
        registrationViewCtrl: '../components/registration/registration.ctrl',
        loginHTML: '../components/login/login.html',
        priceListHTML: '../components/price_list/price_list.html',
        priceListSingleTierHTML: '../components/price_list/price_list_single_tier.html',
        registrationHTML: '../components/registration/registration.html',
        tosHTML: '../components/terms_of_service/terms_of_service.html',
        tosViewCtrl: '../components/terms_of_service/terms_of_service.ctrl',
        categoryViewCtrl: '../components/catalog/category/category.ctrl',
        categoryHTML: '../components/catalog/category/category.html',
        categoryModel: '../models/category',
        absNuregoView: '../components/abstract/abstract.view',
        absNuregoCss: '../components/abstract/main.css',
        Nurego: '../app',
        almond: '../../bower_components/almond/almond',
        prism: '../../bower_components/prism/prism',
        'jquery-icheck': '../../bower_components/jquery-icheck/icheck.min',
        iCheck: '../../bower_components/iCheck/icheck.min',
        'font-awesome': '../../bower_components/font-awesome/fonts/*'
    },
    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        jquery: {
            exports: '$Nurego'
        },
        iCheck: {
            deps: [
                'jquery'
            ],
            exports: 'iCheck'
        }
    },
    packages: [

    ]
});