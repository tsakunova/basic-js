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
          if (newArray[index + 1] && !comands.includes(newArray[index + 1])) {
            newArray.splice(index + 1, 1);
          }
          break;
        }
        case "--discard-prev": {
          if (newArray[index - 1] && !comands.includes(newArray[index - 1])) {
            newArray.splice(index - 1, 1);
          }
          break;
        }
        case "--double-next": {
          if (newArray[index + 1] && !comands.includes(newArray[index + 1])) {
            newArray = [
              ...newArray.slice(0, index + 1),
              newArray[index + 1],
              ...newArray.slice(index + 1)
            ];
          }
          break;
        }
        case "--double-prev": {
          if (newArray[index - 1] && !comands.includes(newArray[index - 1])) {
            newArray = [
              ...newArray.slice(0, index),
              ...newArray.slice(index - 1, index),
              ...newArray.slice(index + 1)
            ];
          }
          index++;
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


//     let prev = [1, 2, 3, "--discard-next", 4, 5];

// function transform(arr) {
//   const comands = [
//     "--discard-next",
//     "--discard-prev",
//     "--double-next",
//     "--double-prev"
//   ];
//   const newArray = [...arr];
//   const resultArray = [];
//   newArray.forEach(function (item, index, arr) {
//     if (!comands.includes(item)) {
//       if (newArray[newArray.length - 1] !== "--discard-next") {
//         resultArray.push(item);
//       }
//     } else {
//       switch (item) {
//         case "--discard-next": {
//           resultArray.push(item);
//           break;
//         }
//         case "--discard-prev": {
//           if (index === 0) {
//             break;
//           } else {
//             if (typeof newArray[newArray.length - 1] === "number") {
//               resultArray.splice(resultArray.length - 1, 1);
//             }
//             resultArray.push(item);
//           }
//           break;
//         }
//         case "--double-next": {
//           if (arr[index + 1]) {
//             resultArray.push(arr[index + 1]);
//           }
//           break;
//         }
//         default: {
//           return null;
//         }
//       }
//     }
//   });

//   return resultArray.filter(function (item) {
//     return !comands.includes(item);
//   });
// }
// console.log(transform(prev));
