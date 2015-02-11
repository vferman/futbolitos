$(document).on('ready', init);

var PLAYER_IMG_PREFIX = 'img/img_who_';
var PLAYER_IMG_SUFIX = '.png';

var futbolitos = {
	'ro': {
		'name': 'Ro',
		'description': 'Ro es el capitán y estrella del Atlético. <br><br> Posee una técnica privilegiada y es el que orquesta el medio campo de los leones con maestría y gran precisión.<br><br>Es un líder por naturaleza y es defensor del juego limpio. Tiene mucho carácter y siempre busca que exista un buen ambiente tanto en el campo como en el vestidor.',
		'image': PLAYER_IMG_PREFIX + 'ro' + PLAYER_IMG_SUFIX
	},
	'ed': {
		'name': 'Ed',
		'description': 'Ed es hermano de Ro y capitán del Deportivo. <br><br> Es muy habilidoso; dribla mucho, es un matador del área chica y un goleador por naturaleza. <br><br> Posee gran velocidad y se caracteriza por sus grandes festejos cuando mete gol.',
		'image': PLAYER_IMG_PREFIX + 'ed' + PLAYER_IMG_SUFIX
	},
	'robogol': {
		'name': 'Robogol',
		'description': 'Robogol es el capitán de Robot Soccer Force. <br><br> Es una máquina de hacer goles y tiene mucha potencia en sus disparos. <br><br> Al igual que Ro, maneja el medio campo con mucha precisión y de manera muy inteligente.',
		'image': PLAYER_IMG_PREFIX + 'robogol' + PLAYER_IMG_SUFIX
	},
	'd10s': {
		'name': 'D10S',
		'description': 'El D10S del fútbol es un excelente jugador y el capitán del Olimpo FC. <br><br> Es bueno con el balón, gambetea, y tira con gran potencia que parece que saca rayos de sus pies. <br><br> Es tranquilo fuera de la cancha pero tiene aires de grandeza dentro del terreno de juego. ',
		'image': PLAYER_IMG_PREFIX + 'd10s' + PLAYER_IMG_SUFIX
	},
	'zombinho':{
		'name': 'Zombinho',
		'description': 'Zombinho es el alma y...cuerpo de Zombie United. <br><br> Dicen que cuando era humano era un gran rematador de cabeza. Ahora Zombinho es un letal extremo en el Zombie United. <br><br> Ataca con mucha hambre el balón y de vez en cuando le da un mordisco para que este pierda efecto si va hacia su portería. ',
		'image': PLAYER_IMG_PREFIX + 'zombinho' + PLAYER_IMG_SUFIX
	},
	'tike': {
		'name': 'Tike',
		'description': 'Habilidoso como él solo. <br><br> Conduce el balón con los pies como cualquier otro futbolito, sin embargo, lo que lo hace único es que sus tiros los hace con la cadera. <br><br> Es un goleador con una precisión increíble.',
		'image': PLAYER_IMG_PREFIX + 'tike' + PLAYER_IMG_SUFIX
	}
}

var names = ['ro', 'ed', 'robogol', 'd10s', 'zombinho', 'tike'];

