//make function that will take argument standing for max integer you wanna count to
function linearSum(n) {

    //initialize a starting value for total sum
    let sum = 0;

    //run a For Loop that starts at first number and counts up to the max sum the numbers in the loop
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    //return final total sum
    return sum;
}

//log final output
console.log(linearSum(100));