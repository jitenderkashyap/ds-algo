function bubbleSort(arr){
    for(var i=0;i<arr.length;i++){
        for(var j=0;j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

var arr = [58, 2, 9, 65, 22, 64, 11, 33];
console.log(bubbleSort(arr));