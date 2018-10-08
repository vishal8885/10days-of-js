function listen() {
    let hashTable = {btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9 }
    for (let key in hashTable) {
        hashTable[key] = document.getElementById(key);
    }
    btn5.addEventListener("click", function() {
        var temp=btn1.innerHTML; btn1.innerHTML=btn4.innerHTML;                           btn4.innerHTML=btn7.innerHTML; btn7.innerHTML=btn8.innerHTML;                             btn8.innerHTML=btn9.innerHTML; btn9.innerHTML=btn6.innerHTML;                             btn6.innerHTML=btn3.innerHTML; btn3.innerHTML=btn2.innerHTML;
        btn2.innerHTML=temp; 
    });
    
}
