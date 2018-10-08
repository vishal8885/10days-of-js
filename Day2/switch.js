//https://www.hackerrank.com/challenges/js10-switch/problem
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function getLetter(s) {
    let letter;
    let setA = 'aeiou';
    let setB = 'bcdfg';
    let setC = 'hjklm';
    let setD = 'npqrstvwxyz';
    let firstChar = s.charAt(0);
    if (setA.includes(firstChar)) {
        letter = 'A';
    }
    else if (setB.includes(firstChar)) {
        letter = 'B';
    }
    else if (setC.includes(firstChar)) {
        letter = 'C';
    }
    else if (setD.includes(firstChar)) {
        letter = 'D';
    }
    
    return letter;
}