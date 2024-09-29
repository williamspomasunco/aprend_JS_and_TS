
// numero 

let a = 100; // numero int
let c = 7.19; // numero float 
let b = '4.5'; // string (esto es para mostrar como convertir int o float)

console.log(a , c);

console.log(a.toFixed(2)); // indicar cuantos decimales quire mostrar
console.log(parseInt(c)); // conevrtir a int 
console.log(parseFloat(a)); // convertir a float
console.log(typeof c, typeof a); // ver que tipo es

console.log (a + parseFloat(b)); 

// booleano

let verdadero = true; // valor boolean
let falso = false; // valor boolean

console.log(verdadero, falso);
console.log(typeof verdadero,typeof falso);

console.log(Boolean(7)); // true
console.log(Boolean(0)); // false
console.log(Boolean(-7)); // true
console.log(Boolean('')); // false
console.log(Boolean(' ')); // true

// undefined , null 
let un ;

console.log(un); // nos da undefined

let vacio = null;
console.log(vacio);

let noEsUnNumero = 'hola' * 3*7;

console.log(noEsUnNumero);


// funciones 

function estoEsUnFuncion() {
    console.log('uno');
    console.log('dos');
    console.log('tres');
    
};

function suma (a , b) {
    r = a + b;
    return r;
};
// invocacion de funcion 
estoEsUnFuncion();

respuesta = suma(15,5);

console.log(respuesta);

// funcion con valores preterminados
function saludoF (name = 'desconocido' , year = 0) {
    console.log(`hola ${name} tu tienes ${year} años`);
};

saludoF();
saludoF('williams' , 18);

//  funciones declaradas VS funciones expresadas

FuncionDeclarada();

function FuncionDeclarada() {
    console.log('esta funcion declarada se puede invocaren cualquier parte');
};

FuncionDeclarada();

//funcionExpresada(); no se puede invocar antes de crear cuando es una funcion expresadas.

const funcionExpresada = function(){
    console.log('esta es una funcion expresada , si se envoca antes de su finicion javascript nos dira...');
};

funcionExpresada();

// array

const A_a =[];
const A_b = [1,'hola', ['a','b','c']];

console.log(A_a);
console.log(A_b);
console.log(A_b.length);
console.log(A_b[1]);
console.log(A_b[2][0]);

const A_c = Array.of('x','j','z','c');
console.log(A_c);

const A_d = Array(100).fill(true);

console.log(A_d);
// otra forma de hacer arreglos
const color = Array.of('red','blue', 'yellow');

console.log(color);
color.push('gree');
console.log(color);
// esto hace que incluyemos una funcion que extraya en un for el elemnto y index
color.forEach(function(el,index){
    console.log(`id : ${index} = ${el}`);
});



// objetos: 

const user = {
    nombre: 'williams',
    apellido: 'pomasunco',
    edad: 18,
    pais: 'perú',
    hobbies: ['basquet','futbol','movie'],
    contacto : {
        email:'williamspomasunco@gmail.com',
        movil:'947638432'
    },
    saludar: function hola() {
        console.log('hola mundo');
    },
    decirminombre: function(){
        console.log(`hola me llamo ${this.nombre} ${this.apellido}`)
    }
};
console.log(user);
console.log(user['nombre']);
console.log(user['apellido']);
console.log(user['edad']);
console.log(user['pais']);
console.log(user['hobbies']);
console.log(user.edad);
console.log(user.contacto.email);
console.log(user.saludar);
user.saludar();
user.decirminombre();
// te forma el arrglos de los atributos
console.log(Object.keys(user));
// te froma un arreglo de los valores de atributos 
console.log(Object.values(user));
// nos regresa si es tienes esa atributos en un objetos
console.log(user.hasOwnProperty('nombre'));
console.log(user.hasOwnProperty('sexo'));


//  tipos de operadores

let Na = 45 + 5*5 ;

console.log(Na);

/*las operadores = , == , ===*/

console.log(7 == 7); // comparan si son igales 
console.log('7' == 7); // comparan el valor 
console.log(7 === '7'); // compararn el tipo de datos y valor

/* || es or, && es and */

console.log((7 === 7)|| (8 ==='8')); // sale true por uno de las sentecias se cumple

console.log ((7 === 7) && (8 === '8')); // sale false por que solo uno cumple y el otro devueñlve false and 




// condicioanles

let edad = 18 ;

if (edad >= 15){
    console.log(`con ${edad} años eres ya un mayor de edad`); 
} else {
    console.log(`con ${edad} años eres menor de edad`);
}   


let hora = 5 ;

if(hora >= 0 && hora <= 5){
    console.log('dejeme dormir');
} else if(hora >= 6 && hora <= 12){
    console.log('buenas noches');
} else if(hora >= 13 && hora <= 18){
    console.log('buenas tardes');
} else if (hora >=  19 && hora <= 24){
    console.log('buenas noches');
} else {
    console.log('error no es una hora en el rango')
}


/* operador ternario(condicion)? verdaderos : falsa */

console.log ('operdor ternario')

let eresmayor = (edad >= 18) ? 
'eres mayor de edad': 
'eres menor de edad';

console.log(eresmayor);





