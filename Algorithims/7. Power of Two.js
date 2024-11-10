/*
    -- Power of Two --
    power of two means , that any particualar number is power of two or not
    for eg: - 4=2^2 8=2^3 16=2^4
*/

function isPowerOfTwo(n) {
    if (n < 1) { return false; }
    while (n > 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

console.log(isPowerOfTwo(4)); // true
console.log(isPowerOfTwo(5)); // false
console.log(isPowerOfTwo(6)); // false
console.log(isPowerOfTwo(8)); // true

/* 
    How above code works 
    suppose our number is 8 
    the loop works until the values is greater than 1 and every time we divide the number by 2 
    and if every time divide by number remainder remains 0 it means the number is power of two
*/

/* 
    Time Complexity of Above Program is 
    O(logn)
*/

function bitwisePowerOfTwo(n) {
    if (n < 1) { return false; }
    return (n & (n - 1)) === 0;
}

console.log(bitwisePowerOfTwo(2)); // true
console.log(bitwisePowerOfTwo(16)); // true
console.log(bitwisePowerOfTwo(5));  // false
console.log(bitwisePowerOfTwo(8));  // true

/*
    How Above Code Works
    1=1
    2=01
    3=11
    4=100
    7=111
    8=1000

    when perform bitwise and(&) opertation with previous number and it gives zero it means it is power of two
    
    4=100
    3=011 (&) Bitwise Operation
    ------
    0=000  Result=0 It means 4 is power of two


    7=111
    6=110  (&) Bitwise Operation
    ------
    6=110  Result = 6 It means 7 is not a power of two
*/