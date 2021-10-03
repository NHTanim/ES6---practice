// 




// আমরা normally আগে যেভাবে function লিখতাম ।
function doubleItOne(num) {
    return num * 2;
}

const result1 = doubleItOne(10);
console.log(result1);





// ------------------
const doubleItTwo = function myFun(num) {
    return num * 3;
}

const result2 =  doubleItTwo(10);
console.log(result2);





// es6 এ easy আর একটু short করে arrow function লিখা হয়।
// const তার পরে একটা নাম doubleIt তার পরে  parameter তার পরে arrow sign => এটা দিয়ে function এর body এর মধ্যে যাবে তার পরে return যেটা করবে ।
const doubleIt = (num) => num * 2;

const result = doubleIt(5);
console.log(result);




// -------
// -------(x, y, z) এরা হল parameter;
//-----  => arrow function যেটা দিয়ে function এর body তে যাবে ।
//----- x + y + z return value;
// ---- function এ parameter না থাকলে () empty থাকবে ।
const add = (x, y, z) => x + y + z;

const addResult = add(2, 3, 7);
console.log(addResult);







// যদি function এর ভিতরের কাজ বড় হয় তাহলে { } এটার ভিতরে করতে হবে ।
const math = (x, y) => {
    const sum = x + y ;
    const diff = x - y;
    const result = sum * diff;
    return result; // { } দিয়ে লিখা হয়েছে আর এখানে অনেক গুলো কাজ হয়েছে তাই একটার বেশি return করবে না তাই আলাদা return করতে হবে ।
}

const mathResult = math(7, 5);
console.log("Math Result is ", mathResult);






