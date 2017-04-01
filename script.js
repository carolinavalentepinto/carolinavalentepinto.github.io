var timer;

$( function( ) {
	// activate the close button
	// $(".portfolio-item").mouseout(function(){
	// 	// hide the section
	// 	$('.detail').hide();
	// 	console.log('close')
	// });
						

	// get width of screen
	var screenw, screenh;

	function resizeScreen( ) {
		screenw = $( window ).width();
		screenh = $( window ).height();

		console.log( screenw, screenh );
	}

	$( window ).resize( resizeScreen );
	resizeScreen( );

	function rolloverItem( event ) {

		// use variables for readability
		var item = $( this );
		var item_id = item.attr('id');
		var item_wdt = item.width( );

		console.log( "rollover: " + item_id );

		var content = $( "#content-" + item_id );
		var content_wdt = content.width( );


		var content_lft = item.position( ).left - ( content_wdt - item_wdt ) / 2;
		if ( content_lft < 10 ) content_lft = 10;
		else if ( content_lft + content_wdt > screenw - 10 )
			content_lft = screenw - content_wdt - 10;


		var content_top = event.pageY + 10;


		content.css( { 'left': content_lft + 'px',
					   'top': content_top + 'px' } )
			   .show( );
	
		// BVB show the first image in the slideshow
		$('#content-' + item_id + ' .fadein img:first').show();		
		// BVB start slideshow
		timer = setInterval(function() { slideshow(item_id) },1500);
	
	}

	function rolloutItem( ) {
		// hide the section
		$('.detail').hide();
		console.log('close');
		clearInterval(timer);
	}

	// BVB this function does the sliding thing
	function slideshow(item_id) {
		$('#content-' + item_id + ' .fadein :first-child').fadeOut().next('img').fadeIn().end().appendTo('#content-' + item_id + ' .fadein');
	}

	$(".portfolio-item").hover( rolloverItem, rolloutItem );

	// BVB hide all slideshow images in the document
	$('.fadein img').hide();
	
	
	
	/*
$(".fadein").hover(function(){
 		
 	}, 
 	function() {
 		clearInterval(timer);
 	});
*/


// 	$('.artwork img:gt(0)').hide();
// $(".artwork").hover(function(){
// timer = setInterval(function(){   $('.artwork :first-child').fadeOut()
// .next('img').fadeIn()
// .end().appendTo('.artwork');},             
// 1000);
// }, function() {
// clearInterval(timer);
// });

} );