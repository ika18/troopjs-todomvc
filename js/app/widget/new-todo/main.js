define(['jquery',
    'troopjs-browser/component/widget'], function ($, Widget) {
    'use strict';
    var $ELEMENT = '$element';
    var KEYCODE = 'keyCode';
    var CARRIAGE_RETURN = 13;

    return Widget.extend({
        'dom/keydown': function (topic, $e) {
            var me = this;
            var text = '';

            if ($e[KEYCODE] === CARRIAGE_RETURN) {
                text = $.trim(me[$ELEMENT].val());

                if (text.length) {
                    me.publish('todo-items/add', text);
                    me.publish('todo-count/add/one');
                }

                me[$ELEMENT].val('');
            }
        }
    });
});