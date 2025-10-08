const dragElement = document.getElementById("drag-item");
const dropElement = document.getElementById("target");
dragElement.setAttribute("draggable", true); // assign "draggable" attribute to element
// set the data that will be carried during the drag operation
dragElement.ondragstart = event => event.dataTransfer.setData("text/plain", event.target.id);
dropElement.ondragover = event => event.preventDefault();
dropElement.ondrop = event => {
 event.preventDefault();
 const data = event.dataTransfer.getData("text/plain");
 event.target.appendChild(document.getElementById(data));
};