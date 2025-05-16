// deposit

//  ...... input field value...
const getInputvalue=(id)=>{
    const inputvalue=document.getElementById(id).value;
    const getInputvaluenumber=parseFloat(inputvalue);
    return getInputvaluenumber;
}

// inner text****

const getInnerText=(id)=>{
   const innerText=document.getElementById(id).innerText;
   const getconvertednumber=parseFloat(innerText);
   return getconvertednumber;
}

// field clear*****
const fieldclear =(id)=>{
   document.getElementById(id).value=''
} 
  
// cashout*****

// cashout inputvalue
const getvalueinput=(id)=>{
   return parseFloat(document.getElementById(id).value)
}
// cashout innertext
const getvalueText=(id)=>{
   return document.getElementById(id).innerText
}