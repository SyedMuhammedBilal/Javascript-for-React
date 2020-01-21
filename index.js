
// var -> function
// let -> block

function sayHello() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(i);
}

sayHello();

// const -> block

const person = {
    name : "Bilal",
    walk() {
        console.log(this)
    }
};
person.walk();   
                       
const walk = person.walk.bind(person); // person is ARG
walk(); //with this bind method we can set the value of (this) permenantly 

// Arrow Functions

const square = number => number * number;
console.log(square(5));

const jobs = [
    {id: 1, isActive: true },
    {id: 2, isActive: true },
    {id: 3, isActive: false }
];

const activeJobs = jobs.filter(job => job.isActive);

const Hi = {
    talk() {
        var self = this;
        setTimeout(() => {
            console.log("this", this);
        }, 1000);
    }
};

Hi.talk();

// Array Map

const colors = ['red', 'green', 'blue'];
const items = colors.map(color => `<li>{colors}</li>`);

console.log(items);

// Object Desturcturing
 const address = {
     street: '',
     city: '',
     country: ''
 };
 
 const street = address.street;
 const city = address.city;
 const country = address.country;

 const { street, city, country } = address; 
 const { street: st } = address;

 // spread operators

 const first = [1, 2, 3];
 const second = [4, 5, 6];

 //const combined = first.concat(second);
 const combined = [...first, ...second, 'a'];
 const clone = [...first];
 console.log(first);
 console.log(clone);

 const firstName = {name: "syed"};
 const secondName = {name: "bilal"};

 const combinedName = {...firstName, ...secondName, role: 'React Dev'};
 console.log(combinedName);

 // classes

 import Teacher, { promote } from './teacher';

 // default can be imported like this -> import ... from './...';
 // Named can be imported like this -> import {...} from './...';

 const teacher = new Teacher("Bilal", "MSc");

 // Modules

 teacher.teach();

