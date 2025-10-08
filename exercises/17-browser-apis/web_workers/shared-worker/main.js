const primeList = document.getElementById('prime-list');

const createElem = (content, className) => {
  const elem = document.createElement('div');
  elem.textContent = content;
  elem.classList.add(className);
  return elem;
};

// Create Shared Worker
const sharedWorker = new SharedWorker('./shared-worker.js');
const port = sharedWorker.port;
port.start(); // necessary to receive messages from the worker

// Message handler
port.onmessage = ({ data }) => {
  const { number, className } = data;
  if (number === 'end') {
    console.log(`Worker finished for class ${className}`);
  } else {
    primeList.appendChild(createElem(number, className));
  }
};

// Simulate creating two workers inside one thread
port.postMessage({ start: 0, end: 50, className: 'hare' });
port.postMessage({ start: 51, end: 100, className: 'tortoise' });
