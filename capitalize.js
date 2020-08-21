const capitalize = (str) => {
  const toLower = _.toLower(str);
  const firstLetter = _.chain(toLower).head().toUpper().value();
  const tail = _.chain(toLower).tail().join('').value();

  return firstLetter + tail;
};

console.log(capitalize('foo Bar'));
