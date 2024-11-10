/* 
    -- Prime Numbers --
    in mathematics , a prime number is natural number greater than 1 that is not a product of two smaller natural numbers

    isPrime(5) = true (5*1,1*5)
    isPrime(4) = false (4*1,2*2,1*4)
*/

function isPrime(n) {
    if (n < 2) { return false; }
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(3)); // true
console.log(isPrime(4));  // false
console.log(isPrime(13));  // true
console.log(isPrime(14));  // false

/* 
    Time Complexity of Above Program is 
    O(n) = Linear
*/

/* 
    -- Optimal Solution --
    Integers larger than the square root do not need to be checked
    because whenever `n=a*b`,
    one of the two factors `a` and `b` is less than or equal to the 
    square root of `n`

    n=24, a=4 and b=6
    n=a*b
    Square root of 24 is 4.89

    Conclusion - 
    when we square root of any numbers then one of its product it alway less than or equal to 
    that's why we use Math.sqrt(n) for reducing the loop iteration
*/

function isPrimeOptimal(n) {
    if (n < 2) { return false; }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrimeOptimal(3)); // true
console.log(isPrimeOptimal(4));  // false
console.log(isPrimeOptimal(13));  // true
console.log(isPrimeOptimal(14));  // false

/* 
    Time Complexity of Above Program is
    O(sqrt(n))
*/