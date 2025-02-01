document.getElementById('btn-cashout').addEventListener('click', function(event){
    event.preventDefault();
    const accountBalance = getInnerText('bank-balance');
    const cashOutAmmount = inputValue('add-cashout-Input');
    const cashoutPin = inputValue('add-cashout-pin');

    if(cashoutPin === 123 && cashOutAmmount>0 && accountBalance > cashOutAmmount){
        const displayBalance = accountBalance - cashOutAmmount;
        document.getElementById('bank-balance').innerText = displayBalance;
        document.getElementById('add-cashout-pin').value = '';
    }
    else{
        alert('Sorry! somethings not right.');
    }
})