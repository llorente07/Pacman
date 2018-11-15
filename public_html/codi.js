//MAPA
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

//VARIABLES
var lorente = new Array();
var Fanta1 = new Array();
var Fanta2 = new Array();
var Fanta3 = new Array();
var Actua;
var KO = false;
var PacM = 0;
var Direc = new Array();
var TeclaPulsada;

function Crear() {
    var canvas = document.getElementById("mapa");
    var Foto;
    for (var i = 0; i < 30; i++) {
        for (var j = 0; j < 30; j++) {
            if (mapa[i][j] == 1) {
                Foto = document.getElementById("Cami");
            } else if (mapa[i][j] == 2) {
                Foto = document.getElementById("Pacman");
            } else if (mapa[i][j] == 3) {
                Foto = document.getElementById("Fanta");
            } else
                Foto = document.getElementById("Mur");

            var ctx = canvas.getContext("2d").drawImage(Foto, j * 19, i * 19, 19, 19);
        }
    }
    document.getElementById("Punts").innerHTML = (Math.floor(PacM));
}

function StartPacman() {
    IniciLlorente(lorente);
    IniciFanta(Fanta1);
    IniciFanta(Fanta2);
    IniciFanta(Fanta3);
    Crear();
    Actua = setInterval(Moviment, 200);
}

function Moviment() {
    var element = document.getElementById("all");
    document.onkeydown = Teclado;
    MLlorente(lorente);
    MFanta(Fanta1);
    MFanta(Fanta2);
    MFanta(Fanta3);
    PacM++;
    ComJoc();
    Crear();
}

function IniciLlorente(Llorente) {
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

function IniciFanta(Fanta) {
    var x, y;
    var Espai = false;

    do {
        x = Math.floor((Math.random() * 30) + 0);
        y = Math.floor((Math.random() * 30) + 0);
    } while (!ComPos(y, x))

    Fanta[1] = x;
    Fanta[2] = y;
    Fanta[3] = DirInici(y, x);

    mapa[y][x] = 3;
}

function ComPos(y, x) {
    var C = false;
    if (mapa[y][x] == 1) {
        C = true;
    }
    return C;
}

function ComDirec(element, Direc) {
    var x = element[2];
    var y = element[1];

    if (ComPos(x + 1, y) != 0)
        Direc[1] = 1;
    else
        Direc[1] = 0;
    if (ComPos(x, y + 1) != 0)
        Direc[2] = 1;
    else
        Direc[2] = 0;
    if (ComPos(x - 1, y) != 0)
        Direc[3] = 1;
    else
        Direc[3] = 0;
    if (ComPos(x, y - 1) != 0)
        Direc[4] = 1;
    else
        Direc[4] = 0;
}

function DirInici(y, x) {
    var Direc = new Array();
    var ELliure = false;
    var PosIni;
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
            ELliure = true;
            PosIni = aux;
        }
    } while (!ELliure)

    return PosIni;
}

function Reves(Fanta) {
    var RevesCont;
    if (Fanta[3] == 1)
        RevesCont = 3;
    if (Fanta[3] == 2)
        RevesCont = 4;
    if (Fanta[3] == 3)
        RevesCont = 1;
    if (Fanta[3] == 4)
        RevesCont = 2;
    return RevesCont;
}


function DSentits(Direc) {
    var Dos = false;
    if ((Direc[1] == 1) && (Direc[3] == 1))
        Dos = true;
    if ((Direc[2] == 1) && (Direc[4] == 1))
        Dos = true;
    return Dos;
}

function MLlorente(Llorente) {
    NDLlorente(Llorente);

    if (Llorente[3] == 1 && mapa[Llorente[2] + 1][Llorente[1]] != 0) {
        mapa[Llorente[2]][Llorente[1]] = 1;

        Llorente[5] = Llorente[1];
        Llorente[6] = Llorente[2];

        Llorente[2] += 1;

        mapa[Llorente[2]][Llorente[1]] = 2;
    }
    if (Llorente[3] == 2 && mapa[Llorente[2]][Llorente[1] + 1] != 0) {
        mapa[Llorente[2]][Llorente[1]] = 1;
        Llorente[5] = Llorente[1];
        Llorente[6] = Llorente[2];
        Llorente[1] += 1;
        mapa[Llorente[2]][Llorente[1]] = 2;
    }
    if (Llorente[3] == 3 && mapa[Llorente[2] - 1][Llorente[1]] != 0) {
        mapa[Llorente[2]][Llorente[1]] = 1;
        Llorente[5] = Llorente[1];
        Llorente[6] = Llorente[2];
        Llorente[2] += -1;
        mapa[Llorente[2]][Llorente[1]] = 2;
    }
    if (Llorente[3] == 4 && mapa[Llorente[2]][Llorente[1] - 1] != 0) {
        mapa[Llorente[2]][Llorente[1]] = 1;
        Llorente[5] = Llorente[1];
        Llorente[6] = Llorente[2];
        Llorente[1] += -1;
        mapa[Llorente[2]][Llorente[1]] = 2;
    }
}

