let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

function getSumSalaries(salaries) {
    let sum = 0;
    for (let key in salaries) {
        sum += salaries[key];
    }
    return sum;
}

console.log(getSumSalaries(salaries));