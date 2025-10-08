let a = 0;
let b = 1;
let intervalId: ReturnType<typeof setInterval> | null = null;
self.addEventListener('message', (e) => {
  if (e.data === 'start') {
    if (intervalId !== null) return; // start once only

    intervalId = setInterval(() => {
      const next = a + b;
      self.postMessage(next);
      a = b;
      b = next;
    }, 2000); // every 2 sec
  }

  if (e.data === 'reset') {
    a = 0;
    b = 1;
    self.postMessage(a);
  }

  if (e.data === 'stop') {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
});

export {};
