const heavyDiv = document.getElementById('heavy-calc');
const catDiv = document.getElementById('cat-container');
const button = document.getElementById('click-me');

// 1️⃣ Heavy calculation worker
const calcWorker = new SharedWorker('./calc-worker.js');
calcWorker.port.start();
calcWorker.port.onmessage = ({ data }) => {
  heavyDiv.textContent = data;
};

// 2️⃣ Cat image worker
const catWorker = new SharedWorker('./cat-worker.js');
catWorker.port.start();
catWorker.port.onmessage = ({ data }) => {
  const img = new Image();
  img.src = data.url;
  catDiv.appendChild(img);
};

// alert to show UI responsiveness
button.addEventListener('click', () => alert('UI is responsive!'));
