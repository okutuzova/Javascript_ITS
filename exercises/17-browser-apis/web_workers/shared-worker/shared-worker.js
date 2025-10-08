// shared-worker.js
const clients = [];

self.onconnect = (e) => {
  const port = e.ports[0]; // receive a port of a new client
  clients.push(port);

  port.onmessage = ({ data }) => {
    const { start, end, className } = data;
    findPrimesInRange(start, end, port, className);
  };
};

const isPrime = n => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

async function findPrimesInRange(start, end, port, className) {
  const delayFactor = 1.05;
  for (let i = start; i <= end; i++) {
    await new Promise(resolve =>
      setTimeout(resolve, Math.floor(Math.random() * delayFactor) * 100)
    );
    if (isPrime(i)) port.postMessage({ number: i, className });
  }
  port.postMessage({ number: 'end', className });
}
