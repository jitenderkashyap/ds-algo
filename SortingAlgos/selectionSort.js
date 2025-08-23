function selectionSort(arr){
    for(var i=0;i<arr.length;i++){
        let minIndex=i;
        for(var j=i+1;j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex=j;
            }
        }
        [arr[i],arr[minIndex]]=[arr[minIndex],arr[i]]

    }
    return arr;
}

var arr = [58, 2, 9, 65, 22, 64, 11, 33];
console.log(selectionSort(arr));