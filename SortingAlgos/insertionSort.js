function insertionSort(arr){
    for(var i=1;i<arr.length;i++){
        let current=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>current){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=current;
    }
    return arr;
}

var arr = [58, 2, 9, 65, 22, 64, 11, 33];
console.log(insertionSort(arr));