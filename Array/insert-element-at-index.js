// Insert Element at Specific Position
var arr = [2, 33, 65, 43, 64, 34, 33];
var index = 3; // it means add 28 new Element before 43 
var newEl = 28;
for (var i = arr.length - 1; i >= 0; i--) {
    if (i >= index) {
        arr[i + 1] = arr[i];
        if (i == index) {
            arr[i] = newEl;
        }
    }
}
console.table(arr);