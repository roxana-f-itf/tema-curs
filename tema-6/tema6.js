//ex. 1.1;

let alertFunction = function () {
  alert("The first button was pressed.");
  return alertFunction;
};


//ex. 1.2; 

let button = document.createElement("button");
button.innerText = "Second";

button.addEventListener("click", function () {
  alert("The second button was pressed.");
});
document.querySelector('body > div').appendChild(button);


//ex. 1.3;

let startButton = document.createElement("button");
startButton.innerText = "Start";
document.querySelector('body > div').appendChild(startButton);

function createButton(text) {
  let newButton = document.createElement("button");
  newButton.innerText = text;
  document.querySelector('body > div').appendChild(newButton);
  return newButton;
};

startButton.addEventListener("click", function () {
  alert("Start");

  let stepOneButton = createButton("Step 1");
  stepOneButton.addEventListener("click", function () {
    alert("Step 1");

    let stepTwoButton = createButton("Step 2");
    stepTwoButton.addEventListener("click", function () {
      alert("Step 2");

      let stepThreeButton = createButton("Step 3");
      stepThreeButton.addEventListener("click", function () {
        alert("Step 3");

        let stepFourButton = createButton("Step 4");
        stepFourButton.addEventListener("click", function () {
          alert("Step 4");

          let stepFiveButton = createButton("Step 5");
          stepFiveButton.addEventListener("click", function () {
            alert("You've reach the end, there are no more buttons");
          });
        });
      });
    });
  });
});


// ex. 1.4;

let getStartedButton = document.createElement("button");
getStartedButton.innerText = "What's your favorite color?";
document.body.appendChild(document.createElement('br'));
document.body.appendChild(getStartedButton);

getStartedButton.addEventListener("click", function() {
  document.location.href = "../tema-6/tema6.1.html";
});
