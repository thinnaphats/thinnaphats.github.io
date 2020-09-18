let data = [],
    list,
    number;

while (true) {
    readInput();
    list = readInput;


    if (number < 0) {
        (data == 0 ? alert("For the list that is empty, the average is 0, the minimun is 0, and the maximum is 0") : displayStats(list));
    } else if (number > 0) {
        continue;

    } else {
        continue;
    }
    break;

}

function readInput() {
    let n = prompt("Enter an integer (a nagative integer to quit): ");
    number = Number(n);
    if (Number.isInteger(number)) {
        if (number > 0) {
            data.push(number)
            return number, data;
        } else {
            return number, data;
        }
    } else {

        return number, data;
    }

}

function displayStats(number) {
    let sum = data.reduce(function (a, b) {
        return a + b;
    }, 0);

    let avg = (sum / data.length).toFixed(2);


    return alert("For the list  " + data + ", the average is " + avg + ", the minumun is " + Math.min.apply(Math, data) + ", the maximum is " + Math.max.apply(Math, data));
}