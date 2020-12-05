var randNumSpan = document.getElementById('randNum');
var randNumber = Math.floor(Math.random() * 5) + 1;
randNumSpan.innerHTML = randNumber;

function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }

var answerFactorial = factorialize(randNumber);

var answerInput = document.querySelector('#answer');
var checkButton = document.getElementById('button');
var resultArea = document.getElementById('resultMessage')

checkButton.addEventListener('click', ()=> {
    console.log(answerInput);
    if (Number(answerInput) == answerFactorial) {
        resultArea.innerHTML = `Your answer is correct. Congratulation!`;
    } else {
        resultArea.innerHTML = `Your answer is incorrect. The correct answer is ${answerFactorial}`;
    }
});