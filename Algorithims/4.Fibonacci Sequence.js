/* 
    -- Fibonacci Sequence --
    in mathmatics fibonacci sequence is sequence where each number is the sum of two preceding one
    for eg: - [0,1,1,2,3,5,8,13]

    0+1=1
    1+1=2
    2+3=5
    3+5=8
    5+8=13
    8+13=21
*/

function fibonacci(n) {
    const arr = [0, 1];
    for (let i = 2; i < n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    console.log(arr);
}

fibonacci(2); // [0,1]
fibonacci(3) // [0,1,1]
fibonacci(7) // [0,1,1,2,3,5,8]


/*
    Time Complexity
    O(n) = Linear

*/