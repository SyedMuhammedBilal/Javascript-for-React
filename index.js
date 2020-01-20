
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