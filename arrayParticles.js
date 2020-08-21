const array = [1, 2, 3];

console.log(_.head(array)); // first
console.log(_.tail(array)); // all except of first

console.log('==========================');

const toSlug = (string) => {
  return _.chain(string).toLower().split(' ').join('-').value();
};

const result = toSlug('This is super quiz');

console.log(result);

// const string = 'foo';
// console.log(_.head(string));
// console.log(_.chain(string).tail().join('').value());
// console.log(_.tail(string));
// console.log(array.shift());
// console.log(array);
// console.log(_.last(string));

// console.log(_.initial(string));
