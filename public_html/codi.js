/*
 DIRECCIONS:
 ^ == 1
 > == 2
 v == 3
 < == 4
 */

//ARRAY PER PACMAN Y ELS 3 FANTASMAS
var Pacman = new Array();
var Fantasma1 = new Array();
var Fantasma2 = new Array();
var Fantasma3 = new Array();

var mapa = new Array();
mapa = [

    mapa [30] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    mapa [29] = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    mapa [28] = [1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    mapa [27] = [1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    mapa [26] = [1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    mapa [25] = [1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
    mapa [24] = [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1],
    mapa [23] = [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
    mapa [22] = [1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    mapa [21] = [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1],
    mapa [20] = [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    mapa [19] = [1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    mapa [18] = [1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1],
    mapa [17] = [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    mapa [16] = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    mapa [15] = [1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    mapa [14] = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    mapa [13] = [1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    mapa [12] = [1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    mapa [11] = [1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    mapa [10] = [1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    mapa [9] = [1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
    mapa [8] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    mapa [7] = [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    mapa [6] = [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    mapa [5] = [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    mapa [4] = [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    mapa [3] = [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    mapa [2] = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    mapa [1] = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];


//FUNCIO PER INICIAR LES FUNCIONS
function creacio() {
    JugadorInici(Pacman);
    FantasmaInici(Fantasma1);
    FantasmaInici(Fantasma2);
    FantasmaInici(Fantasma3);
    MAPA();
}

//DIBUjAR EL MAPA
// + DIBUJAR JUGADOR + 3 FANTASMAS.
function MAPA() {
    for (var i = 0; i < 30; i++) {
        for (var j = 0; j < 30; j++) {
            if (mapa[i][j] == 1) {
                document.write("*");
            } else if (mapa[i][j] == 2) {
                document.write("P");
            } else if (mapa[i][j] == 3) {
                document.write("F");
            } else
                document.write("&nbsp;");
        }
        document.write("<br>");
    }
}

//FUNCIO PER INICIAR EL JUGADOR  EN UNA POSICIO INICIAL
function JugadorInici(lorente) {
    var x, y;

    do {
        x = Math.floor((Math.random() * 30) + 0);
        y = Math.floor((Math.random() * 30) + 0);
    } while (!CompPos(y, x))


    //DADES INICIALS DEL JUGADOR
    lorente[1] = x;
    lorente[2] = y;
    lorente[3] = DirInicial(y, x);
    lorente[4] = DirInicial(y, x);

    //DADES INICIALS DEL JUGADOR
    mapa[y][x] = 2;
}

//FUNCIO PER INICIAR ELS FANTASMAS EN UNA POSICIO INICIAL
function FantasmaInici(Fanta) {
    var x, y;
    var Sep = false;

    do {
        x = Math.floor((Math.random() * 30) + 0);
        y = Math.floor((Math.random() * 30) + 0);
    } while (!CompPos(y, x))

    //DADES INICIALS DELS FANTASMAS
    Fanta[1] = x;
    Fanta[2] = y;
    Fanta[3] = DirInicial(y, x);

    //FANTASMA AL MAPA
    mapa[y][x] = 3;
}

//FUNCIO PER COMPROBAR SI LA POSICIO ES CORRECTA
function CompPos(y, x) {
    var funciona = false;
    if (mapa[y][x] == 0) {
        funciona = true;
    }
    return funciona;
}

//DIRECCIO INICIAL ALEATORIA
function DirInicial(y, x) {
    var direc = new Array();
    var DirInic, aux, espaiLliure = false;

    //COMPROBACIO DE LES DIRECCIONS
    if (CompPos(y + 1, x) == 1)
        direc[1] = 1;
    else
        direc[1] = 0;

    if (CompPos(y, x + 1) == 1)
        direc[2] = 1;
    else
        direc[2] = 0;

    if (CompPos(y - 1, x) == 1)
        direc[3] = 1;
    else
        direc[3] = 0;

    if (CompPos(y, x - 1) == 1)
        direc[4] = 1;
    else
        direc[4] = 0;

    //DO WHILE PER COMPROBAR SI LA VARIABLE AUXILIAR NO ESTA OCUPADA
    do {
        aux = Math.floor((Math.random() * 4) + 1);
        if (direc[aux] == 1) {
            espaiLliure = true;
            DirInic = aux;
        }
    } while (!espaiLliure)

    //DIRECCIO INICIAL
    return DirInic;
}

//CONTADOR PARA QUE SE MUEVEN LOS ELEMENTOS
function movimiento(){
	var contador;
	FantasmaInici(Fanta)
                
        JugadorInici(lorente) 
         
}

setInterval('movimiento()',1000);