const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

// go through the range from start to end 
async function findPrimesInRange(start, end) {
  const delayFactor = 1.05;
  for (let i = start; i <= end; i++) {
    // waste time
    // artificial delay makes calculations different for both hare and turtle
    await new Promise((resolve) =>
      setTimeout(resolve, Math.floor(Math.random() * delayFactor) * 1000)
    );
    // check if prime
    if (isPrime(i)) self.postMessage(i);
  }
  self.postMessage("end");
}

// worker waits for a message from the main thread 
self.addEventListener("message", ({ data }) => {
  const { start, end } = data;
  findPrimesInRange(start, end);
});
