const calculateTotalBudget = (laptops,mobiles,tablets) =>{
  const  laptop = 35000;
  const  tablet = 15000;
  const  mobile = 20000;

  const totalCost = (laptops * laptop) + (tablets*tablet) + (mobiles * mobile);
  return totalCost;

}

const result = calculateTotalBudget(1,2,3);
console.log(result)