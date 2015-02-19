$(document).on('ready', init);

var PLAYER_IMG_PREFIX = 'img/img_who_';
var PLAYER_IMG_SUFIX = '.png';

var futbolitos = {
	'ro': {
		'name': 'Ro',
		'description': 'RO es el capitán y estrella del Atlético. <br /><br /> Posee una técnica privilegiada y es el que orquesta el medio campo de los Leones Rayados con maestría y gran precisión. <br /><br /> Es un líder por naturaleza y es defensor del juego limpio. Tiene mucho carácter y siempre busca que exista un buen ambiente tanto en el campo como en el vestidor.',
		'image': PLAYER_IMG_PREFIX + 'ro' + PLAYER_IMG_SUFIX
	},
	'ed': {
		'name': 'Ed',
		'description': 'ED es hermano de RO y capitán del Deportivo. <br /><br />Es muy habilidoso; dribla mucho, es un matador del área chica y un goleador por naturaleza. <br /><br />Posee gran velocidad y se caracteriza por sus grandes festejos cuando mete gol.',
		'image': PLAYER_IMG_PREFIX + 'ed' + PLAYER_IMG_SUFIX
	},
	'robogol': {
		'name': 'Robogol',
		'description': 'ROBOGOL es el capitán de Robot Soccer Force. <br /><br /> Es una máquina de hacer goles y tiene mucha potencia en sus disparos. <br /><br />Al igual que RO, maneja el medio campo con mucha precisión y de manera muy inteligente.',
		'image': PLAYER_IMG_PREFIX + 'robogol' + PLAYER_IMG_SUFIX
	},
	'd10s': {
		'name': 'D10S',
		'description': 'El D10S del fútbol es un excelente jugador y el capitán del Olympo FC. <br /><br />Es bueno con el balón, gambetea, y tira con gran potencia que parece que saca rayos de sus pies. <br /><br />Es tranquilo fuera de la cancha pero tiene aires de grandeza dentro del terreno de juego.',
		'image': PLAYER_IMG_PREFIX + 'd10s' + PLAYER_IMG_SUFIX
	},
	'zombinho':{
		'name': 'Zombinho',
		'description': 'ZOMBINHO es el alma y...cuerpo de Zombie United. <br /><br />Dicen que cuando era humano era un gran rematador de cabeza. Ahora es un letal extremo en el Zombie United. <br /><br />Ataca con mucha hambre el balón y de vez en cuando le da un mordisco para que este pierda efecto si va hacia su portería.',
		'image': PLAYER_IMG_PREFIX + 'zombinho' + PLAYER_IMG_SUFIX
	},
	'tike': {
		'name': 'Tike',
		'description': 'TIKE es habilidoso como él solo. Es el capitán del Sporting Coatl. <br /><br />Conduce el balón con los pies como cualquier otro futbolito, sin embargo, lo que lo hace único es que sus tiros los hace con la cadera. <br /><br />Es un goleador con una precisión increíble.',
		'image': PLAYER_IMG_PREFIX + 'tike' + PLAYER_IMG_SUFIX
	},
    'mia': {
		'name': 'Mia',
		'description': 'MIA es la capitana de Mad Girls United. <br /><br />Es muy veloz y puede pegarle con cualquier pierna. Sus rivales siempre temen jugar contra ella debido a que es muy habilidosa con el balón. <br /><br />Es una excelente pasadora, y siempre responde en los partidos más difíciles. Juega con mucha inteligencia y le encanta correr por todo el campo.',
		'image': PLAYER_IMG_PREFIX + 'mia' + PLAYER_IMG_SUFIX
	},
	'zuri': {
		'name': 'Zuri',
		'description': 'ZURI es una estupenda futbolita con mucha habilidad. Dicen que es una artista con el balón pues es muy  habilidosa y una auténtica goleadora. <br /><br />Es la estrella y capitana de Estrellas CF.<br /><br />Le gusta mucho estar a la moda pues le gusta lo “fashion” y disfruta arreglarse mucho.',
		'image': PLAYER_IMG_PREFIX + 'zuri' + PLAYER_IMG_SUFIX
	}
}

var names = ['ro', 'ed', 'robogol', 'd10s', 'zombinho', 'tike', 'mia', 'zuri'];

