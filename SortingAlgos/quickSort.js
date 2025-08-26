function quickSort(arr){
    if(arr.length<1){
        return arr;
    }
    let lastValue=arr[arr.length-1];
    let left=[];
    let right=[];
    for(var i=0;i<arr.length-1;i++){
        if(arr[i]<lastValue){
            left.push(arr[i]);
        }else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),lastValue,...quickSort(right)]

}

var arr = [58, 2, 9, 65, 22, 64, 11, 33];
console.log(quickSort(arr));