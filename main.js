
//--------------ejercicio1------------------------- 

// let numero = 2

// for (let i = 0; i <= 10; i++) {
//     console.log(i * numero);
// }

// ------------------ejercicio2---------------------

// let numero = 0

// for (let i = 0; i < 5; i++) {
//     let ingreseNumero = parseInt(prompt("ingrese un numero"))
//     if (ingreseNumero !== numero) {
//         numero += ingreseNumero;
//         console.log("la suma total es:" + numero);
//     }else{
//         break
//     }
    
// }

// ------------------ejercicio3--------------------------

    // let numeroSecreto = 20;
    // let intentos = 0;
    // let jugar = true;
    // let numeroUsuario;
    
    // while (jugar) {
    //     numeroUsuario = prompt("Adivina el número secreto (entre 1 y 100):");
    //     numeroUsuario = Number(numeroUsuario);
    //     intentos++;
    
    //     if (numeroUsuario < numeroSecreto) {
    //         alert("El número secreto es mayor. Intenta de nuevo.");
    //     } else if (numeroUsuario > numeroSecreto) {
    //         alert("El número secreto es menor. Intenta de nuevo.");
    //     } else {
    //         jugar = false;
    //     }
    // }
    // console.log("Felicidades! Has adivinado el número " + numeroSecreto + " en " + intentos + " intentos.");
    // console.log("Juego terminado.");


// -----------------------------ejercicio4--------------------------
    
    let numero = parseInt(prompt("ingrese un numero"))
    let divisor = 1
    let contador = 0

    while (divisor <= numero) {
        if (numero % divisor == 0) {
            contador++
        }
        divisor++
    }
if (contador == 2) {
    console.log("el numero es primo");
    
}else{
    console.log("el numero no es primo");
}
// ------------------ejercicio5------------------------

// let numero = 100

// for (let i = 0; i <= 10; i++) {
//     console.log(i / numero);
// }

// --------------------ejercicio6------------------------

// let moto = ["llantas","faro", "stop", 
//     "tanque", "asiento", "frenos", "bujia", "tanque", "cadena",
// "direccionales"]

// for (let i = 0; i < moto.length; i++) {
//    console.log(moto [i]);
    
// }

// // ----------------ejercicio7--------------------

// let arrayNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < arrayNumero.length; i++) {
//     let doble = arrayNumero[i] * 2;
//     console.log("el doble de: " + arrayNumero[i] + " es: " + doble );
// }

// ---------------ejercicio8------------------------

// let grupoFamiliar = [
//     {
//         nombre : "juan",
//         edad : 22,
//         estatura : 175,
//         profesion : "abogado",
//     },
//     {
//         nombre : "pedro",
//         edad : 33,
//         estatura : 180,
//         profesion : "profesor",
//     },
//      {
//         nombre : "maria",
//         edad : 30,
//         estatura : 167,
//         profesion : "doctora",
//     },
//     {
//         nombre : "carla",
//         edad : 25,
//         estatura : 175,
//         profesion : "modelo",
//     },
//     {
//         nombre : "carmen",
//         edad : 22,
//         estatura : 182,
//         profesion : "peluquera",
//     }
// ]

// for (let i = 0; i < grupoFamiliar.length; i++) {
//     console.log("=================================");
//     console.log("hola mi nombre es: " +grupoFamiliar[i].nombre);
//     console.log("tengo " +grupoFamiliar[i].edad,"años");
//     console.log("mido " +grupoFamiliar[i].estatura);
//     console.log("y soy: " +grupoFamiliar[i].profesion);
// }

// -------------------ejercicio9-----------------------

// let arrayNumero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 0; i < arrayNumero.length; i++) {
//     if (i % 2 === 1) {
//         console.log([i]);
//     }
// }

// --------------------ejercicio10--------------------

// let impar = true
// let suma
// let contador = 0;

// while (impar) {
//     let Numero = parseInt(prompt("ingrese un numero"))
//     let ingreseNumero = parseInt(prompt("ingrese un numero"))
//            if (ingreseNumero === 0) {
//                     console.log("dato no valido");
//                     break 
//             }else if (ingreseNumero % 2 === 1) {
//                 suma = ingreseNumero + Numero
//                 console.log(" su numero es impar   " + suma)
//             }else if (ingreseNumero % 2 === 0) {
//                 suma = ingreseNumero + Numero
//                 console.log("el numero es par  " + suma);
//             }
//             contador++
//         }


// ------------------------ejercicio 11------------------------


// let arrayNumero = [1, 0, 3, 4, 5, 60, 7, 8, 9, 10]

// for (let i = 0; i < arrayNumero.length; i++) {
//     let maximo = Math.max(...arrayNumero)
//     console.log("el valor maximo es: " + maximo);
// }


// for (let i = 0; i < arrayNumero.length; i++) {
//     let minimo = Math.min(...arrayNumero)
//     console.log("el valor minimo es: " + minimo);
// }

// ----------------------ejercicio13------------------

// while (jugador1 === jugador2) {
    
// }
// let jugador1 = prompt( "jugador1 piedra/papel/tijera")
// let jugador2 = prompt( "jugardor2 piedra/papel/tijera")

// if (jugador1 === jugador2) {
//     console.log("empate");

// }else if (jugador1 === "piedra") {
//     if (jugador2 === "papel") {
//         console.log("gana el jugador 2");
//     }else if (jugador2 ==="tijera" ) {
//         console.log("gana jugador 1");

//     }else{
//         console.log("el jugador 2 esta haciendo trampa");
//     }
// }else if (jugador1 === "papel") {
//     if (jugador2 === "piedra") {
//         console.log("gana el jugador 1");
//     }else if (jugador2 ==="tijera" ) {
//         console.log("gana jugador 2");
//     }else{
//         console.log("el jugador 2 esta haciendo trampa");
//     }
// }else if (jugador1 === "tijera") {
//     if (jugador2 === "piedra") {
//         console.log("gana el jugador 2");
//     }else if (jugador2 ==="papel" ) {
//         console.log("gana jugador 1");
//     }else{
//         console.log("el jugador 2 esta haciendo trampa");
//     }
// }else{
//     console.log("el jugador 1 hace trampa");
// }

// -----------------------ejecicio14---------------
// for (let i = 0; i < 5; i++) {
//     let triangulo = "";

//     for (let ciclo = 0; ciclo <= i; ciclo++) {
//         triangulo += " * ";
// }
// console.log(triangulo);
// }

// ----------------------ejercicio15----------------------
// for (let i = 5; i >= 1; i--) {
//         let triangulo = "";
    
//         for (let ciclo = i; ciclo >= 1; ciclo--) {
//             triangulo += " * ";
//     }
//     console.log(triangulo);
//     }


    