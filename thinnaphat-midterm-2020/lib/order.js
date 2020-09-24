let orderNumber,
number,
numberCheck;

positiveCheck:
while (true) {
    let n = prompt("Enter a positive integer");
    number = Number(n);
    numberCheck = Number.isInteger(number);
    if (numberCheck == true) {
        if (number > 0) {
            orderNumber = number;
            break positiveCheck;
        }
        else {
            continue positiveCheck;
        }
    }
    
}
if (orderNumber == 1) {
    alert("You would like to order " + orderNumber + " book")
}
else if (orderNumber > 1){
    alert("You would like to order " + orderNumber + " books")
}
