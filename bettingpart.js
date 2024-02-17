function option(y){
    var choice=y;
    const Deposit_Amt = localStorage.getItem('deposit-amount');
    const win=Deposit_Amt*10;
    var x = Math.floor((Math.random() * 5) + 1);
    const p =document.createElement('p');
    const btn =document.createElement('button');
    p.textContent="THE RESULT IS";
    p.setAttribute("id","res");
    btn.innerText=x;
    btn.setAttribute("id","result_button");
    document.getElementById("Result").append(btn);
    document.getElementById("Result").append(p);

    
    if (choice==x){

        const p2 =document.createElement('p');
        const p3 =document.createElement('p');
        p2.textContent="Congratulations You Won";
        p3.innerText=win;
        p3.setAttribute("id","res4");
        p2.setAttribute("id","res3");
        const a =document.createElement('a');
        a.innerText="Click to Claim Your Reward";
        a.setAttribute("id","reward");
        a.setAttribute("href","https://i.ytimg.com/vi/k6PEnJG2VE0/sddefault.jpg");
        document.getElementById("Final").append(a);
        document.getElementById("Final").append(p2);
        document.getElementById("Final").append(p3);
}
else{
        const p1 =document.createElement('p');
        const p2 =document.createElement('p');
        p1.textContent="Sorry You Lost";
        p1.setAttribute("id","res2");
        const a =document.createElement('a');
        a.innerText="Click to Claim Free Reward";
        a.setAttribute("id","reward");
        a.setAttribute("href","https://i.ytimg.com/vi/k6PEnJG2VE0/sddefault.jpg");
        document.getElementById("Final").append(a);
        document.getElementById("Final").append(p1);
}
}