function MFanta(Fanta) {
    NDFanta(Fanta);

    if (Fanta[3] == 1) {
        mapa[Fanta[2]][Fanta[1]] = 1;

        Fanta[5] = Fanta[1];
        Fanta[6] = Fanta[2];

        Fanta[2] += 1;

        mapa[Fanta[2]][Fanta[1]] = 3;
    }
    if (Fanta[3] == 2) {
        mapa[Fanta[2]][Fanta[1]] = 1;
        Fanta[5] = Fanta[1];
        Fanta[6] = Fanta[2];
        Fanta[1] += 1;
        mapa[Fanta[2]][Fanta[1]] = 3;
    }
    if (Fanta[3] == 3) {
        mapa[Fanta[2]][Fanta[1]] = 1;
        Fanta[5] = Fanta[1];
        Fanta[6] = Fanta[2];
        Fanta[2] += -1;
        mapa[Fanta[2]][Fanta[1]] = 3;
    }
    if (Fanta[3] == 4) {
        mapa[Fanta[2]][Fanta[1]] = 1;
        Fanta[5] = Fanta[1];
        Fanta[6] = Fanta[2];
        Fanta[1] += -1;
        mapa[Fanta[2]][Fanta[1]] = 3;
    }
}

function NDLlorente(Llorente) {
    ComDirec(Llorente, Direc);

    if (Direc[TeclaPulsada] == 1) {
        Llorente[3] = TeclaPulsada;
    }
}

function NDFanta(Fanta) {
    var ELliure = false;
    var NewDir;
    var aux;
    var PosDir = 0;

    ComDirec(Fanta, Direc);

    for (var i = 1; i < 5; i++) {
        if (Direc[i] == 1)
            PosDir++;
    }

    if (PosDir > 2) {
        do {
            aux = Math.floor((Math.random() * 4) + 1);
            if ((Direc[aux] != 0) && (Fanta[3] != Reves(Fanta))) {
                ELliure = true;
                NewDir = aux;
                ComColisio(Fanta);
            }
        } while (!ELliure)
    }


    if (PosDir <= 2) {
        do {
            aux = Math.floor((Math.random() * 4) + 1);
            if (Direc[aux] != 0) {

                if (DSentits(Direc)) {
                    ELliure = true;
                    NewDir = Fanta[3];
                    ComColisio(Fanta);
                } else {
                    ELliure = true;
                    NewDir = aux;
                    ComColisio(Fanta);
                }
            }
        } while (!ELliure)
    }


    Fanta[3] = NewDir;
}

function ComColisio(Fanta) {
    var GOVER = false;

    if (mapa[Fanta[2]][Fanta[1] + 1] == 2) {
        clearTimeout(Actua);
        GOVER = true;
    }
    if (mapa[Fanta[2]][Fanta[1] - 1] == 2) {
        clearTimeout(Actua);
        GOVER = true;
    }
    if (mapa[Fanta[2] + 1][Fanta[1]] == 2) {
        clearTimeout(Actua);
        GOVER = true;
    }
    if (mapa[Fanta[2] - 1][Fanta[1]] == 2) {
        clearTimeout(Actua);
        GOVER = true;
    }


    if (lorente[1] == Fanta[1] && lorente[2] == Fanta[2]) {
        clearTimeout(Actua);
        GOVER = true;
    }

    if (GOVER) {
        document.getElementById("Fi").innerHTML = "DERROTA";
        console.log("GOVER");
    }
}

function Teclado(e) {
    var Tecla = document.all ? e.which : e.key;

    if (Tecla == "ArrowDown") {
        TeclaPulsada = 1;
    }
    if (Tecla == "ArrowRight") {
        TeclaPulsada = 2;
    }
    if (Tecla == "ArrowUp") {
        TeclaPulsada = 3;
    }
    if (Tecla == "ArrowLeft") {
        TeclaPulsada = 4;
    }
}

function ComJoc(PacM) {
    if (PacM >= 1500) {
        clearTimeout(Actua);
        document.getElementById("Fi").innerHTML = "VICTORIA";
    }
}