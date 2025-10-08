const primeList = document.getElementById("prime-list");

// utility function for an element creation 
const createElem = (content, className) => {
  const elem = document.createElement("div");
  elem.textContent = content;
  elem.classList.add(className);
  return elem;
};

// create and start workers, each of which is working with the same worker.js file.
const worker = new Worker("./worker.js");
worker.postMessage({ start: 0, end: 100 }); // postmessage sets a range of numbers 
const worker2 = new Worker("./worker.js");
worker2.postMessage({ start: 0, end: 100 });


// workers send messages with postMessage, if end arrives - worker stops its execution
worker.addEventListener("message", ({ data }) => {
  if (data === "end") worker.terminate();
  primeList.appendChild(createElem(` ${data}`, "hare"));
});
worker2.addEventListener("message", ({ data }) => {
  if (data === "end") worker2.terminate();
  primeList.appendChild(createElem(` ${data}`, "tortoise"));
});
// the rest of the code can continue to do other things while the workers work
