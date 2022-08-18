document.getElementById('btn-deposit').addEventListener('click',function(){
    /* STEP 1:
    1. Get the element by id.
    2. Get the value from the element.
    3. Convert the string value to a number.
    */
    const newDepositAmount = getInputFieldValueById('deposit-field');
    isNumber(newDepositAmount);
    /* STEP 2: 
    1. Get previous deposit total by id 
     */
    const previousDepositTotal = getTextElementValueById('deposit-total');
    // Calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // Set deposit total value
    setTextElementValueById('deposit-total',newDepositTotal);
    // Get previous balance by using function
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);
})