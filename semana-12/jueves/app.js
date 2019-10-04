const list = document.getElementById("list");
const span = document.querySelector("span");
const btn = document.getElementById("load");

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
      list.innerHTML += `<li>${character.name}</li>`;
    });
  });
};

getCharacters();
btn.onclick = () => getCharacters(next);
