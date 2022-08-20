/* 
1. Add Event Listener To The Deposit Button
2.Get Deposit Amount From The Deposit Input Field
2-5. Convert String Deposit Amount To A Number Type

3.Clear The Deposit Input Field After Getting The Value

4.Get The Previous Deposit Total

5.Calculate New Deposit Total And Set The Value To The Deposit Total

6.Get Current Balance Total

7.Calculate The New Balance And Set It To The Balance Total Element
*/

// Step-01:
document.getElementById('btn-deposit').addEventListener('click', function () {
    // Step-02:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // Step-03:
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please Enter a Valid Number');
        return;
    }

    // Step-04:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // Step-5:
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // Step-06:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);


    // Step-07:
    const newBalanceTotal = previousBalanceTotalAmount + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;


})