document.getElementById('depobtn').addEventListener('click',()=>{
    const deposec=document.getElementById('depositsection');
    deposec.classList.remove('hidden');
    document.getElementById('cashoutSection').classList.add('hidden');
    document.getElementById('transactionsection').classList.add('hidden');
    // active***
    document.getElementById('depobtn').classList.add('bg-pink-500');
    document.getElementById('cashbtn').classList.remove('bg-pink-500');
    document.getElementById('transbtn').classList.remove('bg-pink-500');


})

document.getElementById('cashbtn').addEventListener('click',()=>{
 document.getElementById('cashoutSection').classList.remove('hidden');
    document.getElementById('depositsection').classList.add('hidden')
    document.getElementById('transactionsection').classList.add('hidden');

//  active*****
document.getElementById('cashbtn').classList.add('bg-blue-500');
document.getElementById('transbtn').classList.remove('bg-pink-500');
document.getElementById('depobtn').classList.remove('bg-pink-500');

})


document.getElementById('transbtn').addEventListener('click',()=>{
    document.getElementById('transactionsection').classList.remove('hidden');
    document.getElementById('depositsection').classList.add('hidden');
    document.getElementById('cashoutSection').classList.add('hidden');
    // active***
    document.getElementById('transbtn').classList.add('bg-orange-500');
    document.getElementById('depobtn').classList.remove('bg-pink-500');
     document.getElementById('cashbtn').classList.remove('bg-pink-500');



})