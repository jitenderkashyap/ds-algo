class Queue {
    data = new Array();
    maxSize;
    currentSize;
    constructor(size) {
        this.maxSize = size;
        this.currentSize = 0;
    }

    enqueue(num) {
        if (this.currentSize < this.maxSize) {
            this.data[this.currentSize] = num;
            this.currentSize++;
        } else {
            console.warn("Queue is full you can not add this number ", num);
        }
    }

    dequeue() {
        if (this.currentSize > 0) {
            for (var i = 0; i <= this.currentSize; i++) {
                this.data[i] = this.data[i + 1];
            }
            this.data.length = this.currentSize - 1;
            this.currentSize--;
        } else {
            console.warn("Queue is already empty");
        }
    }

    display() {
        console.table(this.data);
    }
}

var q = new Queue(5);

q.enqueue(10);
q.enqueue(20);
q.enqueue(30);

q.dequeue();
q.dequeue();
q.enqueue(353);
q.enqueue(322);
q.enqueue(686);
q.enqueue(977);


q.display();