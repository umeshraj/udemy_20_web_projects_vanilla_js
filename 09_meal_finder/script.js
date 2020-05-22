const search = document.getElementById("search");
const submit = document.getElementById("submit");
const random = document.getElementById("random");
const mealsEl = document.getElementById("meals");
const resultHeading = document.getElementById("result-heading");
const single_mealEl = document.getElementById("single-meal");

// search meal and fetch from api
function searchMeal(e) {
  e.preventDefault();

  //   clear single meal
  single_mealEl.innerHTML = "";

  // get search term
  const term = search.value;

  // check for empty
  if (term.trim()) {
  } else {
    alert("Please enter a search term");
  }
}

// Event listeners
submit.addEventListener("submit", searchMeal);
