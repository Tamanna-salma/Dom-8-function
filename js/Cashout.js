document.getElementById('cashOutbtn').addEventListener('click',()=>{
    const withdrawAmount=getvalueinput('inputCashOutAmount');
    const withdrawpin=getvalueinput('inputCashoutPinNo');
    const displaybalance=getvalueText('Balance');
    if(withdrawpin===1234 && displaybalance>= withdrawAmount && !isNaN(withdrawAmount)){
       const updatebalance =displaybalance-withdrawAmount;
       console.log(updatebalance);

       fieldclear('inputCashOutAmount');
       fieldclear('inputCashoutPinNo');
       document.getElementById('Balance').innerText=updatebalance;

       const creatediv=document.createElement('div');
       creatediv.classList.add('bg-red-500')
       creatediv.classList.add('mt-4')
       creatediv.innerHTML=`
       <h1 class='text-2xl font-bold '>withdraw</h1>
       <p>taka ${withdrawAmount}has been debited</p>
       <p> Total Balance ${updatebalance}</p>
       `
       document.getElementById('transactionsection').appendChild(creatediv)
    }
})