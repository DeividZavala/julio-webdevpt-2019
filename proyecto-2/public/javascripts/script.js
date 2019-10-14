document.addEventListener(
  "DOMContentLoaded",
  () => {
    const socket = io();
    addEventListener("click", e => {
      if (!e.target.dataset.id) return;
      const bid = e.target.parentNode.children[0].children[1].value;
      let offer = {
        auction: e.target.dataset.id,
        author: e.target.dataset.user,
        bid
      };
      socket.emit("bid", offer);
    });
    socket.on("bid", function(bid) {
      let footer = document.querySelector(`[data-item="${bid.auction}"]`);
      footer.children[0].innerHTML = `Lider: ${bid.author.username}`;
      footer.children[1].children[0].innerHTML = `Oferta: ${bid.bid}`;
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
