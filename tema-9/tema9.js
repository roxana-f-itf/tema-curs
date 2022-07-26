let year = 2021;
let month = 6;
let day = 1;
let dateDiv = document.getElementById('date');

let dayArray = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
let monthArray = ['January', 'February', 'March', 'April', 'May', 'June',
                  'July', 'August', 'September', 'October', 'November', 'December'];


for (new Date(year, month, day); new Date(year, month, day) <= new Date(); day += 6) {

    let newDate = new Date(year, month, day);

    let dayOfWeek = dayArray[newDate.getDay()];
    let dayOfMonth = newDate.getDate();
    let theMonth = monthArray[newDate.getMonth()];
    let theYear = newDate.getFullYear();

    let data = dayOfWeek + ', ' + theMonth + ' ' + dayOfMonth + ', ' + theYear;


    let text = document.createTextNode(data);
    let divForEachDate = document.createElement('div');
    divForEachDate.appendChild(text);

    let newLine = document.createElement('br');

    dateDiv.appendChild(divForEachDate);
    dateDiv.appendChild(newLine);
}