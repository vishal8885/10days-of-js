let hashTable = {res, btn0, btn1, btnClr, btnEql, btnSum, btnSub, btnMul, btnDiv };
for (let key in hashTable) {
    hashTable[key] = document.getElementById(key);
}
btnClr.addEventListener("click", function(){
    res.innerHTML = "";
});

btn0.addEventListener("click", function(){
    res.innerHTML += 0;
});
btn1.addEventListener("click", function(){
    res.innerHTML += 1;
});
btnSum.addEventListener("click", function(){
    res.innerHTML += '+';
});
btnSub.addEventListener("click", function(){
    res.innerHTML += '-';
});
btnMul.addEventListener("click", function(){
    res.innerHTML += '*';
});
btnDiv.addEventListener("click", function(){
    res.innerHTML += '/';
});
btnEql.addEventListener("click", function(){
    let input = res.innerHTML;
    let inputArr = input.match(/[^\d()]+|[\d.]+/g);
    let operators = /[+-/*]/;
    for(let i=0;i<inputArr.length;i++) {
        if(operators.test(inputArr[i])) {
            continue;
        }
        inputArr[i] = parseInt(inputArr[i], 2);
    }
    let result = eval(inputArr.join(''));
    res.innerHTML = result.toString(2);
});
