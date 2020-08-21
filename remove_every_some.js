let users = [
  { id: 1, user: 'barney', age: 36, active: true, likes: 110 },
  { id: 2, user: 'jack', age: 36, active: false, likes: 30 },
  { id: 3, user: 'pete', age: 16, active: true, likes: 800 },
  { id: 4, user: 'neymar', age: 26, active: false, likes: 30 },
];

// const result = _.reject(users, 'active');
// console.log(result);

const isSomeActive = _.some(users, (user) => {
  return user.active;
});

const isAllActive = _.every(users, (user) => {
  return user.active;
});

console.log(isEveryActive);
