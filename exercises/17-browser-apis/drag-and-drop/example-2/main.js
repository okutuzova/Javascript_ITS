// get draggable and target elements
const draggable = document.querySelector(".draggable");
const dropTarget = document.querySelector(".drop-target");
// toggleable classnames for styling
const highlightClass = "highlighted";
const transparentClass = "semi-transparent";
// drag payload and format - what gets carried
const dragFormat = "text/plain";
const getDragPayload = () => (Math.random() < 0.5 ? "\u{1F34E}" : "\u{1F34F}"); // can be a simple string
// optional drag image;
// might not work if browser hasn't loaded image before dragstart event
const dragImg = new Image();
dragImg.src = "./apple.jpg";
// implement drag event handlers
const handleDragStart = (event) => {
  // set the drag image to the preloaded image; this is optional
  event.dataTransfer.setDragImage(dragImg, 0, 0);
  // set the drag content; what actually gets carried during the drag
  event.dataTransfer.setData(dragFormat, getDragPayload());
  event.currentTarget.classList.add(transparentClass);
};
const handleDragEnd = (event) =>
  event.currentTarget.classList.remove(transparentClass);
// prevent browser default behavior doesn't allow the element to be dropped
const handleDragOver = (event) => event.preventDefault();
const handleDragEnter = (event) =>
  event.currentTarget.classList.add(highlightClass);
const handleDragLeave = (event) =>
  event.currentTarget.classList.remove(highlightClass);
const handleDrop = (event) => {
  event.preventDefault(); // prevent browser default action which opens some elements as a link
  const text = event.dataTransfer.getData(dragFormat);
  const elem = document.createElement("p");
  elem.textContent = text;
  event.currentTarget.appendChild(elem);
  event.currentTarget.classList.remove(highlightClass);
};
// setup event handlers
draggable.addEventListener("dragstart", handleDragStart);
draggable.addEventListener("dragend", handleDragEnd);
dropTarget.addEventListener("dragover", handleDragOver);
dropTarget.addEventListener("dragenter", handleDragEnter);
dropTarget.addEventListener("dragleave", handleDragLeave);
dropTarget.addEventListener("drop", handleDrop);
