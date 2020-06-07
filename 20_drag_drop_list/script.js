const draggable_list = document.getElementById("draggable-list");
const check = document.getElementById("check");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Bloomberg",
  "Larry Page",
];

// store the li items
const listItems = [];
let dragStartIndex;

createList();

// insert list items into DOM
function createList() {
  [...richestPeople]
    .map((a) => ({ value: a, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      //   console.log(person);
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);

      listItem.innerHTML = `
    <span class="number"> ${index + 1}</span>
    <div class="draggable" draggable="true">
        <p class="person-name">${person}</p>
        <i class="fas fa-grip-lines"></i>
    </div>
    `;
      listItems.push(listItem);
      draggable_list.appendChild(listItem);
    });

  addEventListeners();
}

function dragStart() {
  // console.log("Event: ", "dragStart");
  dragStartIndex = +this.closest("li").getAttribute("data-index");
}

function dragEnter() {
  // console.log("Event: ", "dragEnter");
  this.classList.add("over");
}

function dragLeave() {
  // console.log("Event: ", "dragLeave");
  this.classList.remove("over");
}

function dragOver(e) {
  e.preventDefault();
  // console.log("Event: ", "dragOver");
}

function dragDrop() {
  // console.log("Event: ", "drop");
  const dragEndIndex = +this.getAttribute("data-index");
  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
}

function swapItems(fromIndex, toIndex) {
  const item1 = listItems[fromIndex].querySelector(".draggable");
  const item2 = listItems[toIndex].querySelector(".draggable");
  listItems[fromIndex].appendChild(item2);
  listItems[toIndex].appendChild(item1);
}

function addEventListeners() {
  const draggables = document.querySelectorAll(".draggable");
  const dragListItems = document.querySelectorAll(".draggable-list li");

  draggables.forEach((draggable) => {
    draggable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragleave", dragLeave);
  });
}
