/*
    -- Factorial of Number --
    In mathmatics , the facorial of non-negetive integer 'n' denoted by 'n!' 
    the product of all positive integer less than or equal to 'n'

    Facorial of zero = 1
    factorial(4) = 4*3*2*1= 24
    factorial(5) = 5*4*3*2*1=120
*/

function facorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
    }
    return result;
}

console.log(facorial(4)); // 24
console.log(facorial(5)); // 120

/*
    Time Complexity
    O(n) = Linear
*/