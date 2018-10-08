
/*
https://www.hackerrank.com/challenges/js10-function/problem
 * Create the function factorial here
 */
function factorial(n) {
    let result = 1;
    for(let index = 2; index <= n; index++) {
        result = result * index;
    }
    return result;
}