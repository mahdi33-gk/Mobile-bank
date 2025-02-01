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

function showSection(id){
    document.getElementById('addmoney-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transiction-form').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}