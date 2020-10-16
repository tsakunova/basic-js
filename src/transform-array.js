const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const comands = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev"
  ];

  let newArray = [...arr];

  let index = 0;
  while (index < newArray.length) {
    if (comands.includes(newArray[index])) {
      switch (newArray[index]) {
        case "--discard-next": {
          if (index + 1 < newArray.length && !comands.includes(newArray[index + 1])) {
            newArray.splice(index + 1, 1);
          }
          break;
        }
        case "--discard-prev": {
          if (index - 1 >= 0 && !comands.includes(newArray[index - 1])) {
            newArray.splice(index - 1, 1); 
          }
          break;
        }
        case "--double-next": {
          if (index + 1 < newArray.length && !comands.includes(newArray[index + 1])) {
            newArray = [
              ...newArray.slice(0, index + 1),
              newArray[index + 1],
              ...newArray.slice(index + 1)
            ];
          }
          break;
        }
        case "--double-prev": {
          if (index - 1 >=0 && !comands.includes(newArray[index - 1])) {
            newArray = [
              ...newArray.slice(0, index),
              ...newArray.slice(index - 1, index),
              ...newArray.slice(index + 1)
            ];
            if (index > 0) {
              index++;
            }
          }

          break;
        }
        default:
          return newArray;
      }
    }
    index++;
  }

  return newArray.filter(function (item) {
    return !comands.includes(item);
  });
}
