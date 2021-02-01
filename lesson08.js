//22-8 Inheritance, extends class, super, class method

//inheritance.js

class Parent{
    constructor(){
        this.fatherName = "Schwerznegger";
    }
}

class Child extends Parent{
    constructor(name) {
        super();
        this.name = name;
    }

    getFullName(){
        return this.name + ' ' + this.fatherName
    }
}

const baby = new Child("Arnoled")
const baby2 = new Child("Tom")



console.log(baby.getFullName());
console.log(baby2.getFullName());

//TODO: Inheritance Incaptulation Polymorphisom