var dimensions = 75*75;


function createGrid(dimensions){

	function newCell() { /* creates individual "div cells"/pixels */
		$('<div>')
			.appendTo('.wrapper')
			.addClass('cell')
	}

	for(var i=0; i<dimensions; i++){ /* fills .wrapper with pixels */
		if (i < dimensions){
			newCell();
		} 
	}
};

function resetGrid(){
	$('.wrapper').remove();
	$('<div></div>')
		.appendTo('.container')
		.addClass('wrapper')
};


$(document).ready(function(){

	$('<div><div class=\"wrapper\"></div></div>') /* creates container/border */
		.prependTo('body')
		.addClass('container')

	$('<div id=\"reset\"><p>RESET</p></div>') /* creates reset button */
		.prependTo('body')
		.addClass('button')

	createGrid(dimensions); /* creates initial grid */

	$('#reset').click(function(){ /* resets grid */
		resetGrid();
		var size = prompt("What size would you like the new sketch pad to be?", "75");
		dimensions = size*size;
		createGrid(dimensions);
		$('.cell').css({
			"height": 600/size,
			"width": 600/size
		})
		$('.cell').mouseover(function(){ /* creates drawing effect */
			$(this).css('background-color', 'black')
		})
	})

	$('.cell').mouseover(function(){ /* creates drawing effect */
		$(this).css('background-color', 'black')
	})
});
