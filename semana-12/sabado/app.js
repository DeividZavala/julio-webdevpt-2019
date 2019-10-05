const list = document.getElementById("list");
const span = document.querySelector("span");
const btn = document.getElementById("load");
const query = document.querySelector("input");
const search = document.getElementById("search");
const detail = document.getElementById("detail");

let media = [];

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
                    <li>
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

getMedia();
