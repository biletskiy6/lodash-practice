let users = [
  { id: 1, user: 'barney', age: 36, active: true, likes: 110 },
  { id: 2, user: 'jack', age: 36, active: false, likes: 30 },
  { id: 3, user: 'pete', age: 16, active: true, likes: 800 },
  { id: 4, user: 'neymar', age: 26, active: false, likes: 30 },
];

const result = _.groupBy(users, 'likes');
console.log(result);
