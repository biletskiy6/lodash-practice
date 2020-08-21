// const result = _.random(1, 5);

// console.log(result);

const sum = (num1) => {
  return (num2) => {
    return (num3) => {
      return num1 + num2 + num3;
    };
  };
};

console.log(sum(1)(2)(3));
