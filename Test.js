//Net salary calculator

//enter basic salary

function salary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;

    let payee = grossSalary * 0.03;

    let nssfDeductions = grossSalary * 0.86;

    let nhifDeductions = grossSalary * 0.0025;

    let totalDeductions = payee + nssfDeductions + nhifDeductions
    let netSalary = grossSalary - totalDeductions;

}
 
//enter basic salary

   console.log(10000,20000);



