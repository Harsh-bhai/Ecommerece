let a = ["apple", 1];
const list = [
  ["apple", 1],
  ["apple", 1],
  ["apple", 1],
  ["apple", 3],
  ["apple", 2],
];

const count = (list,item) => {
  const b = {};

  for (const num of list) {
    b[num] = b[num] ? b[num] + 1 : 1;
  }
  return b[item.toString()]
};
let b=count(list,a)
console.log(b)
// // let c='apple,1'
// // console.log(c.split(","))
// console.log(list[0].toString())