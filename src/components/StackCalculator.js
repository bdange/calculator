class StackSet {
  constructor(number) /*(3) for example*/ {
    if (arguments.length < 1) {
      throw new Error("Enter a maxSize!");
    }

    this.stacks = [[]];
    this.maxSize = maxSize;
  }
  //create push method with a value
  push(value) {
    if (this.stacks[this.stacks.length - 1].length === this.maxSize) {
      this.stacks.push([]);
    }
    //push value into the last stack
    this.stacks[this.stacks.length - 1].push(value);
  }
  //find the last stack and remove its last value
  pop() {
    const value = this.stacks[this.stacks.length - 1].pop();
    //check if num of stacks > 1
    if (
      this.stacks.length > 1 &&
      this.stacks[this.stacks.length - 1].length === 0
    ) {
      this.stacks.pop();
    }
    return value;
  }

  popAt(number) {
    // checks
    // check if the number is 0 or larger than the number of allocated stacks
    if (number < 1 || number > this.stacks.length) {
      throw new Error(
        "This number is either too small or too large for our stack."
      );
    }
    //check if the number is the same as the last stack, we can run a regular pop()
    if (number === this.stacks.length) {
      return this.pop();
    }
    // otherwise
    // get the stack index
    let stack = this.stacks[number - 1];
    let value = stack.pop();
    let nextStack = [];

    for (let i = number; i < this.stacks.length; i++) {
      //start at the stack with our numbers param
      nextStack = this.stacks[i];
      stack.push(nextStack.shift()); //add the poped value at the beginning of our new array
      stack = nextStack; // let's start a new stack again.
    }
    // let's start again the previous check, just in case.
    if (
      this.stacks.length > 1 &&
      this.stacks[this.stacks.length - 1].length === 0
    ) {
      this.stacks.pop();
    }

    return value;
  }
}
