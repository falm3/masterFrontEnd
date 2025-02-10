// 1. Array operations
console.log("---1. Array operations---");
const array1 = [
    "elem1",
    "elem2",
    "elem3"
];
const array2 = [
    "elem4",
    "elem5",
    "elem6"
];
// Head
// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.
console.log("*****HEAD*****");
const head = ([a])=>a; // Implementation here.
console.log(head(array1));
//o sin función
const [head2, ...tail2] = array1;
console.log(head2);
// Tail
// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.
console.log("*****TAIL*****");
const tail = ([, ...elements])=>elements; // Implementation here.
console.log(tail(array1));
//o sin función
const [, ...tail3] = array1;
console.log(tail3);
// Init
// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.
console.log("*****INIT*****");
const init = ([...elements])=>elements.slice(0, -1); // Implementation here.
console.log(init(array1));
// Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
console.log("*****LAST*****");
const last = ([, ...elements])=>elements.slice(-1); // Implementation here.
console.log(last(array1));
// 2. Concat
console.log("---2. Concat---");
console.log("*****CONCAT*****");
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.
const concat = (a, b)=>[
        ...a,
        ...b
    ]; // Implementation here.
console.log(concat(array1, array2));
// Opcional
console.log("*****OPCIONAL*****");
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
const optional = (...args)=>[].concat(...args); // Implementation here.
console.log(optional(array1, array2, [
    "elem7",
    "elem8",
    "elem9"
]));
// 3. Clone Merge
console.log("---3. Clone Merge---");
// Clone
console.log("*****CLONE*****");
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone(source) {
    // Implementation here.
    return {
        ...source
    };
}
const original = {
    prop1: "value1",
    prop2: 2
};
const copy = clone(original);
console.log(original);
console.log(copy);
// Merge
console.log("*****MERGE*****");
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.
// Por ejemplo, dados estos 2 objetos:
const a = {
    name: "Maria",
    surname: "Iba\xf1ez",
    country: "SPA"
};
const b = {
    name: "Luisa",
    age: 31,
    married: true
};
// el resultado de mezclar a sobre b sería:
// merge(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
// TIP: Puedes usar la función "clone" del apartado A.
function merge(source, target) {
    // Implementation here
    return {
        ...target,
        ...source
    };
}
console.log(merge(a, b));
// 4. Read Books
console.log("---4. Read Books---");
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
function isBookRead(books, titleToSearch) {
    // Implementation here
    // De varios modos dependiendo de la función prototípica que hubiera que utilizar (findIndex/find/filter/some)
    //return books.findIndex( element => element.title === titleToSearch && element.isRead === true ) > -1;
    // or
    //return !!books.find( element => element.title === titleToSearch && element.isRead === true )
    //or
    //return !!(books.filter( element => element.title === titleToSearch && element.isRead === true )).length;
    //or
    return books.some((element)=>element.title === titleToSearch && element.isRead === true);
}
// Ejemplo
const books = [
    {
        title: "Harry Potter y la piedra filosofal",
        isRead: true
    },
    {
        title: "Canci\xf3n de hielo y fuego",
        isRead: false
    },
    {
        title: "Devastaci\xf3n",
        isRead: true
    }
];
console.log("The list of books you have and its status is...");
console.log(books);
console.log("Have you read and have you got Devastaci\xf3n?");
console.log(isBookRead(books, "Devastaci\xf3n")); // true
console.log("Have you read and have you got Canci\xf3n de hielo y fuego?");
console.log(isBookRead(books, "Canci\xf3n de hielo y fuego")); // false
console.log("Have you read and have you got Los Pilares de la Tierra?");
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false
// Opcional
// Utiliza Typescript para añadir los tipos adecuados.
// function isBookRead( books, titleToSearch ){
//   // Implementation here
//
// }
console.log("---5. Slot Machine---");
// 5. Slot Machine
console.log("*****SLOT MACHINE*****");
// El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
// Cuando se llame al método play el número de monedas se debe incrementar de forma automática y debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas. El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto deberá mostrarse por consola el mensaje:
// "Congratulations!!!. You won <número de monedas> coins!!";
// y reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. En caso contrario deberá mostrar otro mensaje:
// "Good luck next time!!".
// Ejemplo de uso
class SlothMachine {
    #coins;
    constructor(){
        this.#coins = 0;
    }
    wheels(numOfWheels) {
        let arr = [];
        for(let i = 0; i < numOfWheels; i++)arr.push(Boolean(Math.floor(Math.random() * 2)));
        return arr;
    }
    play() {
        this.#coins++;
        const values = this.wheels(3);
        console.log(values);
        console.log(values.every((currentValue)=>currentValue === values[0]));
        if (values.every((currentValue)=>currentValue === values[0])) {
            console.log(`Congratulations!!!. You won ${this.#coins} coins!!`);
            this.#coins = 0;
        } else console.log("Good luck next time!!");
    }
}
const machine1 = new SlothMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();

//# sourceMappingURL=index.579125c3.js.map
