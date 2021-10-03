// 





// class declare এর জন্য class এর পরে class Name . ex: Student
class Student{


    // যদি এর ভিতরে property দিতে চাই তাহলে constructor দিতে হবে ।

    constructor(sId, Sname){
        this.id = sId;
        this.name = Sname;
    }

}

const student1 = new Student(171-15-9153, "Nazmul Hossain Tanim");  //এখানে কিছু declare করা হয়নাই তাই class template দিয়ে new Student() বানানোর জন্য .
const student2 = new Student();

console.log(student1, student2);