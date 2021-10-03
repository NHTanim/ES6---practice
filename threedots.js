// 



// --concat দিয়ে ২টা array কে এক সাথে করা হয়েছে।

// চাইলে আরও array add করা যাবে । ex : const allAges = age.concat(ageTwo).concat(ageThree)

// push করার জন্য .concat([40]); 

const age = [12, 34, 30, 29];
const ageTwo = [10,17,22];
const allAges = age.concat(ageTwo)

console.log(allAges);







// javascript threedots ... এটা দিয়ে আরও সহজে করা যায় concat না করে ।
const digit = [3, 4, 6, 2, 7];
const digitTwo = [5, 1];
const digitThree = [11, 20];

const allDigits = [...digit, ...digitTwo,99, ...digitThree];

console.log('ThreeDots', allDigits);





// if else ছারা এটা এই ভাবে ও করা যায় ।
const businessMan = 650;
const minister = 700;
const sochib = 290;

const richMan = [650, 700, 290];
const maximum = Math.max(...richMan);

console.log("TOP RICH MAN", maximum);






// 