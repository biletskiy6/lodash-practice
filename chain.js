let users = [
  { id: 1, user: 'barney', age: 36, active: true, likes: 110 },
  { id: 2, user: 'jack', age: 22, active: false, likes: 30 },
  { id: 3, user: 'pete', age: 18, active: true, likes: 800 },
  { id: 4, user: 'neymar', age: 27, active: false, likes: 30 },
];

// Lodash Common
// const getYoungestUserMessage = (users) => {
//   const activeUsers = _.filter(users, 'active');
//   const sortedActiveUsers = _.sortBy(activeUsers, ['age']);
//   const firstUser = sortedActiveUsers[0];
//   return `Hello, my name is ${firstUser.user} and i'm the youngest user in collection(${firstUser.age} years old)`;
// };

// Lodash Chaining

const getYoungestUserMessage = (users) => {
  return _.chain(users)
    .filter('active')
    .orderBy(['age'])
    .map((user) => user.user)
    .head()
    .value();
};

console.log(getYoungestUserMessage(users));
