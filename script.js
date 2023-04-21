const getJoke = async () => {

    const randomNumber = Math.floor(Math.random() * 825)+1;
    const apiUrl = `https://rickandmortyapi.com/api/character/${randomNumber}`;  
    const response = await fetch(apiUrl);
    const data = await response.json();

    const image = document.querySelector('#img');
    const name = document.querySelector('#name');
    const status = document.querySelector('#status');
    const species = document.querySelector('#species');
    const gender = document.querySelector("#gender");

    if (image) {
        image.src = data.image;
    }

    name && (name.textContent = data.name);
    status && (status.textContent = data.status);
    species && (species.textContent = data.species);
    gender && (gender.textContent = data.gender);
  console.log("gender",gender)
}

const jokeButton = document.getElementById('get-joke');
jokeButton.addEventListener('click', getJoke);