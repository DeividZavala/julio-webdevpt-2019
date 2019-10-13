document.addEventListener(
  "DOMContentLoaded",
  () => {
    const socket = io();
    addEventListener("click", e => {
      console.log(e.target.dataset.id);
      if (!e.target.dataset.id) return;
      const bid = e.target.parentNode.children[0].children[1].value;
      let offer = {
        auction: e.target.dataset.id,
        author: e.target.dataset.userId,
        bid
      };
      socket.emit("bid", offer);
    });
    socket.on("bid", function(bid) {
      let btn = document.querySelector(`[data-id="${bid.item}"]`);
      btn.parentNode.children[3].innerHTML = `Lider: ${bid.user}`;
    });
    socket.on("invalid offer", function(msg) {
      UIkit.notification({
        message: `<span uk-icon='icon: close'></span> ${msg}`,
        status: "danger"
      });
    });
  },
  false
);
