verify(/ca(r|t)/,
  ["my car", "bad cats"],
  ["camper", "high art"]);

verify(/pr?op/,
  ["pop culture", "mad props"],
  ["plop", "prrrop"]);

verify(/ferr[^u]/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]);

verify(/ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]);

verify(/\s(\.|,|:|;)/,
  ["bad punctuation ."],
  ["escape the period"]);

verify(/\w{7,}\b/,
  ["hottentottententen"],
  ["no", "hotten totten tenten"]);

verify(/\b[^e\s]+\b/i,
  ["red platypus", "wobbling nest"],
  ["earth bed", "learning ape", "BEET"]);


function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}