function sumInput() {
    let arr = [];
    let num = prompt("Введите число");
    while (num !== null && num !== "" && isFinite(num)) {
        arr.push(+num);
        num = prompt("Введите число");
    }

    let sum = 0;

    for (let n of arr) {
        sum += n;
    }
    
    return sum;
}

alert(sumInput());