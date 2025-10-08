self.onconnect = (e) => {
  const port = e.ports[0];
  fetchCats(port);
};

async function fetchCats(port) {
  try {
    for (let i = 0; i < 5; i++) {
      const res = await fetch('https://api.thecatapi.com/v1/images/search');
      const data = await res.json();
      port.postMessage({ url: data[0].url });
      await new Promise(r => setTimeout(r, 1000)); // delay imitation
    }
  } catch (err) {
    console.error(err);
  }
}
