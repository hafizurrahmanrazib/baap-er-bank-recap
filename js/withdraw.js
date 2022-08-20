/* 
1. Add Event Handler With The Withdraw Button
2.Get The Withdraw Amount From The Withdraw input field

3.Clear The Withdraw Input Field

4. Get Previous Withdraw Total

5.Calculate Total Withdraw Amount And Set It to The Withdraw Total Element

6.Get Previous Balance

7.Calculate New Balance And Set It To The Balance Total Element

*/

// Step-1:
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // Step-02:
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // Step-03:
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please Enter a Valid Number');
        return;
    }

    // Step-04:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // Step-6:
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if (newWithdrawAmount > previousBalanceTotal) {
        alert("You Don't Have Enough Money To Withdraw. Please Deposit More Money First To Get Your Amount");
        return;
    }

    // Step-5:
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // Step-07:
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})