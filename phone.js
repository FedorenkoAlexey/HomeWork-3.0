const string = "hello world";
const obj = {
  0: [" "],
  2: ["a", "b", "c"],
  3: ["d", "e", "f"],
  4: ["g", "h", "i"],
  5: ["j", "k", "l"],
  6: ["m", "n", "o"],
  7: ["p", "q", "r", "s"],
  8: ["t", "u", "v"],
  9: ["w", "x", "y", "z"]
};

const arrLetters = string.split('');
arrLetters.forEach(function(item, i, arrow) {
	for (const key in obj) {
    const index = obj[key].indexOf(arrow[i]);
    if (index >= 0) {
      console.log(arrow[i], "Press button:", key, "-", index + 1, "times");
    }
  }
})
