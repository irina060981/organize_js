/*global
 $
*/

$(document).ready(function(){
	"use strict";
	var $content, $items, $left, $right;
	var contentWidth, itemsWidth, position, maxPosition;

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

	$content = $("[rel=js-carousel] > [rel=js-content]");
	$items = $content.children("[rel=js-items]");
	$left = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-left]");
	$right = $("[rel=js-carousel] > [rel=js-controls] > [rel=js-right]");

	contentWidth = $content.width();
	itemsWidth = $items.width();
	position = 0;
	maxPosition = (itemsWidth - contentWidth);

	$left.on("click", scrollLeft);
	$right.on("click", scrollRight);

});
