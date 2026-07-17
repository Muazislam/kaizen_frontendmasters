//  <<<<-----------Recursion------------>>>>

// <<---------- Basic Recursion Example--------->>

// const printNumbers = (number) => {
//   if (number > 10) {
//     return;
//   }

//   console.log(number);
//   printNumbers(number + 1);
// };

// printNumbers(1);

// <<---------- Understanding the Call Stack --------->>

// function countdown(n) {
//   console.log(n)
//   if(n <= 0) return

//   console.log(`Before`)
//   countdown(n - 1)
//   console.log(`After`)
// }

// countdown(3)

// <<----------When to Use Recursion--------->>

const fileSystem = {
  name: `root`,
  type: `folder`,
  children: [
    {
      name: `documents`,
      type: `folder`,
      children: [
        { name: `resume.pdf`, type: `file` },
        { name: `notes.txt`, type: `file` },
      ],
    },
    {
      name: 'photos',
      type: `folder`,
      children: [{name: `vacation.jpg`, type: `file`}],

    }
    {name: readme.txt, type: `file`}
  ],
};

function countFiles(item) {
  if(item.type === `file`) return 1

  let count = 0

  for (const child of item.children){
    count += countFiles(child)
  }
  return count
}

console.log(countFiles(filesystem))