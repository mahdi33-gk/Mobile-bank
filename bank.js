document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const balance = getInnerText('bank-balance');
    const bankAddInputAmmount = inputValue('add-moneyInput');
    const bankPin = inputValue('add-pinInput');
    if(isNaN(bankAddInputAmmount)){
        alert('add a valid ammount');
        return;
    }
    if(bankPin === 123){
        const newBalance = balance + bankAddInputAmmount;
        document.getElementById('bank-balance').innerText = newBalance;
        document.getElementById('add-pinInput').value = '';
    }
    else{
        alert ('incorrect.')
    }
})

