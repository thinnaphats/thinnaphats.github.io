let rangeNumber;
positiveCheck:
for (let i = 0; i >= 0; i++) {
    let n = prompt("Enter a positive integer");
    let number = Number(n);
    let intCheck = Number.isInteger(number);
    if (intCheck == true) {
        if (number >= 0) {
            rangeNumber = number;
            break positiveCheck;
        }
        else {
            continue positiveCheck;
        }
    }
    else {
        continue positiveCheck;
    }
}

function primeFactorsTo(max) {
    let store = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) {
        if (!store[i]) {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) {
                store[j] = true;
            }
        }
    }
    return primes;
}

if (rangeNumber == 0 || rangeNumber == 1) {
    alert("For n = " + rangeNumber + " is no prime number.");
}
else if (rangeNumber == 2) {
    alert("For n = " + rangeNumber + " prime number is " + primeFactorsTo(rangeNumber));
}
else {
    alert("For n = " + rangeNumber + " prime numbers are " + primeFactorsTo(rangeNumber));
}