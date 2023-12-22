
class Heap {
    private arr: number[];
    constructor() {
      this.arr = [];
    }
  
      heapifyDown(): void {
        let index: number = 0;
        while (index < this.arr.length) {
          let left: number = 2 * index + 1;
          let right: number = 2 * index + 2;
          let smallest: number = index;
  
          if (left < this.arr.length && this.arr[left] < this.arr[smallest]) {
              smallest = left;
          }
  
          if (right < this.arr.length && this.arr[right] < this.arr[smallest]) {
            smallest = right;
          }
  
          if (smallest == index)  return;
          [this.arr[smallest], this.arr[index]] = [this.arr[index], this.arr[smallest]];
          index = smallest;
        }
    }
  
     heapifyUp(): void {
      let index: number = this.arr.length - 1;
  
      while (index > 0) {
        let parentIndex: number = Math.floor((index - 1) / 2);
        if (this.arr[parentIndex] > this.arr[index]) {
          [this.arr[parentIndex], this.arr[index]] = [this.arr[index], this.arr[parentIndex]];
          index = parentIndex;
        } else {
          break;
        }
      }
    }
  
     insertValue(value: number): void {
      this.arr.push(value);
      this.heapifyUp();
    }
  
     peek(): number | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
      return this.arr[0];
    }
  
     pop(): number | undefined {
      if (this.isEmpty()) {
        return undefined;
      }
      let result: number = this.arr[0];
      this.arr[0] = this.arr[this.arr.length - 1];
      this.arr.pop();
      this.heapifyDown();
      return result;
    }
  
    isEmpty(): boolean {
      return this.arr.length == 0;
    }
  };
  
  function displayHeap(heapObj: Heap): void {
    while (!heapObj.isEmpty()) {
      console.log(heapObj.pop() + " ");
    }
    console.log("\n");
  }
  
  let obj1: Heap = new Heap();
  
  for(let val = 10; val >= 0; val--) {
    obj1.insertValue(val);
  }
  
  displayHeap(obj1);
  
  let obj2: Heap = new Heap();
  for(let val = 10; val <= 20; val++) {
    obj2.insertValue(val);
  }
  
  displayHeap(obj2);  