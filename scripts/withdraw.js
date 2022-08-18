/*
1. Add withdraw button event handler.
2. Get withdraw amount by using getInputFieldValueById function.
3. Get previous withdraw amount by using getTextElementValueById function.
4. Calculate new withdraw total and set the value
4.5. set new withdraw total by using setTextElementValueById function.
5. Get previous balance total by using getTextElementValueById function.
6. Calculate the new balance total.
7. Set balance total using setTextElementValueById function
*/

document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const previousBalanceTotal = getTextElementValueById('balance-total');
    checkBalanceLimit(previousBalanceTotal,newWithdrawAmount);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    
    setTextElementValueById('withdraw-total',newWithdrawTotal);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total',newBalanceTotal);
});