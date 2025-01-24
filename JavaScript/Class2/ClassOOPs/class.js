// //traditional way of creating object class
// const dog ={
//     name: "doodle",
//     legCount: 4,
//     speaks: "bark bark"
// }

// //calling: 
// console.log("animal"+" " + dog["name"]+ " "+ dog["speaks"] );

class Person {
    //properties
    constructor(name, age, native) {
        this.name = name;
        this.age = age;
        this.native = native;
    }

    //methods
    intro() {
        console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
    }

    //static function, this function can be called by the class itself.
    static gender() {
        console.log("Male");
    }
}

let Shubham = new Person("Shubham", 21, "Indian");
Shubham.intro();
Person.gender();
