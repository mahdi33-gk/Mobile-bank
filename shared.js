function inputValue(id){
    const getinputValue = document.getElementById(id).value;
    const getInputInNumber = parseFloat(getinputValue);
    return getInputInNumber;
}