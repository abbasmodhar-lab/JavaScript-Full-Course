 
//  constructor function
 function Car(make,model,year,color){
   this.make=make;
   this.model=model;
   this.year=year;
   this.color=color;
  this.drive=function(){
    console.log(`Driving ${this.make} ${this.model} ${this.year} ${this.color}`);
  }
 }
 //  creating new objects
 const car1=new Car('Toyota','Corolla',2020,'Red');
 const car2=new Car('Chevrolet','Camaro',2021,'Blue');
 console.log(car1);
 //  printing the objects
 console.log(car2);

 car1.drive();
 car2.drive();