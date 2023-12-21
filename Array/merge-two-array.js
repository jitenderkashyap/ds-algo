// Merge Two Array Using JS
var arr=[2,33,65,43,64,34,33];
var arr2=[13,26,39,52];
var output=new Array();
for(var i=0;i<arr.length;i++){
    output[i]=arr[i];
}
for(var j=0;j<arr2.length;j++){
    output[arr.length+j]=arr2[j];
}
console.table(output);