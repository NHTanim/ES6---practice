// 



// class নাম সব সময় বড় হাতের হবে ।
class School{
   constructor(){
      this.School = "Monohardi Pilot High School";
   }
}

class Parents{
   constructor(){
      this.fatherName = "Humayon Kabir";
      this.motherName = "Hena";
   }
}



// এখানে পোলাপান এর বাপের সাথে connection এর জন্য extends করা হয়েছে Parents কে ;

class Child extends Parents, School{

   constructor(name){

      super(); //এখানে supper কে call করা মানে উপরের class কল করা ।
      this.name = name;
   }

   }

   // চাইলে এটার ভিতরে function ও লিখা যাবে তবে function এর নাম দিয়ে function কে declare করা যাবে ।
   //getFullName()


const baby = new Child ("Cuton");
const baby2 = new Child ("Manik".School);

console.log(baby, baby2);
