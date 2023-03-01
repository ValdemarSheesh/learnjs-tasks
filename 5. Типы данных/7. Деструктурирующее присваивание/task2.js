let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let maxName = null;
    let maxSalary = 0;

    for (const [name, salary] of Object.entries(salaries)) {
        if (salary > maxSalary) {
            maxSalary = salary;
            maxName = name;
        }
    }

    return maxName;
}

console.log(topSalary(salaries));