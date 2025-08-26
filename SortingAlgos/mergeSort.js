function mergeSort(arr){
    if(arr.length <2){
        return arr;
    }
    let mid=Math.floor(arr.length /2);
    let left=arr.slice(0,mid);
    let right=arr.slice(mid);
    return merge(mergeSort(left),mergeSort(right));
}

function merge(left,right){
    let sort=[];
    while(left.length  && right.length ){
        if(left[0]<right[0]){
            sort.push(left.shift());
        }else{
            sort.push(right.shift());
        }
    }

    return [...sort,...left,...right];
}

var arr = [58, 2, 9, 65, 22, 64, 11, 33];
console.log(mergeSort(arr));