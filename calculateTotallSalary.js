const calculateTotalSalary = employees =>{
    let totalIncrement = 0;
    let totalStarting = 0;
    employees.map( employee =>{
       const {experience,increment,starting} = employee;
       let total = experience * increment;
       totalIncrement +=total;
       totalStarting += starting;
    })
    const totalSalaryCost = totalIncrement + totalStarting;
    return totalSalaryCost;
}
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
const result = calculateTotalSalary(employees);
console.log(result)