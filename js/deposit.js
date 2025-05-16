document.getElementById('depositbtn').addEventListener('click',()=>{
    const depositaccount=getInputvalue('inputDepositAmount');
    const depositpin=getInputvalue('inputdepositPinNo');
    const balance=getInnerText('Balance');

    if(depositpin===1234){
        const totalamount=depositaccount+balance;
        // document.getElementById('Balance').innerText=totalamount
        const getbalance=document.getElementById('Balance');
        getbalance.innerText=totalamount;

        fieldclear('inputDepositAmount');
        fieldclear('inputdepositPinNo');
        document.getElementById('Balance').innerText=totalamount

           const createdepodiv=document.createElement('div')
            createdepodiv.classList.add('bg-green-400');
            createdepodiv.classList.add('mt-4');
            createdepodiv.innerHTML=`
              <h1 class=' text-2xl font-bold '>Bank Account</h1>
              <p> Taka ${depositaccount} has been Deposited</p><br>
              <p> Total Amount ${totalamount}</p>
             `
             document.getElementById('transactionsection').appendChild(createdepodiv);
             

    }else{
        alert('Please Enter your correct pin');
    }
})