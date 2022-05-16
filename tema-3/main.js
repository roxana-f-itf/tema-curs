let her = 'Jane Smith'          // I used the variable name before her, but it showed it is deprecated 
let sum = '$12,450'
let car = 'a Toyota Yaris'
let lot = "is a lot of money"
let plans = 'plans to buy'
let bank = "in her bank account"


let r = "="
let result = r.repeat(50)


let result1 = her + ' ' + 'has' + ' ' + sum + ' ' + bank;
//console.log(sum + ' ' + lot);
let result2 = sum + ' ' + lot;
//console.log(her + ' ' + plans + ' ' + car);
let result3 = her + ' ' + plans + ' ' + car;
//console.log(her + ' ' + 'will use her' + ' ' + sum + ' ' + 'to buy' + car);
let result4 = her + ' ' + 'will use her' + ' ' + sum + ' ' + 'to buy' + car;
//console.log(sum + ' ' + lot + ' ' + 'for' + ' ' + car);
let result5 = sum + ' ' + lot + ' ' + 'for' + ' ' + car;

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

// console.log(result);

// console.log(result2);
// console.log(result5);
// console.log(result3);
// console.log(result1);
// console.log(result4);

// console.log(result);

// console.log(result3);
// console.log(result2);
// console.log(result4);
// console.log(result1);
// console.log(result5);




let writeParagraph = function (
    row1,
    row2,
    row3,
    row4,
    row5,
) {
    return row1 + '\n' + row2 + '\n' + row3+ '\n'+ row4 + '\n' + row5
}


console.log(writeParagraph(
    result1,
    result2,
    result3,
    result4,
    result5,

));

console.log(writeParagraph(
    result2,
    result5,
    result3,
    result1,
    result4,

));

console.log(writeParagraph(
    result3,
    result2,
    result4,
    result1,
    result5,

));



// creating a new <p> element and appending it to the body
// let paragraph1 = document.createElement('p');
// paragraph1.innerHTML = result1 +'<br>'+ result2 +'<br>'+ result3 +'<br>'+ result4 +'<br>'+ result5; 
// document.body.appendChild(paragraph1);


// let textElement = document.getElementById('text');
// textElement.style = "border: solid";

