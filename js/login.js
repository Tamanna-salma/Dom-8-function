document.getElementById('loginbtn').addEventListener('click',()=>{
    const accountNo=getInputvalue('inputAccountNo');
    const logPin=getInputvalue('inputPin');
    if(accountNo=== 12345678 && logPin===1234){
        window.location.href='./home.html'

    }else{
        alert('Enter corret number or pin');
    }
})