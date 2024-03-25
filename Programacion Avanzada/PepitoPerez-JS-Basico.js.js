/////////////////////////////////////////////////////////////////////////// numero par o impar

var f=function(x){
    let t = x/2;
    if(t%2===0){
        console.log("el numero "+x+" es un numero par")
    }else{
        console.log("el numero "+x+" es un numero impar")

    }
}
f(4);

/////////////////////////////////////////////////////////////////////////// triangulo escaleno, isoceles o equilatero

function triangulo(a,b,c,){
    if( a!=b && a!=c && b!=c ){
        console.log("El triangulo con lado1: "+a+" y el lado2: "+b+" y el lado3: "+c+" es un Triangulo Escaleno");
    }else if(a==b && a!=c && b!=c){
        console.log("El triangulo con lado1: "+a+" y el lado2: "+b+" y el lado3: "+c+" es un Triangulo Isoceles");
    }else if(a==b && b==c && a==c){
        console.log("El triangulo con lado1: "+a+" y el lado2: "+b+" y el lado3: "+c+" es un Triangulo Equilatero");
    }
}

triangulo(4,4,4)

/////////////////////////////////////////////////////////////////////////// ecuacion cuadratica tiene solucion real 
const ecuacion = (a,b,c)=>{
    var d = (b * b - ((4 * a )* c));
    if (d>= 0) {
        console.log("La funcion : "+a+"x^2 "+b+"x "+c+" Tiene Solucion Real")

    } else {
        console.log("La funcion : "+a+"x^2 "+b+"x "+c+" No Tiene Solucion Real")
    }}

ecuacion(1,2,3);

/////////////////////////////////////////////////////////////////////////// Numeros Primos

function primo(a){
    var x;

    for (var i = 2;i<a;i++){
        if(a%i===0){
            x=false;
            break
        }else{
            x=true;
        }
    }

    if (x==true){
        console.log("El números "+a+" es Primo")
    }else{
        console.log("El números "+a+" No es Primo")
    }
}

primo(30)

/////////////////////////////////////////////////////////////////////////// Estaciones del año por meses

function estacion(a){
    if(a>=3 && a<=5){
        console.log("El numero del mes "+a+" esta en Primavera")
    } else if(a>=6 && a<=8){
        console.log("El numero del mes "+a+" esta en Verano")
    } else if(a>=9 && a<=11){
        console.log("El numero del mes "+a+" esta en Otoño")
    } else if(a==1 || a==2 || a==12){
        console.log("El numero del mes "+a+" esta en Invierno")
    }
}

estacion(1)

/////////////////////////////////////////////////////////////////////////// Mayor de 3 numeros

var z=function(a,b,c){
    if (a>b && a>c){
        console.log("El números "+a+" es el mayor")
    }else if (b>a && b>c){
        console.log("El números "+b+" es el mayor")
    }else if (c>b && c>a){
        console.log("El números "+c+" es el mayor")
    }
}
z(6,2,8);

/////////////////////////////////////////////////////////////////////////// Descuanto de Decenas

function calcularD(decenas){
    var precioDocena = 60000;
    var precioT = ((decenas * 12) * precioDocena);
    var des = 0;

    if (decenas > 10) {
        des = 0.2;
    } else if (decenas >= 5) {
        des = 0.15;
    } else if (decenas > 1) {
        des = 0.1;
    }
    var desReal = precioT * des;
    var precioTotalDes = precioT - desReal;

    console.log("El descuento por la compra de "+decenas+" decenas es de: "+ desReal);
    console.log("El valor total de la compra es de: "+precioTotalDes+" con el descuento del: "+desReal+", el total sin descuento es de: "+precioT);


}

calcularD(15)
