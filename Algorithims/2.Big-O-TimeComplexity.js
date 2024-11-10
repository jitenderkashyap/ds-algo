function summation(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
/*
    n = Number of Inputs 

    function summation(n){          ------------------  n=4
        let sum=0;                  ------------------- 1
        for(let i=1;i<=n;i++){      
            sum+=i;                 ------------------- n 
        }
        return sum;                 ------------------- 1
    }

    summation(4) = 10
    1+2+3+4=10

    So Time Complexity of above code is 
    O(n+2) or we can ignore 2 extra because it's negligible
    O(n) = Linear 
*/

function summation(n) {
    return (n * (n + 1)) / 2;
}

/* 
    n = Number of Inputs 
    function summation(n){
        return (n * (n + 1)) / 2;   ----------------- 1
    }

    So Time Complexity of above code is 
    O(1) = Constant
*/