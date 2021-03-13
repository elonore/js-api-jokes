generateJoke();

function generateJoke() {
  // API
  const request = new XMLHttpRequest()

  request.open('GET', 'https://api.chucknorris.io/jokes/random?category={category}', true)
  request.onload = function() {
  // DB
  const data = JSON.parse(this.response)

  // PICK A RANDOM JOKE
  const item = data[Math.floor(Math.random() * data.length)]

  document.getElementById('joke').innerHTML = `${item.jokes}`;
  };

  request.send()
};