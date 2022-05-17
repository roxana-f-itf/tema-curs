let myArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];
let sum = 0;
let no4 = 0;
let mySecondArray = [];

for (i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    sum = sum + myArray[i];
}

console.log(sum);   

for (i = 0; i < myArray.length; i++) {
    if (myArray[i] == 4) {
        no4 = no4 + 1; //no4++
    }
}

console.log(no4);

for (i = 0; i < myArray.length; i++) {
    mySecondArray.push(myArray[i] - 1);
}
console.log(mySecondArray);

for (i = 0; i < myArray.length; i++) {
    if (myArray[i + 1] == myArray[i]) {
        console.log(myArray[i])
    }
}

let userInput = prompt('Please type in a number between 1 and 16');
if (userInput > 0 && userInput < 17) {
    alert(mySecondArray[userInput - 1])
}


for (i = 0; i < mySecondArray.length; i++) {
    if (mySecondArray[i] <= 4) {
        let newArray = [];
        newArray.push(mySecondArray[i]);
        newArray.push(mySecondArray[i] + 1);
        newArray.push(mySecondArray[i] + 2);

        mySecondArray[i] = newArray;
    }
    else {
        let newArray = [];
        newArray.push(mySecondArray[i]);
        newArray.push(mySecondArray[i] - 1);
        newArray.push(mySecondArray[i] - 2);

        mySecondArray[i] = newArray;

    }
}
console.log(mySecondArray);



let nVar = prompt('Please input a number');
let xMessage = 'Please input a number lower or equal to ' + nVar;
let xVar = prompt(xMessage);
let count = 0;
let value = 1;
for (i = 1; i <= nVar; i++) {
    let row = '';
    if (count % 2 == 0) {
        value = 0;
    }
    else {
        value = 1;
    }
    for (j = 1; j <= nVar - count; j++) {
        if (i == xVar) {
            row = row + '=';
        }
        else {
            if (value == 0) {
                row = row + '0';
                value = 1;
            }
            else {
                row = row + "1";
                value = 0;
            }
        }
    }
    count++;
    console.log(row);
}

