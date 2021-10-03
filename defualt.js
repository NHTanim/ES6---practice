// --------------




// --এখানে perameter নেয়া হয়েছে ২ টা কিন্তু perameter value দেয়া হয়েছে একটা ।
// --এটার জন্য defualt value set করে দেয়া যাবে যদি value থাকে তাহলে ওই টা add হবে না হুলে 0 add হবে;

function add1(num1, num2 ) {

     if (num2 == undefined){ 
         num2 = 0;  //এখানে undefined করে দেয়া হয়েছে ;
     }

    return num1 + num2;
}

const totalOne = add1(20);
console.log(totalOne);












function add2(num1, num2) {

    num2 = num2 || 0; // এভাবে ও করা যাবে যদি num2 দেয়া থাকে ত ওই num2 এর value হবে অথবা 0 হবে ।

    return num1 + num2;
}

const totalTwo = add2(30);
console.log(totalTwo)










// এটা es6 এর main rules--------------
function add3(num1, num2 = 20) { // এখানে num2 = 20 দেয়া নিচে যদি value দেয়া না থাকে তাহলে num2 থেকে নিয়ে যাবে । 
    return num1 + num2;
}
const total = add3(40);
console.log(total);