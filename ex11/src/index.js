function switchCase(letter) {
  // Write code below this line
  var animals;
  switch (letter) {
    case "a":
      animals = "antelope";
      break;
    case "b":
      animals = "bird";
      break;
    case "c":
      animals = "cat";
      break;
    default:
      animals = "stuff";
      break;
  }
  // write code above this line
  return animals;
}

switchCase("a"); // Change this line

module.exports = switchCase;
