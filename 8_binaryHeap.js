console.log('BinaryHeap');

class MaxBinaryHeap {
    constructor(){
        this.value = []
    }

    addValue(value) {
        this.value.push(value)
        let index = this.value.length - 1;
        const newValue = this.value[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.value[parentIndex];
            if (newValue <= parent) {
                break
            }
            this.value[parentIndex] = newValue;
            this.value[index] = parent;

            index = parentIndex;
        }
        return this.value
    }
}

const heap = new MaxBinaryHeap();
heap.addValue(1)
heap.addValue(2)
heap.addValue(3)
heap.addValue(4)
heap.addValue(4)
heap.addValue(4)
heap.addValue(4)
heap.addValue(10)
heap.addValue(4)
heap.addValue(4)


console.log(heap)
