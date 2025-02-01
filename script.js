document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const mail = inputValue('login-mail');
    const pin = inputValue('login-pin');

    if(pin === '123'){
        window.location.href='/bank.html';
    }
    else{
        alert('who are you? Identify yourself.');
    }
    console.log(mail,pin);

})
