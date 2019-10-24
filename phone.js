var string = "hello world";
var obj = {
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

for (let i = 0; i < string.length; i++) {
  for (let key in obj) {
    let index = obj[key].indexOf(string[i]);
    // console.log(string[i], index);
    if (index >= 0) {
      console.log(string[i], "Press button:", key, "-", index + 1, "times");
    }
  }
}
