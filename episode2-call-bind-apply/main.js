const printDetails = function (city, state) {
  console.log(this.fname, this.lname, city, state);
};

const person1 = {
  fname: "Sachin",
  lname: "Tendulkar",
};

printDetails.call(person1, "Mumbai", "Maharashtra");

printDetails.apply(person1, ["Mumbai", "Maharashtra"]);

const printFn = printDetails.bind(person1, "Mumbai", "Maharashtra");
printFn();
