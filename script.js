const search = document.getElementById('search-btn'),
    submit = document.getElementById('submit'),
    random = document.getElementById('random'),
    mealEl = document.getElementById('meals'),
    resultHeading = document.getElementById('result-heading'),
    single_mealEl = document.getElementById('meal');




//Functions

//Search Meal and fetch from API
function searchMeal(e) {
    e.preventDefault();

    //Clear Single Meal
    single_mealEl.innerHTML = ''

    //Get Search Term
    const term = search.value;
    
    //Check for empty
    if (term.trim()) {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })    
    } else {
        alert('Please Enter a Search Term');
    }
}



// Event Listeners
submit.addEventListener('submit', searchMeal)