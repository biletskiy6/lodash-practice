const nameInput = document.querySelector('.name');

const handler = (e) => {
  console.log(e.target.value);
};

nameInput.addEventListener('input', _.debounce(handler, 1000));
