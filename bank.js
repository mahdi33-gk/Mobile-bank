document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    const balance = getInnerText('bank-balance');
    const bankAddInputAmmount = inputValue('add-moneyInput');
    const bankPin = inputValue('add-pinInput');

    if(bankPin === 123){
        const newBalance = balance + bankAddInputAmmount;
        document.getElementById('bank-balance').innerText = newBalance;
    }
    else{
        alert ('incorrect.')
    }
})

