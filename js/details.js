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

	function selectPerson(evt) {
		evt.preventDefault();

		var ID = $(evt.target).attr('data-person');
		EVT.emit('person-selected', ID);
	}

	function init() {
		$content = $("[rel=js-details]");

		$content.on("click", "[rel=js-select-person]", selectPerson);
		EVT.on("person-selected", loadPerson);
	}

	EVT.on("init", init);

    public_api = {
        init: init,
        loadPerson: loadPerson
    };

    return public_api;

}());
