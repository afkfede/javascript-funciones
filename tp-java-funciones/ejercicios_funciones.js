// Ejercicio 1
function mensaje(num){
    for(let i = 0; i < num; i++) {
        console.log("Bienvenidos al último año de la Tecnicatura")
        
    }
}
var n = prompt("Ingrese un numero: ")
mensaje(n)

// Ejercicio 2
var numeroMaximo = function(valor1, valor2){
    if (valor1 > valor2) {return valor1}
    return valor2
}
var v1 = parseInt(prompt("Ingrese un numero entero: "))
var v2 = parseInt(prompt("Ingrese otro numero entero: "))
alert("El numero mayor es: " + numeroMaximo(v1, v2))

// Ejercicio 3
function promedio3(num1, num2, num3){
    var prom = (num1 + num2 + num3) / 3
    alert("El promedio de las 3 notas ingresadas es: " + parseFloat(prom))
}
var nota1 = parseInt(prompt("Ingrese la primera nota: "))
var nota2 = parseInt(prompt("Ingrese la segunda nota: "))
var nota3 = parseInt(prompt("Ingrese la tercer nota: "))
promedio3(nota1, nota2, nota3)

// Ejercicio 4
function calcularPromNotas(){
    let suma = 0;
    let cantidadNotas=0;
    let nota=0;
    while(nota!== -1){
        nota = parseInt(prompt("Ingrese una nota (-1 para finalizar)"));
        if(nota!== -1){
            suma += nota;
            cantidadNotas++;
        }
    }
    if(cantidadNotas === 0){
        return 0;
    } else{
        alert("Promedio: " + (suma/cantidadNotas));
    }
}
function siguiente(numero){
    alert("El siguiente de " + numero + " es: " + (num + 1));
}
calcularPromNotas()
var num = parseInt(prompt("Ingrese un numero entero: "))
siguiente(num)

// Ejercicio 5
function doble(valor1){
    return valor1*2
}
var v1 = parseInt(prompt("Ingrese un numero: "))
alert(doble(v1))

// Ejercicio 6
function cuadrado(valor1){
    return valor1*valor1
}
var num = prompt("Ingrese un numero: ")
alert(cuadrado(num))

// Ejercicio 7
function imprimirValores(num){
    var siguiente = num + 1;
    var doble = num * 2;
    var cuadrado = num * num;
    alert("El siguiente de " + num + " es: " + siguiente)
    alert("El doble de " + num + " es: " + doble)
    alert("El cuadrado de " + num + " es: " + cuadrado)
}
var valor = parseInt(prompt("Ingrese un numero: "))
imprimirValores(valor)

// Ejercicio 8
function imprimirElDobleDelSiguiente(num){
    var doble = num * 2;
    var doblesig = doble + 1;
    alert("El numero siguiente al doble de " + num + " es: " + doblesig)
}
var valor = parseInt(prompt("Ingrese un numero: "))
imprimirElDobleDelSiguiente(valor)

// Ejercicio 9
function imprimirElDobleDelSiguienteAlCuadrado(num){
    var doblesig = (num * 2) + 1;
    var cuadrado = doblesig * doblesig;
    alert("El numero siguiente al doble de " + num + " es: " + doblesig + ", y el cuadrado de ese numero es: " + cuadrado)
}
var valor = parseInt(prompt("Ingrese un numero: "))
imprimirElDobleDelSiguienteAlCuadrado(valor)

// Ejercicio 10
function perimetroCuadrado(lado){
    var perimetro = lado * 4
    alert("El perimetro del cuadrado segun el lado ingresado (cm), es: " + perimetro)
}
var l = parseFloat(prompt("Ingrese un lado del cuadrado (cm): "))
perimetroCuadrado(l)

// Ejercicio 11
function superficieCuadrado(lado){
    var superficie = lado * lado
    alert("La superficie del cuadrado segun el lado ingreso (cm), es : " + superficie)
}
var l = parseFloat(prompt("Ingrese un lado del cuadrado (cm): "))
superficieCuadrado(l)

// Ejercicio 12
function perimetroCirculo(radio){
    var diametro = radio * 2;
    var perimetro = 3.14 * diametro;
    alert("La circunferencia de un circulo de radio: " + radio + " es: " + perimetro)
}
var valor = parseInt(prompt("Ingrese el radio de un circulo: "))
perimetroCirculo(valor)

// Ejercicio 13
function areaCirculo(radio){
    var area = 3.14 * (radio*radio);
    alert("El area de un circulo de radio: " + radio + " es: " + area)
}
var valor = parseInt(prompt("Ingrese el radio de un circulo: "))
areaCirculo(valor)

// Ejercicio 14
function obtenerDiasDelMes(mes){
    if (mes < 1 || mes > 12){
        alert("El valor ingresado no corresponde a un mes")
    }

    if(mes === 2){
        alert("El numero de días que tiene este mes es 28");
    } else if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
        alert("El numero de días que tiene este es 30");
    } else {
        if(mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12)
        alert("El numero de días que tiene es mes es 31");
    }
}

var valor = parseInt(prompt("Ingrese un numero de mes: "))
obtenerDiasDelMes(valor)

// Ejercicio 15
function esBisiesto(anio){
    if((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0){
        alert("El año " + anio + " es bisiesto")
    } else {
        alert("El año " + anio + " no es bisiesto")
    }
}
var valor = parseInt(prompt("Ingrese un año cualquiera: "))
esBisiesto(valor)

// Ejercicio 16
function diasEnMes(dia, mes, anio){
    function esBisiesto(anio){
        return (anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0;
    }

if(mes === 2){
    if(esBisiesto(anio)){
        alert("En el año " + anio + " el mes " + mes + " tuvo 29 dias")
    } else {
        alert("En el año " + anio + " el mes " + mes + " tuvo 28 dias")
    }
} else if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
    alert("En el año " + anio + " el mes " + mes + " tuvo 30 dias")
} else {
    alert("En el año " + anio + " el mes " + mes + " tuvo 31 dias")
}
}
var numDia = parseInt(prompt("Ingrese un numero de dia (1-31): "))
var numMes = parseInt(prompt("Ingrese un numero de mes (1-12): "))
var numAnio = parseInt(prompt("Ingrese un numero de año (hasta el año actual 2024): "))
diasEnMes(numDia, numMes, numAnio)

// Ejercicio 17
function diaAnterior(dia){
    if(dia === 1){
        alert("El dia anterior fue 31")
    } else {
        alert("El dia anterior fue " + (dia - 1))
    }
}
var numDia = parseInt(prompt("Ingrese un numero de dia (1-31): "))
prompt("Ingrese un numero de mes (1-12): ")
prompt("Ingrese un numero de año (hasta el año actual 2024): ")
diaAnterior(numDia)

// Ejercicio 18
function ultimoDiaDelMes(mes, anio){
    if(mes === 4 || mes === 6 || mes === 9 || mes === 11){
        alert("El ultimo dia del mes " + mes + " fue 30")
    } else if(mes === 2){
        if((anio % 4 === 0 && anio % 100 !== 0) || anio % 400 === 0){
            alert("El ultimo dia del mes " + mes + " fue 29")
        } else{
            alert("El ultimo dia del mes " + mes + " fue 28")
        }
    } else{
        alert("El ultimo dia del mes " + mes + " fue 31")
    }
}
prompt("Ingrese un numero de dia (1-31): ")
var numMes = parseInt(prompt("Ingrese un numero de mes (1-12): "))
var numAnio = parseInt(prompt("Ingres un numero de año (hasta el año actual 2024): "))
ultimoDiaDelMes(numMes, numAnio)