/* DIRECCIO DELS FANTASMAS I JUGADOR.
 // 1 Dalt       ^
 // 2 Dreta      >
 // 3 Baix       v 
 // 4 Esquerra   <
 */

//X , Y jugador, direccio Inici i la que vol Anar
var jugador = new Array();
var fantasma1 = new Array();
var fantasma2 = new Array();
var fantasma3 = new Array();
// Creacio del Mapa 
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

function Pacman(){
    IniciJugador(jugador);
    IniciFantasma(fantasma1);
    IniciFantasma(fantasma2);
    IniciFantasma(fantasma3);
    mapa1();
}

// FUNCION PER DIBUIXAR EL MAPA.
function mapa1() {
    for (var i = 0; i < 30; i++) {
        for (var j = 0; j < 30; j++) {
            if (mapa[i][j] == 1) {
                document.write("&nbsp;");
            }
            else if(mapa[i][j] == 2) {
                document.write("P");
            }
            else if(mapa[i][j] == 3) {
                document.write("F");
            }
            else document.write("*");
        }
        document.write("<br>");
    }
}

function ComPosicio(y, x) {
    var comprobar = false;
    if (mapa[x][y] == 1) {
        comprobar = true;
    }
    return comprobar;
}

function IniciJugador(lorente) {
    var x, y;

    do {
        x = Math.floor((Math.random() * 30) + 0);
        y = Math.floor((Math.random() * 30) + 0);
    } while (!ComPosicio(y, x))

    //VALOR A LA POSICIO DEL JUGADOR.
    lorente [1] = x;
    lorente [2] = y;
    lorente [3] = DirIniciAlea(y, x);
    lorente [4] = DirIniciAlea(y, x);
    
    //DINTRE DEL MAPA
    mapa[y][x] = 2;
}

function IniciFantasma(fantasma) {
    var x, y;
    var Espai = false;

    do {
        x = Math.floor((Math.random() * 30) + 0);
        y = Math.floor((Math.random() * 30) + 0);
    } while (!ComPosicio(y, x))

    //VALORS FANTASMA
    fantasma[1] = x;
    fantasma[2] = y;
    fantasma[3] = DirIniciAlea(y, x);

    //FIQUEN AL MAPA
    mapa[y][x] = 3;
}

function DirIniciAlea(y, x) {
    var dir = new Array();
    var correcta = false;
    var DirInici;
    var aux;
    
    //Comprobacio de Direccions.
    if(ComPosicio(y + 1 x) = 1) dir[1] = 1;
    else dir[1] = 0;
    if(ComPosicio(y, x + 1) = 1) dir[2] = 1;
    else dir[2] = 0;
    if(ComPosicio(y - 1, x) = 1) dir[3] = 1;
    else dir[3] = 0;
    if(ComPosicio(y, x - 1) = 1) dir[4] = 1;
    else dir[4] = 0;

    do {
        aux = Math.floor((Math.random() * 4) + 1);
        if(dir [aux] = 1) {
            correcta = true;
            DirInici = aux;
        }
    } while (!correcta)

    //retornem la direccio inicial
    return DirInici;
}
