let data = [];
firstCheck: for (let i = 0; i >= 0; i++) {
    let m = prompt("Enter an integer (a negative integer to quit)");
    let firstNumber = Number(m);
    let firstCheck = Number.isInteger(firstNumber);
    if (firstCheck == true) {
        data.push(firstNumber);
        break firstCheck;
    }
    else {
        continue firstCheck;
    }
}
if (data[0] >= 0) {
    positiveCheck: for (let i = 0; i >= 0; i++) {
        let n = prompt("Enter an integer (a negative integer to quit)");
        let otherNumber = Number(n);
        let otherNumberCheck = Number.isInteger(otherNumber);
        if (otherNumberCheck == true) {
            if (otherNumber >= 0) {
                data.push(otherNumber);
                continue positiveCheck;


            } else {
                break positiveCheck;
            }
        } else {
            continue positiveCheck;
        }
    }
}
else {
    data[0] = 0;
}

function readInput(dataArray) {
    let dataList = [];
    for (let i = 0; i < dataArray.length; i++) {
        dataList.push(dataArray[i]);
    }
    return dataList;
}

let dataList = readInput(data);

console.log(dataList);

function displayAvg(dataList) {
    let avg = 0;
    let avg2Dec = 0;
    let sum = 0;
    for (let i = 0; i < dataList.length; i++) {
        sum += dataList[i];
    }
    avg = sum / dataList.length;
    avg2Dec = avg.toFixed(2);
    return avg2Dec;
}

function displayMin(dataList) {
    return Math.min.apply(null, dataList);
}

function displayMax(dataList) {
    return Math.max.apply(null, dataList);
}

alert("For the list " + readInput(data) + ", the average is " + displayAvg(dataList) + ", the minimum is " + displayMin(dataList) + ", and the maximum is " + displayMax(dataList));
