//Net salary calculator

/*
    Calculates and displays all deductables and thus the net salarryw for an employee
    
    Gross salary = all_benefits + basic salary e.g house_allowance + hardship_allowance + risk_allowance + basic_salary
    taxable income = Gross pay
    deductions = (payee + NHIF + NSSF)
    Earnable pay = Gross pay - deductions e.g Gross salary - (payee + NHIF + NSSF) ==> net salary
    
*/

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



