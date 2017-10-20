window.EVT = new EventEmitter2();

$(document).ready(function(){
	//EVT.emit("init");

	Header.init();
	Carousel.init();
	Details.init();
});