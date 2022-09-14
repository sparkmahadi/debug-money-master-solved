const calculateExpense = () => {
  const income = document.querySelector("#income").value;
  const food = document.querySelector("#food").value;
  const rent = document.querySelector("#rent").value;
  const clothes = document.querySelector("#clothes").value;

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""|| isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense =
    parseFloat(food) + parseFloat(rent) + parseFloat(clothes);

  // calculate balance
  const balance = parseFloat(income) - expense;
  //   validate income
  if (expense > parseFloat(income)) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentage = parseFloat(document.getElementById("save").value);
//   Validate saving percentage value
  if (savePercentage < 0 || isNaN(savePercentage)) {
    alert("Provide positive saving value");
  }
  
  else{
    // calculate remaining balance
  const balance = document.getElementById("balance").innerText;
  const savingAmount = (savePercentage / 100) * balance;
  const remainingBalance = balance - savingAmount;

  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
  }
};
