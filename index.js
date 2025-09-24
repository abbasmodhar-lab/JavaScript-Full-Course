const person1 = {
  firstName: "abbas",
  lastName: "modhar",
  age: 25,
  gender: "male",
  sayHello: function() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
   
};
person1.sayHello();
