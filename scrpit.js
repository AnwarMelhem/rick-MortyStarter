// js 
async function fetchCharacters() {
  const characterList = document.getElementById('character-list');

  try {
    const response = await fetch('https://rickandmortyapi.com/api/character?status=alive');
    const data = await response.json();

    const aliveCharacters = data.results.slice(0,50);
    aliveCharacters.forEach(character => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${character.image}" alt="${character.name}">
        <div>

          <h3>${character.name}</h3>
          <h3> id:${character.id}</h3>
          <p>Location: ${character.location.name}</p>
          <p>Species: ${character.species}</p>
          <p>Gender: ${character.gender}</p>
          <p>Status:${character.status}</p>
        </div>
      `;
      characterList.appendChild(li);
    });
  } catch (error) {
    console.error('Error fetching data:', error);
    characterList.innerHTML = '<p>An error occurred while fetching data.</p>';
  }
}

fetchCharacters();
