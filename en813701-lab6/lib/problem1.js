let rangeNumber;
positiveCheck:
while (true) {
    let n = prompt("Enter a positive integer");
    let number = parseInt(n);
    if (number > 0) {
        rangeNumber = number;
        break positiveCheck;
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

if (rangeNumber == 1) {
    alert("For n = " + rangeNumber + " prime numbers are " + primeFactorsTo(rangeNumber));
}
else if (rangeNumber == 2) {
    alert("For n = " + rangeNumber + " prime number is " + primeFactorsTo(rangeNumber));
}
else {
    alert("For n = " + rangeNumber + " prime numbers are " + primeFactorsTo(rangeNumber));
}