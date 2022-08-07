
//ex 1.1;

function addition(a, b) {
    let sum = a + b;
    return sum;
};

function substraction(c, d) {
    let sub = c - d;
    return sub;
};

function multiplication(e, f) {
    let mul = e * f;
    return mul;
};

function division(g, h) {
    let div = g / h
    return div;
};

let x = prompt("Please enter a number");
let r = division(4, x);          // 4/x
let p = addition(r, 5);          // 4/x+5
let s = substraction(34, x);   // 34-x
let t = addition(s, 10);         // 34-x+10
let u = multiplication(x, t);    //x * (34 - x + 10)
let v = division(u, 6);          // x * (34 - x + 10) / 6
let w = substraction(p, v);         //x + 5 - x * (34 - x + 10) / 6
let q = addition(w, x);          // 4 / x + 5 - x * (34 - x + 10) / 6 + x

console.log(q);



// ex. 1.2;

function checkPalindrome(string) {

    let len = string.length;
    for (let i = 0; i < len; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return 'It is not a palindrome.';
        }
    }
    return 'It is a palindrome.';
}
let string = prompt();
let value = checkPalindrome(string);
console.log(value);


let text = "34988943";  
let text1 = text.charAt(2);
console.log(text.charAt(2));


// ex. 1.3;

function findLongestWord(string) {
    let arrayOfChars = string.split(' ');
    let longestWordLength = 0;
    let longestWord = null;
    arrayOfChars.forEach(function (word) {
        if (longestWordLength < word.length) {
            longestWordLength = word.length;
            longestWord = word;
        };
    });
    return longestWord;
};
let prop = "JavaScript is the programming language of the Web."
console.log(findLongestWord(prop));



// ex. 2.1;

let number = prompt("Enter a number");
function factorial(y) {
    if (y === 0 || y === 1) {
        return 1;
    } else {
        if (y > 0) {
            return factorial(y - 1) * y;  // daca numarul nu este pozitiv sau intreg;
        } else {
            return '-1';
        };
    };
};
let resultFactorial = factorial(number);
console.log(resultFactorial);

//daca numarul primit ca parametru in functie este intreg sau nu.
//console.log(Math.ceil(resultFactorial));
//console.log(Math.floor(resultFactorial));


if (Math.floor) {
    Math.floor = function factorial(y) {
      return //??;
    };
  };
  if (Math.ceil) {
    Math.ceil = function factorial(y) {
      return //??;
    };
  };


   // ex.2.2;

let array = [2, 4, 8, 1, 9, 4, 5, 5, 8, 9, 1, 3, 2];
function arrayMultiply() {
    let res = 1;
    for (let i = 0; i < array.length; i++) {
        res = res * array[i];
    };
    return res;
};
function arrayAddition() {
    let add = 0;
    for (let i = 0; i < array.length; i++) {
        add = add += array[i];
    };
    return add;  
};
 // apelarea functiei - adunare || inmultire??

console.log(
    arrayAddition(array)
);
console.log(
    arrayMultiply(array)
);


   // ex.2.3;

let personObject = {
    firstName: 'Roxana',
    lastName: 'Francu',
    sex: 'f',
    petOwner: 'yes',

    writePoliteName: function() {
        let prefix = 'Mr. ';
        if (personObject.sex === 'f' ) {
            prefix = 'Mrs. ';
        };

     console.log(prefix + personObject.firstName + ' ' + personObject.lastName);
        
    },

};

// ex. 2.4;

let theObject = {
    result: 0,
    addNumber: function(a, b) {
      this.result = a + b;
      return this;
    },

    substractNumber: function(a) {
        this.result = this.result - a;
        return this;
    },
  
    multiplyNumber: function(a) {
      this.result = this.result * a;
      return this;
    },
   
    divideNumber: function(a) {
      this.result = this.result / a;
      return this;
    },
  };
  
  theObject.addNumber(10, 20).substractNumber(5).multiplyNumber(10).divideNumber(10);
  console.log(Object.result);

