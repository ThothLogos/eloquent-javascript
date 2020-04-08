class PGroup {
  constructor(g = []) { this.members = g; }
  
  add(val) {
    if (this.members.some(m => m == val)) {
      console.log("Cannot add value, already exists");
    } else { return new PGroup(this.members.concat([val])); }
  }
  
  delete(val) {
    if (this.members.find(m => m === val)) {
      return new PGroup(this.members.filter(m => m !== val));
    } else { console.log("Value not found in the Group, ignoring"); }
  }
  
  has(val) { return this.members.find(m => m === val) ? true : false; }

}

PGroup.empty = new PGroup([]);


let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");

console.log(b.has("b"));
// → true
console.log(a.has("b"));
// → false
console.log(b.has("a"));
// → false