//write a js functions that converts number into proper format
//Eg:1000 =>10,000;
//Eg
//Library functions
//argument pass in library functions
//

const ProperFormat = (num) => {
  // const prop = num.toString().split(" ").reverse();
  const prop = num.toLocaleString();

  console.log(prop);
};

module.exports = { ProperFormat };
