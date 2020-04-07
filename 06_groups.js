class Group {
  constructor(g = []) {
    this.members = g;
  }
  
  static from(coll) {
    return new Group(coll);
  }

  add(val) {
    if (this.members.some(m => m == val)) {
      console.log("Cannot add value, already exists");
    } else {
      this.members.push(val);
    }
  }

  delete(val) {
    if (this.members.find(m => m === val)) {
      this.members = this.members.filter(m => m !== val);
    } else {
      console.log("Value not found in the Group, ignoring");
    }
  }

  has(val) {
    if (this.members.find(m => m === val)) {
      return true;
    } else {
      return false;
    }
  }
  
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
// → Already exists! NOOP
group.delete(10);
console.log(group.has(10));
// → false