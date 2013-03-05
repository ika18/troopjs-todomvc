requirejs.config({
    'baseUrl': 'js',
    'paths': {
        'jquery': 'lib/jquery/jquery-1.7.2.min',
        'troopjs-bundle': 'lib/troopjs-bundle/troopjs-bundle'
    },
    'shim': {
        exports: '$'
    },
    'map': {
        '*': {
            'template': "troopjs-requirejs/template"
        }
    }
});

require(['require',
    'jquery',
    'troopjs-bundle'], function (parentRequire, $) {

    parentRequire(["troopjs-browser/application/widget",
        "troopjs-browser/route/widget"], function AppStart(Application, RouteWidget) {
        
        Application($("html"), "bootstrap", [RouteWidget($(window), "route")]).start();
    });
});
