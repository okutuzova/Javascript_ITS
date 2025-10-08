self.onconnect = (e) => {
  const port = e.ports[0];
  port.onmessage = () => runHeavyCalculation(port);
  runHeavyCalculation(port); // immediately start calc
};

async function runHeavyCalculation(port) {
  let sum = 0;
  for (let i = 1; i <= 1e7; i++) {
    sum += i;
    if (i % 1e6 === 0) {
      port.postMessage(`Sum till ${i}: ${sum}`);
      await new Promise(r => setTimeout(r, 10)); // delay imitation
    }
  }
  port.postMessage(`Final sum: ${sum}`);
}
