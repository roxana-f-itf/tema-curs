//ex. 1.1;

let alertFunction = function() {
  alert("The first button was pressed.");
  return alertFunction;
};


//ex. 1.2; 

let button = document.createElement("button");
button.innerText = "Second";

button.addEventListener ("click", function() {
  alert("The second button was pressed.");
});
document.body.appendChild(button);


//ex. 1.3;

let anotherButton = document.createElement("button");
anotherButton.innerText = "Start";
document.body.appendChild(anotherButton);

let buttonFunction = function() {
  let x = document.createTextNode("Step 1");
  anotherButton.appendChild(x);
  document.body.appendChild(anotherButton);
};
document.addEventListener("click", buttonFunction);

