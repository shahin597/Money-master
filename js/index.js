
function totalExpense() {
    const foodInputText = document.getElementById("food-input").value;
    const foodInput = parseInt(foodInputText);
    const rentInputText = document.getElementById('rent-input').value;
    const rentInput = parseInt(rentInputText);
    const clothInputText = document.getElementById("cloth-input").value;
    const clothInput = parseInt(clothInputText);
    const totalInput = foodInput + rentInput + clothInput;
    // total expense
    let totalExpense = document.getElementById("total-expense");
    totalExpense.innerText = totalInput;
    return totalExpense;
}
function totalIncome() {
    const incomeInputText = document.getElementById('income-input').value;
    const incomeInput = parseInt(incomeInputText);
    const balance = document.getElementById('balance');
    let totalExpense = document.getElementById("total-expense").innerText;

    balance.innerText = incomeInput - parseInt(totalExpense);


}


// calculate button

document.getElementById('calculate-button').addEventListener('click', function () {
    totalExpense();
    totalIncome();

});
// save
function save() {
    const saveInputText = document.getElementById('save-input').value;
    const saveInput = parseInt(saveInputText);
    const incomeInputText = document.getElementById('income-input').value;
    const incomeInput = parseInt(incomeInputText) / 100;
    const savingAmountText = document.getElementById('saving-amount');
    const savingAmount = incomeInput * saveInput;
    savingAmountText.innerText = savingAmount;
    // remain
    const balance = document.getElementById('balance').innerText;
    const balancetk = parseInt(balance);
    const remain = document.getElementById('remaining-balance');
    const remainingBalance = balancetk - savingAmount;

    remain.innerText = remainingBalance;






}

// save button
document.getElementById('save-button').addEventListener('click', function () {
    save();


})


