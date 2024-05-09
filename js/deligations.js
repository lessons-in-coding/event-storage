const container = document.querySelector(".container");
const ul = document.querySelector("ul");
const li = document.querySelector("li");

// 1. Bubbliing Phase * when clicked li, li then ul then container
li.addEventListener("click", () => {
  console.log("li was clicked!");
});

ul.addEventListener("click", () => {
  console.log("ul was clicked!");
});

container.addEventListener("click", () => {
  console.log("container was clicked!");
});

// 2. Capturing Phase * when clicked li, container then ul then li
li.addEventListener("click", () => {
  console.log("li was clicked!");
});

ul.addEventListener(
  "click",
  () => {
    console.log("ul was clicked!");
  },
  true
); //{capture: true}

container.addEventListener(
  "click",
  () => {
    console.log("container was clicked!");
  },
  true
); //{capture: true}

// 3. Stop Propergation Method * when clicked li, container then ul then li
li.addEventListener("click", () => {
  console.log("li was clicked!");
});

ul.addEventListener(
  "click",
  () => {
    console.log("ul was clicked!");
  },
  { capture: true }
);

container.addEventListener(
  "click",
  (e) => {
    e.stopPropagation(); //only this one fire
    console.log("container was clicked!");
  },
  { capture: true }
);


// 4. Event Deligation
// only one declared here
// const container = document.querySelector(".container");
container.addEventListener("click", (e) => {
    console.log(e.target.textContent);
  });