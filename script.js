
$(document).ready(



function(){  

    $(window).scroll(sticky_relocate);
    sticky_relocate();

	$('.circle').click(function()
	{
		$('.circle').css('background', 'white');
		$('.circle').find('img').hide();		
		$('.circle').toggle("slow");
		$('.icon').css('visibility', 'visible');
		//$('.icon').css('background-color', 'yellow');
	}
	)
	



$('.icon').hover(
	
	//hovering over icon will cause it to change colors and sink in
   	function()
	{
   	$(this).addClass('active');
	$(this).find('img').css('margin-top', '10px');
	$(this).find('img').addClass('invert');	
	}, 
    
    function(){
	//$(document).find('#shows').css('visibility', 'hidden');
	$(this).find('img').css('margin-top', '0px');
	$(this).find('img').removeClass('invert');
    $(this).removeClass('active');
	
	
	//MOCKUP
	$(this).find('img').removeClass('invert');
	//$(this).find('ul').css('visibility', 'hidden');


	$(this).find('img').removeClass('imgoff');	
    }
	);
  
  $('.circle').hover(
  
  	 function(){
    $(this).addClass('activecircle');
	//$(this).animate({top:'+=100px'}, 500)
	$(this).find('img').addClass('activehugeCircle');
	//$(this).animate({top:'-=10px'}, 500);
	$(this).find('img').css('border', 'rgba(167,160,246,0.73)');
	$(this).find('img').css('border-radius', '100%');

	},
    
    function(){
    $(this).removeClass('activecircle');
	$(this).find('img').css('border', 'transparent');

	//$(this).animate({top:'-=10px'}, 500)
	$(this).find('img').removeClass('activehugeCircle');	
	//$(this).css('background', 'black');

    }
)




}



)


function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
		$('.icon').css('height', '70px');
		$('#navcontainer ul li ul').css('visibility', 'visible');
		$('.icon').find('p').css('visibility', 'hidden');
        $('#sticky').addClass('stick');
    } else {
		$('.icon').css('height', '110px');
		$('.icon').find('p').css('visibility', 'visible');
		$('#navcontainer ul li ul').css('visibility', 'hidden');
        $('#sticky').removeClass('stick');
    }
}

 WebFontConfig = {
    google: { families: [ 'Megrim::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 
  
WebFontConfig = {
    google: { families: [ 'Fredericka+the+Great::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
  
   WebFontConfig = {
    google: { families: [ 'Orienta::latin', 'Permanent+Marker::latin', 'Amatic+SC:400,700:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
  
    WebFontConfig = {
    google: { families: [ 'IM+Fell+English+SC::latin', 'Quicksand::latin', 'Molle:400italic:latin', 'Wire+One::latin', 'Cagliostro::latin', 'Finger+Paint::latin', 'Old+Standard+TT::latin', 'Arapey::latin', 'Text+Me+One::latin', 'Marko+One::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 
  
  WebFontConfig = {
    google: { families: [ 'Lato::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
  
   WebFontConfig = {
    google: { families: [ 'Open+Sans:300italic,400,300:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();