/*lista1 Clase Turista*/
var turEspaña = document.querySelector(".T-españa")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

var turEspaña = document.querySelector(".T-estadosunidos")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

var turEspaña = document.querySelector(".T-mexico")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

var turEspaña = document.querySelector(".T-china")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

/*lista2 Clase ejecutiva*/

var turEspaña = document.querySelector(".E-canada")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

var turEspaña = document.querySelector(".E-argentina")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

var turEspaña = document.querySelector(".E-rusia")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

var turEspaña = document.querySelector(".E-egipto")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

/*lista3 Clase VIP*/ 

var turEspaña = document.querySelector(".V-españa")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

var turEspaña = document.querySelector(".V-estadosunidos")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

var turEspaña = document.querySelector(".V-mexico")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

var turEspaña = document.querySelector(".V-china")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

/*lista4 Clase económica*/ 

var turEspaña = document.querySelector(".EC-canada")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

var turEspaña = document.querySelector(".EC-argentina")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

var turEspaña = document.querySelector(".EC-rusia")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

var turEspaña = document.querySelector(".EC-egipto")
    turEspaña.addEventListener("click", activar)

    function activar() {
        alert("su lista de vuelos es.....")
    }

/************Barra de busqueda***************/

var BarraDeBusqueda = document.getElementById("form")
    BarraDeBusqueda.addEventListener("submit", activar)

    function activar() {
        var texto = document.getElementById("txt").value;
        
        if (texto == "vuelos argentina") {
            alert("los vuelos inician a las 20:00pm")
        } else if(texto == "vuelos a egipto"){
            alert("los vuelos inician a las 07:00am")
        }
    }