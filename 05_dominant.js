require('./scripts.js');

function characterScript(charcode) {
  for (let script of SCRIPTS) {
    if (script.ranges.some( ([from, to]) => { return charcode >= from && charcode < to } )) {
      return script;
    }
  }
  return null; // charcode doesn't exist within any known script code ranges
}

function countBy(elements, groupTestFunc) { // send a collection and a test() to count results of
  let counts = []; // ret array of objects which will hold all test_result outcomes with their count
  for (let e of elements) {
    let key_lookup = groupTestFunc(e); // ret true/false testing against each element
    let known = counts.findIndex(c => c.test_result == key_lookup); // ret -1 on a miss
    if (known == -1) { // if this test_result doesn't exist in object array yet (it's new)
      count.push({test_result, count: 1}); // this is where objects get the key "test_result"
    } else { // this key of test_result exists, so..
      counts[known].count++; // we increment the count of this test_result passing
    }
  }
  return counts;
}

function dominantDirection(text) {
  let counts = [];
  for (let c of text) {
    let charcode = c.codePointAt(0); // get the UTF-16 code
    let script = characterScript(charcode); // get script object this UTF-16 code is a member of
    if (counts.some(obj => obj.script == script)) { // counts.include?(some obj.property matching script)
      // script exists in counts, increment its total
      counts[counts.findIndex(obj => obj.script == script)].count++;
    } else { // DNE, must be added
      counts.push( { script, count: 1 } ); // initialize a new script record
    }
  }
  let leader = null;
  counts.forEach(e => { if (!leader || e.count > leader.count) leader = e; });
  return leader.script.direction;
}


console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl