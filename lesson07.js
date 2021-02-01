// Class.js

class Student {
    constructor(sID, sName){
        this.id = sID;
        this.name = sName;
        this.school = "High College"
    }
}

const student1 = new Student(12, 'Shuvo');
const student2 = new Student(22, 'Mahiya');
const student3 = new Student(29, 'Bappi');


console.log(student1);
console.log(student1.name);
console.log(student2);
console.log(student2.name);

console.log(student3);
console.log(student3.name);