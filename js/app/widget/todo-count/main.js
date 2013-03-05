define(['jquery',
    'troopjs-browser/component/widget',
    'template!./main.html'], function (argument, Widget, tTemplate) {
    'use strict';
    
    var $ELEMENT = '$element';
    var COUNT = 0;

    return Widget.extend({
        'hub:memory/todo-count/add/one': function (topic) {
            var me = this;
            var i = ++COUNT;

            me.html(tTemplate, { count: i });
        },
        'hub:memory/todo-count/remove/one': function (topic) {
            var me = this;
            var i = ++COUNT;

            if (i) {
                me.html(tTemplate, { count: i });
            } else {
                me[$ELEMENT].html();
            }
        }    
    });
});