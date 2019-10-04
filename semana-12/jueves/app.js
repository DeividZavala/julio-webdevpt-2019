const list = document.getElementById("list");
const span = document.querySelector("span");
const btn = document.getElementById("load");
const query = document.querySelector("input");
const search = document.getElementById("search");
const detail = document.getElementById("detail");

let next = "";
let characters = [];

const getCharacters = (url = "https://rickandmortyapi.com/api/character") => {
  axios.get(url).then(res => {
    console.log(res);
    const { results, info } = res.data;
    next = info.next;
    characters = [...characters, ...results];
    results.forEach(character => {
      span.innerText = res.data.info.count;
      list.innerHTML += `<li data-id="${character.id}">${character.name}</li>`;
    });
  });
};

const getCharacter = (id = 1) => {
  axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(res => {
    console.log(res);
    const { data: character } = res;
    detail.innerHTML = `
    <div class="uk-card uk-card-default uk-child-width-1-1 uk-margin" uk-grid>
        <div class="uk-card-media-left uk-cover-container">
            <img src="${character.image}" alt="" uk-cover>
            <canvas width="600" height="400"></canvas>
        </div>
        <div>
            <div class="uk-card-body">
                <h3 class="uk-card-title">${
                  character.name
                } <span class="uk-card-badge uk-label ${
      character.species === "Human" ? "" : "uk-label-danger"
    }">${character.species}</span></h3>
            </div>
        </div>
    </div>
    
    `;
  });
};

document.addEventListener("click", event => {
  console.log(event.target.dataset);
  const id = event.target.dataset.id;
  if (id) {
    query.value = id;
    getCharacter(id);
  }
});

getCharacters();
btn.onclick = () => getCharacters(next);
search.onclick = () => {
  getCharacter(query.value);
};
