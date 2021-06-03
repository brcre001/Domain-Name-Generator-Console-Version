const pronoun = ["the", "our", "my", "their", "his"];
const adj = ["last", "greatest", "biggest", "smallest", "silliest"];
const noun = ["elon", "gates", "jobbs", "bezos", "mogul"];
const ending = [".com", ".net", ".us", ".io", ".biz"];

// // Loop to print 10 different combinations
for (let j = 0; j < pronoun.length; j++) {
  for (let k = 0; k < adj.length; k++) {
    for (let l = 0; l < noun.length; l++) {
        let randomIndex = Math.floor(Math.random() * ending.length);
        console.log(pronoun[j] + adj[k] + noun[l] + ending[randomIndex]);
    }
  }
}