//https://www.hackerrank.com/challenges/js10-loops/problem
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

/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    for (let c of s) {
        if(isVowel(c)) {
            console.log(c);   
        }
    }
    
    for (let c of s) {
        if(!isVowel(c)) {
            console.log(c);   
        }
    }
}

function isVowel(c) {
    let value = false;
    if(c == 'a' || c == 'e'|| c == 'i' || c == 'o' || c == 'u') {
            value = true;
    }
    return value;
}
function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}
