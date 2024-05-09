// Event Bubbling
document.getElementById("outer").addEventListener("click", function () {
  console.log("Outer div clicked");
});

document.getElementById("inner").addEventListener("click", function (event) {
  console.log("Inner button clicked");
  // event.stopPropagation(); // Uncomment this line to stop event bubbling
});

// Event Capturing
document.getElementById("outer").addEventListener(
  "click",
  function () {
    console.log("Outer div clicked during capturing phase");
  },
  true
);

document.getElementById("inner").addEventListener("click", function () {
  console.log("Inner button clicked");
});
