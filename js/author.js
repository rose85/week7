

	//1.
	$(document).ready(setSLIDEup);

	//2.
	 function setSLIDEup() {
		slideTheSlides();
	}

	//3
	 function slideTheSlides() {
		var theLast = $('.slides img:last');


		theLast.animate({'opacity':'0'},4000,function(){
			theLast.prependTo('.slides');
			theLast.css({'opacity':'1'});

		setTimeout(slideTheSlides,3000);
	});
	}