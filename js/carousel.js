/*global
 $
*/

var Carousel = (function() {
    "use strict";
    var $items, $content, $left, $right;
    var position, maxPosition;
    var public_api;

    function scrollLeft(evt) {
        
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        if (position > 0) {
            position = Math.max(0,position - 250);
        }

        $items.css({ left: (-position) + "px" });
    }

    function scrollRight(evt){
        evt.preventDefault();
        evt.stopPropagation();
        evt.stopImmediatePropagation();

        if (position < maxPosition) {
            position = Math.min(maxPosition,position + 250);
        }

        $items.css({ left: (-position) + "px" });
    }

    function clickPerson(evt) {
		var ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/,"$1");

        EVT.emit("person-selected", ID);
		//Details.loadPerson(ID);
    }

    function init() {
        $content = $("[rel=js-carousel] > [rel=js-content]");
        $left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
        $right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");

        $items = $content.children("[rel=js-items]");

        var contentWidth = $content.width();
        var itemsWidth = $items.width();
        position = 0;
        maxPosition = (itemsWidth - contentWidth);

        $left.on("click", scrollLeft);
        $right.on("click", scrollRight);

        $items.on("click", "[rel*='js-item-']", clickPerson);
    }

    public_api = {
        init: init
    };

    return public_api;

}());