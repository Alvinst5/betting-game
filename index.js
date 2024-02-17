function deposit(){
    const Deposit_Amount = document.getElementById("depositAmount").value;
    localStorage.setItem('deposit-amount', Deposit_Amount);
    window.open("bettingpart.html", "_self");
    
}