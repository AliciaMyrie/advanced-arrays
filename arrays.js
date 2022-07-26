let studentNames = ["Derek", "Bridgette", "James"];

let teachers = [
  {
    name: "Damian",
    subjects: "arrays, javascript, mongodb",
  },
  {
    name: "Todd",
    subjects: "arrays, javascript",
  },
];

// sort();

// const sortedStudentNames = studentNames.sort();
// console.log(sortedStudentNames);

// filter()
// const ages = [11, 17, 20, 42, 45]
// const adults = ages.filter(age => age >= 18)

const filteredStudentNames = studentNames.filter;
// function (student) {
//   return student == "Derek";
// }

// (student) => {
//     return student === "Derek"
// }

//   (student) => student === "Derek"
// );

// (student) => true // dont do this

// studentNames = studentNames.filter((student) => true);

// console.log(filteredStudentNames);

// .find()
// const Derek = studentNames.find((student) => student === "Derek");
// console.log(Derek);

// .some()
// Returns true if some Element matches criteria

// const someDerek = studentNames.some((student) => student === "Derek");
// console.log("Do we have a Derek?", someDerek);

// // .every()
// const everyDerek = studentNames.every((student) => student === "Derek");
// console.log("Everyone's a Derek?", everyDerek);

// .forEach()
// Iterates over each element

// studentNames.forEach((student) => {
//   console.log(student);
// });

// .map()
// Transforms an array to a new form

// const justTheNames = teachers.map((teacher) => {
//   return teacher.name;
// });
// console.log(justTheNames);

// .reduce()
// Able to combine array into a single value
// * All the following examples prints the same result

let numbers = [10, 20, 30];

let totals = numbers.reduce((accumulator, currentValue, index, array) => {
  return accumulator + currentValue;
}, 0);
console.log(totals);

// accumulator is just a varibale here,
// just a word that has no significance, as long as it's consistent throughout the code

let total = 0;
for (let i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);

total = numbers.reduce((total, currentNumber) => total + currentNumber, 0);
console.log(total);
