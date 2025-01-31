document.getElementById('login-btn').addEventListener('click',function(event){
    event.preventDefault();
    const mail = document.getElementById('login-email').value;
    const pin = document.getElementById('login-pin').value;

    if(pin === '123'){
        window.location.href='/bank.html';
    }
    else{
        alert('who are you? Identify yourself.');
    }

})