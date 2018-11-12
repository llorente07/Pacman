// MAPA
var mapa = new Array();
mapa = [

    mapa [30] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    mapa [29] = [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    mapa [28] = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
    mapa [27] = [0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    mapa [26] = [0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    mapa [25] = [0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0],
    mapa [24] = [0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
    mapa [23] = [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
    mapa [22] = [0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0],
    mapa [21] = [0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0],
    mapa [20] = [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    mapa [19] = [0, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
    mapa [18] = [0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0],
    mapa [17] = [0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0],
    mapa [16] = [0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    mapa [15] = [0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    mapa [14] = [0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    mapa [13] = [0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    mapa [12] = [0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    mapa [11] = [0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    mapa [10] = [0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0],
    mapa [9] = [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0],
    mapa [8] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    mapa [7] = [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    mapa [6] = [0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
    mapa [5] = [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    mapa [4] = [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    mapa [3] = [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    mapa [2] = [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    mapa [1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

var lorente = new Array();
var Fanta1 = new Array();
var Fanta2 = new Array();
var Fanta3 = new Array();
var Pacman = 0;
var Direc = new Array();

function PROBA() {
    IniciLorente(lorente);
    IniciFantasma(Fanta1);
    IniciFantasma(Fanta2);
    IniciFantasma(Fanta3);
    Crear();
    setInterval(Moviment, 260);
}

function Crear() {
    var map = "";
    for (var i = 0; i < 30; i++) {
        for (var j = 0; j < 30; j++) {
            if (mapa[i][j] == 1) {
                map += "&nbsp;";
            } else if (mapa[i][j] == 2) {
                map += "<span class='Llorente'>P</span>";
            } else if (mapa[i][j] == 3) {
                map += "<span class='Fanta'>F</span>";
            } else
                map += "*";
        }
        map += "<br>";
    }

    document.getElementById("mapa").innerHTML = map;
}


function IniciLorente(Llorente) {
    var x, y;

    do {
        x = Math.floor((Math.random() * 30) + 0);
        y = Math.floor((Math.random() * 30) + 0);
    } while (!ComPos(y, x))



    Llorente[1] = x;
    Llorente[2] = y;
    Llorente[3] = DirInici(y, x);
    Llorente[4] = DirInici(y, x);


    mapa[y][x] = 2;

}


function IniciFantasma(Fanta) {
    var x, y;
    var separats = false;

    do {
        x = Math.floor((Math.random() * 30) + 0);
        y = Math.floor((Math.random() * 30) + 0);
    } while (!ComPos(y, x))


    Fanta[1] = x;
    Fanta[2] = y;
    Fanta[3] = DirInici(y, x);


    mapa[y][x] = 3;
}

function Moviment() {

    MFanta(Fanta1);
    MFanta(Fanta2);
    MFanta(Fanta3);
    Pacman++;

    Crear();
}

function ComPos(y, x) {
    var C = false;
    if (mapa[y][x] == 1) {
        C = true;
    }
    return C;
}

function ComDirec(Mur, Direc) {
    var x = Mur[2];
    var y = Mur[1];

    if (ComPos(x + 1, y) == 1)
        Direc[1] = 1;
    else
        Direc[1] = 0;
    if (ComPos(x, y + 1) == 1)
        Direc[2] = 1;
    else
        Direc[2] = 0;
    if (ComPos(x - 1, y) == 1)
        Direc[3] = 1;
    else
        Direc[3] = 0;
    if (ComPos(x, y - 1) == 1)
        Direc[4] = 1;
    else
        Direc[4] = 0;
}


function DirInici(y, x) {
    var Direc = new Array();
    var Elliure = false;
    var DirIn;
    var aux;


    if (ComPos(y + 1, x) == 1)
        Direc[1] = 1;
    else
        Direc[1] = 0;
    if (ComPos(y, x + 1) == 1)
        Direc[2] = 1;
    else
        Direc[2] = 0;
    if (ComPos(y - 1, x) == 1)
        Direc[3] = 1;
    else
        Direc[3] = 0;
    if (ComPos(y, x - 1) == 1)
        Direc[4] = 1;
    else
        Direc[4] = 0;


    do {
        aux = Math.floor((Math.random() * 4) + 1);
        if (Direc[aux] == 1) {
            Elliure = true;
            DirIn = aux;
        }
    } while (!Elliure)


    return DirIn;
}


function NDFantasma(Fanta) {
    var Elliure = false;
    var NDir;
    var aux;
    var PosDir = 0;

    ComDirec(Fanta, Direc);


    for (var i = 1; i < 5; i++) {
        if (Direc[i] === 1)
            PosDir++;
    }


    if (PosDir > 2) {
        do {
            aux = Math.floor((Math.random() * 4) + 1);
            if ((Direc[aux] == 1) && (Fanta[3] != SCont(Fanta))) {
                Elliure = true;
                NDir = aux;
            }
        } while (!Elliure)
    }


    if (PosDir <= 2) {
        do {
            aux = Math.floor((Math.random() * 4) + 1);
            if (Direc[aux] == 1) {

                if (ChoC(Direc)) {
                    Elliure = true;
                    NDir = Fanta[3];
                } else {
                    Elliure = true;
                    NDir = aux;
                }
            }
        } while (!Elliure)
    }


    Fanta[3] = NDir;
}
function MFanta(Fanta) {
    NDFantasma(Fanta);

    if (Fanta[3] === 1) {
        mapa[Fanta[2]][Fanta[1]] = 1;
        Fanta[2] += 1;
        mapa[Fanta[2]][Fanta[1]] = 3;
    }
    if (Fanta[3] === 2) {
        mapa[Fanta[2]][Fanta[1]] = 1;
        Fanta[1] += 1;
        mapa[Fanta[2]][Fanta[1]] = 3;
    }
    if (Fanta[3] === 3) {
        mapa[Fanta[2]][Fanta[1]] = 1;
        Fanta[2] += -1;
        mapa[Fanta[2]][Fanta[1]] = 3;
    }
    if (Fanta[3] === 4) {
        mapa[Fanta[2]][Fanta[1]] = 1;
        Fanta[1] += -1;
        mapa[Fanta[2]][Fanta[1]] = 3;
    }
}

function SCont(Fanta) {
    var Gira;
    if (Fanta[3] == 1)
        Gira = 3;
    if (Fanta[3] == 2)
        Gira = 4;
    if (Fanta[3] == 3)
        Gira = 1;
    if (Fanta[3] == 4)
        Gira = 2;
    return Gira;
}


function ChoC(Direc) {
    var Pas = false;
    if ((Direc[1] == 1) && (Direc[3] == 1))
        Pas = true;
    if ((Direc[2] == 1) && (Direc[4] == 1))
        Pas = true;
    return Pas;
}




