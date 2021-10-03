// 




// class declare এর জন্য class এর পরে class Name . ex: Student

class Student {


    // যদি এর ভিতরে property দিতে চাই তাহলে constructor দিতে হবে ।
   constructor(sId, Sname){
       this.id = sId;
       this.name = Sname;
       this.university = 'Daffodil International University';  // চাইলে সবার জন্য একই property add করা যাবে ।
   }
}

const student1 = new Student(01, "Tanim"); //এখানে কিছু declare করা হয়নাই তাই class template দিয়ে new Student() বানানোর জন্য .
const student2 = new Student(02, "Niloy");
const student3 = new Student(03, "Meem");

console.log(student1, student2, student3);