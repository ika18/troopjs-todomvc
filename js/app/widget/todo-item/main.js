define(['jquery',
    'troopjs-browser/component/widget',
    'template!./item.html'], function (argument, Widget, itemTemplate) {
    'use strict';

    var $ELEMENT = '$element';
    var ITEM_ROOT = 'li';
    var KEYCODE = 'keyCode';
    var CARRIAGE_RETURN = 13;
    
    function appendItem(text) {
        var me = this;

        me.append(itemTemplate, {
            'checked': false,
            'text': text
        });
    }

    return Widget.extend({
        'hub/todo-items/add': function (topic, text) {
            appendItem.call(this, text);
        },
        'dom:input[type="checkbox"]/click': function (topic, $e) {
            var $target = $($e.target);

            $target.closest(ITEM_ROOT).
                toggleClass('completed');
        },
        'dom:button.destroy/click': function (topic, $e) {
            $e.preventDefault();
            var me = this;
            var $target = $($e.target);

            $target.closest(ITEM_ROOT).remove();
            me.publish('todo-count/remove/one');
        },
        'dom:label/dblclick': function (topic, $e) {
            var $target = $($e.target);

            $target.closest(ITEM_ROOT).
                toggleClass('editing');
        },
        'dom:input.edit/keydown': function (topic, $e) {
            var me = this;
            var $target = $($e.target);
            var text = '';

            if ($e[KEYCODE] === CARRIAGE_RETURN) {
                text = $.trim($target.val());

                if (text.length) {
                    me[$ELEMENT].find('label').text(text);
                    $target.closest(ITEM_ROOT).
                        toggleClass('editing');
                }
            }
        }
    });
});