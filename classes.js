class Person {
  // constructor initialises the properties of the object
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  // Method is the function that is the property of the object
  // Methods are always called outside the construtor function 
  sayHello() {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}


  // creating instances of the class
const person1 = new Person('Aniket', 30);
const person2 = new Person('Saurabh', 35);

person1.sayHello();
person2.sayHello();



// Parent => Person , Child => Student
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }
  study() {
    console.log(`${this.name} is studying and grade is ${this.grade}`);
  }
}

const student1 = new Student('Aniket', 30, 'A');
student1.study();
