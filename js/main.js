$(document).on('ready', init);


var names = ['ro', 'ed', 'robogol', 'd10s', 'zombinho', 'tike'];
var PLAYER_IMG_PREFIX = 'img/img_who_'

function init() {
	
	$('.who-players li').each(function(index, element){
		
		var playerElement = $(element);
		var playerName = $(element).attr('data-fname');
		var playerImage = $('.who-players-image img');

		$(element).on('click', function changePlayer(){		
			var title = $('.who-players-info h3');
			title.removeClass();			

			switch(playerName){
				case 'ro':										
					title.addClass(names[0]);
					title.html(names[0]);
					console.log(playerImage)
					playerImage.attr('src',(PLAYER_IMG_PREFIX + names[0] + '.png'));
					break;
				case 'ed':
					title.addClass(names[1]);
					title.html(names[1]);
					playerImage.attr('src',(PLAYER_IMG_PREFIX + names[1] + '.png'));
					break;
				case 'robogol':
					title.addClass(names[2]);
					title.html(names[2]);
					playerImage.attr('src',(PLAYER_IMG_PREFIX + names[2] + '.png'));
					break;
				case 'd10s':
					title.addClass(names[3]);
					title.html(names[3]);
					playerImage.attr('src',(PLAYER_IMG_PREFIX + names[3] + '.png'));
					break;
				case 'zombinho':
					title.addClass(names[4]);
					title.html(names[4]);
					playerImage.attr('src',(PLAYER_IMG_PREFIX + names[4] + '.png'));
					break;
				case 'tike':
					title.addClass(names[5]);
					title.html(names[5]);
					playerImage.attr('src',(PLAYER_IMG_PREFIX + names[5] + '.png'));
					break;
			}
		});

	});	
}