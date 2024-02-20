'use strict';

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

class Car {
    constructor(brand, model, year, plateNumber, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.plateNumber = plateNumber;
        if (owner.age >= 18) {
            this.owner = owner;
        } else {
            console.log("Owner must be at least 18 years old.");
        }
    }
    displayInfo() {
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, plateNumber: ${this.plateNumber}`);
        if (this.owner) {
            console.log("Owner info:");
            this.owner.displayInfo();
        }
    }
}

let person1 = new Person("Oleksiy", "40");
let person2 = new Person("Kateryna", "28");
let person3 = new Person("Mariya", "17");

let car1 = new Car("Toyota", "Camry", 2018, "AB1234CD", person1);
let car2 = new Car("Ford", "Fiesta", 2020, "AH2217AA", person2);
let car3 = new Car("BMW", "X5", 2020, "EF5678GH", person3);

car1.displayInfo();
car2.displayInfo();