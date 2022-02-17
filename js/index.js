
// total expense calculate
function totalExpense() {
    const foodInputText = document.getElementById("food-input").value;
    const foodInput = parseFloat(foodInputText);

    const rentInputText = document.getElementById('rent-input').value;
    const rentInput = parseFloat(rentInputText);

    const clothInputText = document.getElementById("cloth-input").value;
    const clothInput = parseFloat(clothInputText);

    // if given negative no or string in input field then give alert message
    if (foodInput < 0 || rentInput < 0 || clothInput < 0) {
        alert("put a int positive value");
        return false;

    }
    if (isNaN(foodInput) || isNaN(rentInput) || isNaN(clothInput)) {
        alert("put a int positive value");
        return false;
    }



    const totalInput = foodInput + rentInput + clothInput;
    // total expense
    let totalExpense = document.getElementById("total-expense");
    totalExpense.innerText = totalInput;


    return totalExpense;
}
//  income 
function totalIncome() {
    const incomeInputText = document.getElementById('income-input').value;
    const incomeInput = parseFloat(incomeInputText);
    const balance = document.getElementById('balance');
    let totalExpense = document.getElementById("total-expense").innerText;

    balance.innerText = incomeInput - parseFloat(totalExpense);

    // give alert if totalexpence is bigger than income
    if (incomeInput < totalExpense) {
        alert('Not have enough amount');
        return false;
    }


}


// calculate button

document.getElementById('calculate-button').addEventListener('click', function () {
    totalExpense();
    totalIncome();

});
// save calculation
function save() {
    const saveInputText = document.getElementById('save-input').value;
    const saveInput = parseFloat(saveInputText);
    // alert message 
    if (isNaN(saveInput) || saveInput < 0) {
        alert("put a int positive value");

    }
    const incomeInputText = document.getElementById('income-input').value;
    const incomeInput = parseFloat(incomeInputText) / 100;
    const savingAmountText = document.getElementById('saving-amount');
    const savingAmount = incomeInput * saveInput;
    savingAmountText.innerText = savingAmount;
    // remain
    const balanceText = document.getElementById('balance').innerText;
    const balance = parseFloat(balanceText);
    const remain = document.getElementById('remaining-balance');
    const remainingBalance = balance - savingAmount;

    remain.innerText = remainingBalance;


    // if given negative no or string in input field then give alert message
    if (incomeInput < 0) {
        alert("put a int positive value");

    }
    if (isNaN(incomeInput)) {
        alert("put a int positive value");

    }

}

// save button
document.getElementById('save-button').addEventListener('click', function () {
    save();


})


