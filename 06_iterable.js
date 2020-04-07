class Group {
  constructor(g = []) { this.members = g; }
  static from(coll) { return new Group(coll); }
  
  add(val) {
    if (this.members.some(m => m == val)) {
      console.log("Cannot add value, already exists");
    } else { this.members.push(val); }
  }
  
  delete(val) {
    if (this.members.find(m => m === val)) {
      this.members = this.members.filter(m => m !== val);
    } else { console.log("Value not found in the Group, ignoring"); }
  }
  
  has(val) { return this.members.find(m => m === val) ? true : false; }

  [Symbol.iterator]() { return new GroupIterator(this); }
}

class GroupIterator {
  constructor(group) {
    this.i = 0;
    this.g = group.members;
  }

  next() {
    if (this.i == this.g.length) return { done: true };
    let value = { value: this.g[this.i] };
    this.i++;
    return { value, done: false };
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c