var teams = {
    'atletico': {
        'name':'Atlético',
        'description':'<p>El Atlético fue fundado por marinos que llegaron a la tierra de los futbolitos. Los colores y las historicas rayas del equipo simbolizan el contraste entre el azul del mar y el cielo.</p> <p> El Atlético se caracteriza por practicar un fútbol vertical inteligente y letal. Es el equipo más popular y exitoso de la liga futbolitos. Los Aficionados decian que jugaban como leones por el corazón que ponían en el campo. Es por eso que se les conoce como los leones rayados del Atlético. </p>' ,
        'image':'img/img_team_atletico.png' 
    },
    'deportivo': {
        'name':'Deportivo',
        'description':'<p>El Deportivo fue fundado en el corazón de las tierras orientales del mundo futbolitos por un grupo de habilidosos jugadores que, cansados de ver la supremacía de Atlético, decidieron formar su propio equipo</p> <p>Visten de rojo para intimidar a los rivales mientras que la franja blanca simboliza la valentia y el orgullo. El Depor se distingue por su juego de gran capacidad goleadora.El dragón en el escudo es utilizado como sinónimo de lucha y coraje.</p>',
        'image': 'img/img_team_deportivo.png'
    },
    'robot': {
        'name':'Robot SF <br /> (Robot Soccer Force)',
        'description':'<p>Robot Soccer Force (RSF) nace debido a la gran pasión que tenían por el fútbol las máquinas de las zonas industriales del norte. Dado su estilo mecánico de juego, RSF es uno de los equipos más ordenados de la liga</p><p>El Azul y naranja son los mismos colores de los circuitos que tienen las máquinas. La banda azul representa la innovación tecnológica de las tierras del norte, mientras que el naranja es un homenaje al fútbol total que practican los robots. RSF es un equipo que suele mantener la posesión del balón mucho tiempo</p>',
        'image':'img/img_team_robot.png'
    },
    'olympo': {
        'name':'Olympo FC',
        'description':'<p>Fundado por los mismos dioses, la leyenda cuenta que el dios del fútbol lanzó a la tierra un enorme rayo acompañado de un balón, y que al brilla el cielo apareció el famoso jersey dorado con la "V" de victoria.</p><p>El colo azul representa el cielo, mientras que el amarillo simboliza el oro de los dioses. En el pecho hay una "v" que significa la victoria.</p>',
        'image':'img/img_team_olympo.png'
    },
    'zombie': {
        'name':'Zombie United',
        'description':'<p>De las tierras bajas surje este equipo cuya fortaleza es el juego bonito. Fundado en las tierras oscuras, el Zombie United es el equipo de los no muertos, magos, espíritus y monstruos que aman el fútbol.</p><p>El color verde representa la alegria por el juego mientras que el morado es para hacer más tenebroso al equipo. A pesar de ser uno de los equipo más indisciplinados, es de los que mejor juega y deja jugar. La defensa no es lo suya y muchas veces sólo se dedican a atacar. Practican un fútbol alegre, de muchas fintas y gambetas.</p>',
        'image':'img/img_team_united.png'
    },
    'sporting': {
        'name':'Sporting Coatl',
        'description':'<p>Cuenta la leyenda que fue fundado por los dioses aztecas debido a que eran fanáticos del fútbol. Se dice que cerca de lñas pirámides fue encontrada una serpiente emplumada dominando un balón, señal de que se construiria un estadio para competir en la liga futbolitos</p>',
        'image':'img/img_team_sporting.png'
    }
}

function init() {

    $("a.modal-link").on("click", function modalDialog(){

        var team = $(this).attr('data-tname');
        var close ='<a class="close"> X </a>';
        var overlay = '<div class="overlay"></div>';
        var teamImg = '<div class="large-6 medium-6 small-12 columns content">'+
            '<img src="'+ teams[team].image +'" alt="'+ teams[team].name 
            +'"></div>';
        var teamContent='<div class="large-6 medium-6 small-12 columns content">'+
            '<h3>'+teams[team].name+'<h3>'+teams[team].description+'</div>';
        var modalWindow = '<div class="row modal-window">'+ close +
            '<div class="large-12 medium-12 small-12 columns">'+
            teamImg + teamContent +'</div></div>';
        $("body").append(overlay);
        $(".overlay").append(modalWindow);

        $('a.close').click(function(){
                $('.overlay').fadeOut().remove();		
                $(this).parent().fadeOut().remove();					 
	    });

    });

	$('.who-players li').each(function(index, element){

		var playerBgElement = $('.who > div');
		var playerElement = $(element);
		var playerName = $(element).attr('data-fname');
		var playerImage = $('.who-players-image img');
		var title = $('.who-players-info h3');
		var paragraph = $('.who-players-info p');

		$(element).on('click', function changePlayer(){

			title.removeClass();
			paragraph.removeClass();
			playerBgElement.removeClass();

			playerBgElement.addClass(playerName);
			title.addClass(playerName);
			paragraph.addClass('distorted ' + playerName);

			title.html(futbolitos[playerName].name);
			paragraph.html(futbolitos[playerName].description);
			playerImage.fadeOut('fast', function () {
				playerImage.attr('src',futbolitos[playerName].image);
				playerImage.fadeIn('fast');
			});
		});

	});	
}


//$("a.modal-link").on("click", modalDialog(e));


 
