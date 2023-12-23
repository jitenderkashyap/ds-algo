class Stack{
    data=new Array();
    maxSize;
    currentSize;
    constructor(size){
        this.maxSize=size;
        this.currentSize=0;
    }

    push(num){
        if(this.currentSize<this.maxSize){
            this.data[this.currentSize]=num;
            this.currentSize++;
        }else{
            console.warn("stack is full you can not add this number ",num);
        }
    }

    pop(){
        if(this.currentSize>0){
            this.data.length=this.currentSize-1;
            this.currentSize--;
        }else{
            console.warn("Stack is already empty");
        }
    }

    display(){
        console.table(this.data);
    }
}

var s=new Stack(6);

s.push(10);
s.push(20);
s.push(30);
s.pop();
s.push(40);
s.push(50);

s.display();