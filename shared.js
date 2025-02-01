function inputValue(id){
    const getinputValue = document.getElementById(id).value;
    const getInputInNumber = parseFloat(getinputValue);
    return getInputInNumber;
}

function getInnerText(id){
    const innerrText = document.getElementById(id).innerText;
    const innerTextToNumber = parseFloat(innerrText);
    return innerTextToNumber;
}