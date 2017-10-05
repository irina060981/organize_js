/*global
 $
*/

var Details = (function() {
    "use strict";
    var $content, $items;
    var public_api;

	function loadPerson(ID){
		
		$.ajax("details/" + ID + ".html", {dataType: "text"})
		.then(function (contents) {
			$content.html(contents).show();
		});
	}

	function init() {
		$content = $("[rel=js-details]");
	}

    public_api = {
        init: init,
        loadPerson: loadPerson
    };

    return public_api;

}());
