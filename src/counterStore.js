import {observable} from 'mobx';

class CounterStore {
  @observable counter = 0;
  increment() {
    this.counter++;
    console.log("increment", this.counter);
  }
  decrement() {
    this.counter--;
    console.log("decrement", this.counter);
  }
}

const store = new CounterStore();
export default store;
