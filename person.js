class Person {
  constructor(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  // Method to introduce the person
  introduce() {
    return `Hi, my name is ${this.name}, I'm ${this.age} years old, and I am a ${this.gender}.`;
  }

  // Method to check if the person is an adult
  isAdult() {
    return this.age >= 18;
  }
  // Method to update the person's age
  updateAge(newAge) {
    this.age = newAge;
  }
  // Static method to create a person object from a given object with details
  static fromObject(personDetails) {
    const { name, age, gender } = personDetails;
    return new Person(name, age, gender);
  }
}
const person1 = new Person("Suneel Reddy", 24, "male");
console.log("intro", person1.introduce());
console.log("isAdult ", person1.isAdult());

// Update age
person1.updateAge(25);
console.log("intro ", person1.introduce());

// Create person from object
const person2Details = { name: "Ajay", age: 28, gender: "male" };
const person2 = Person.fromObject(person2Details);
console.log(person2.introduce());

// Using the prototype assignment outside the class(common for all person instances)
Person.prototype.info = function () {
  return "To pass the exam, you need a minimum score of 45%.";
};
