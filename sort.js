let users = [
  { id: 1, user: 'barney', age: 36, active: true, likes: 110 },
  { id: 2, user: 'jack', age: 36, active: false, likes: 30 },
  { id: 3, user: 'pete', age: 16, active: true, likes: 800 },
  { id: 4, user: 'neymar', age: 26, active: false, likes: 30 },
];

// Native JS
// const sortedUsersByLikes = users.sort((prev, current) => {
//   return prev.likes < current.likes ? -1 : 1;
// });

// Lodash

const result = _.orderBy(users, ['likes', 'name'], ['asc', 'desc']);
console.log(result);