var teams = {
    'atletico': {
        'name':'Atlético',
        'description':'<p>El Atlético fue fundado por marinos que llegaron a la tierra de los futbolitos. Los colores y las históricas rayas del equipo simbolizan el contraste entre el azul del mar y el cielo.</p><p>El Atlético se caracteriza por practicar un fútbol vertical, inteligente, y letal. Es el equipo más popular y exitoso de la Liga Futbolitos. Los aficionados decían que jugaban como leones por el corazón que ponían en el campo. Es por eso que se les conoce como los leones rayados del Atlético. </p>',
        'stadium':'img/img_coliseo.png'
    },
    'deportivo': {
        'name':'Deportivo',
        'description':'<p>El Deportivo fue fundado en el corazón de las tierras orientales del mundo futbolitos por un grupo de habilidosos jugadores que, cansados de ver la supremacía del Atlético, decidieron formar su propio equipo.</p><p>Visten de rojo para intimidar a los rivales mientras que la franja blanca simboliza la valentía y orgullo. Los Dragones del Depor se distinguen por su juego de gran capacidad goleadora.  El dragón en el escudo es utilizado como sinónimo de lucha y coraje. </p>',
        'stadium':'img/img_infierno.png'
    },
    'robot': {
        'name':'Robot SF <br /> (Robot Soccer Force)',
        'description':'<p>Robot Soccer Force (RSF) nace debido a la gran pasión que tenían por el fútbol las máquinas de las zonas industriales del norte. Dado su estilo mecánico de juego, RSF es uno de los equipos más ordenados de la Liga Futbolitos.</p><p>El azul y naranja son los mismos colores de los circuitos que tienen las máquinas. La banda azul representa la innovación tecnológica de las tierras del norte, mientras que el naranja es un homenaje al fútbol total que practican los robots. RSF es un equipo que suele mantener la posesión del balón mucho tiempo.</p>',
        'stadium':'img/img_arena.png'
    },
    'olympo': {
        'name':'Olympo FC',
        'description':'<p>Fundado por los mismos dioses, la leyenda cuenta que el dios del fútbol lanzó a la tierra un enorme rayo acompañado de un balón, y que al brillar el cielo apareció el famoso jersey dorado con la “V” de victoria.</p><p>El color azul representa el cielo, mientras que el amarillo simboliza el oro de los dioses. En el pecho hay una “V” que significa la victoria.</p><p>El Olympo FC es el equipo de los dioses:  poderoso, temido, y popular. Se caracteriza por tener individualidades que poseen grandes habilidades y poderes con el balón.</p>',
        'stadium':'img/img_monte.png'
    },
    'zombie': {
        'name':'Zombie United',
        'description':'<p>De las tierras bajas surge este equipo cuya fortaleza es el juego bonito. Fundado en las tierras oscuras, el Zombie United es el equipo de los no muertos, magos, espíritus, y monstruos que aman el fútbol.</p><p>El color verde representa la alegría por el juego mientras que el morado es para hacer más tenebroso el equipo. A pesar de ser uno de los equipos más indisciplinados, es de los que mejor juega  y deja jugar. La defensa no es lo suyo, y muchas veces solo se dedican a atacar. Practican un fútbol alegre, de muchas fintas y gambetas.</p>',
        'stadium':'img/img_cementerio.png'
    },
    'sporting': {
        'name':'Sporting Coatl',
        'description':'<p>Cuenta la leyenda que fue fundado por los dioses aztecas debido a que eran fanáticos del fútbol. Se dice que cerca de las pirámides fue encontrada una serpiente emplumada dominando un balón, señal de que se construiría un estadio para competir en la Liga Futbolitos.</p><p>Los colores hueso, verde, y rojo, representan la piel y plumas de la gran serpiente emplumada que aparece en el jersey y que significa habilidad y destreza. El Sporting Coatl es considerado el equipo más habilidoso  de la Liga Futbolitos. </p>',
        'stadium':'img/img_templo.png'
    },
    'mad': {
        'name':'Mad Girls United',
        'description':'<p>Mad United Girls surge como consecuencia del intenso fervor por el fútbol de las niñas en el mundo. Fue fundado por un grupo de intrépidas chicas que querían demostrar que las mujeres sabían y podían jugar fútbol mejor que hombres, máquinas, monstruos, y dioses. Y lo lograron.</p><p>Su estilo de juego se caracteriza por el ser un equipo con mucho toque de balón, de juego alegre y divertido. Son dominantes por la gran técnica que tienen, además de que cuentan con un espíritu inquebrantable.</p><p>El color rosa representa poder y fortaleza. Las futbolitas de este equipo saben que el rosa no es para niñas, sino para guerreras.</p>',
        'stadium':'img/img_coliseo.png'
    },
    'estrellas': {
        'name':'Estrellas FC',
        'description':'<p>Es el otro equipo femenino de la Liga Futbolitos que, además de jugar un gran fútbol, siempre está a la moda. Ya sea innovando con zapatos y uniformes coloridos, las futbolitas del Estrellas CF se caracterizan por tener la mejor vestimenta dentro del terreno de juego.</p><p>Las Estrellas CF se denominan así mismo como las “rockstars” del fútbol. Su creciente rivalidad con las Mad United Girls se ha convertido en un clásico en la Liga Futbolitos. No cualquiera juega para este equipo pues, solo aquellas que sepan vestir y jugar bien pueden ser una estrella.</p>',
        'stadium':'img/img_coliseo.png'
    }
}

function init() {

    $("a.modal-link").on("click", function modalDialog(){

        var team = $(this).attr('data-tname');
        var close ='<a class="close"> x </a>';
        var which ='<img src="img/que_equipo.png" alt="A que equipo perteneces?"/>';
        var overlay = '<div class="overlay"></div>';
        var teamImg = '<div class="'+team+' large-6 medium-2 small-1 columns">" "</div>';
        var teamContent='<div class="content large-6 medium-10 small-11 columns">'+
            '<h3>'+teams[team].name+'<h3>'+teams[team].description+ which+'</div>';
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

    $("a.stadium-link").on("click", function changeBg(){

        var team = $(this).attr('data-tname');
        var bgUrl = teams[team].stadium;
        $(".stadiums").css('background-image', 'url('+bgUrl+')');

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

 
