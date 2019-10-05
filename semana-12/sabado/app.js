const list = document.getElementById("list");
const span = document.querySelector("span");
const btn = document.getElementById("load");
const fields = document.querySelectorAll("input");
const search = document.getElementById("search");
const detail = document.getElementById("detail");
let field_id = document.getElementById("id");
let field_release_date = document.getElementById("release_date");
let field_media_type = document.getElementById("media_type");
let field_title = document.getElementById("title");

let media = [];

const setMedia = elem => {
  search.innerText = "Editar";
  search.onclick = () => createMedia();
  const { id, date, title, media_type } = elem.dataset;
  field_id.value = id;
  field_media_type.value = media_type;
  field_title.value = title;
  field_release_date.value = date.split("T")[0];
};

const getMedia = () => {
  axios.get("http://localhost:3000/api/media/").then(res => {
    console.log(res.data);
    const { media: data, count } = res.data;
    media = [...media, ...data];
    span.innerText = count;

    data.forEach(media => {
      list.innerHTML += `
        
        <div class='uk-margin-small-bottom uk-card uk-card-default uk-padding-small'>
            <div class='uk-card-body uk-flex uk-flex-middle uk-flex-around'>
              <span>${media.title}</span>
              <span class="uk-label uk-label-${
                media.media_type === "movie" ? "success" : "warning"
              }">
                ${media.media_type}
              </span>
        
              <div class='uk-inline'>
                <button class='uk-button' type='button'>
                  <span uk-icon='icon: chevron-down' />
                </button>
                <div uk-dropdown='true'>
                  <ul class='uk-nav uk-dropdown-nav'>
                    <li 
                    data-id="${media._id}"
                    data-title="${media.title}"
                    data-date="${media.release_date}"
                    data-media_type="${media.media_type}"
                    onclick='setMedia(this)'>
                      <a href='#'>
                        Editar <span uk-icon='icon: pencil' />
                      </a>
                    </li>
                    <li class='uk-nav-divider' />
                    <li>
                      <a href='#'>
                        Eliminar <span uk-icon='icon: trash' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        
        `;
    });
  });
};

const updateMedia = () => {
  const data = [...fields].reduce((acc, field) => {
    return { ...acc, [field.id]: field.value };
  }, {});
  console.log(data);
  axios.patch(`http://localhost:3000/api/media/${data.id}`, data).then(res => {
    console.log(res.data);
  });
};

search.onclick = () => updateMedia();

getMedia();
