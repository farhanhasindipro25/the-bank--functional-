function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}
function isNumber(inputValue){
    if(isNaN(inputValue)){
        alert("Please provide numerical values");
        return;
    }
}

function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}

function checkBalanceLimit(balanceValue, withdrawValue){
    if(withdrawValue > balanceValue){
        alert('You do not have sufficient balance.');
        return;
    }
}