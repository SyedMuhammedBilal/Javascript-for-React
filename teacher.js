import { Person } from './person';

export function promote() {}

export default class Teacher extends person {
    constructor(name, degree) {
        super(name);
        this.degree = degree;  
    }
    teach() {
        console.log("teach");
    }
}