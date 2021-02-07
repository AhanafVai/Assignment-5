const searchButton = () => {
    const search = document.getElementById('search-menu').value;
    document.getElementById('search-menu').value ="";
    if(search == ''){
        document.getElementById("error").innerText="Enter Category plz"
    }
    else{
    const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMenu(data.meals))
    }    
}


const displayMenu = foods => {
    const mainMenu = document.getElementById('menu-list');
    foods.forEach(food => {
        const foodDiv = document.createElement('div');
        const mealId = food.idMeal
        foodDiv.innerHTML = `<div class="card" style="width: 18rem;" onclick="mealIngredient(${mealId})" >
        <img src="${food.strMealThumb}" class="card-img-top" >
        <div class="card-body">
          <h5 class="card-title">${food.strMeal}</h5>
        </div>
        </div>`;
     mainMenu.appendChild(foodDiv);
    })
}

const mealIngredient = (id) =>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(resp => resp.json())
    .then(data => recipe(data.meals))
}
const recipe = items => {
    const ingredientList = document.getElementById('ingredient-list');
    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<div class="card" style="width: 18rem;" >
        <img src="${item.strMealThumb}" class="card-img-top" >
        <div class="card-body">
        <ul>
        <li>${item.strIngredient1}</li>
        <li>${item.strIngredient2}</li>
        <li>${item.strIngredient3}</li>
        <li>${item.strIngredient4}</li>
        <li>${item.strIngredient5}</li>
        <li>${item.strIngredient6}</li>
        <li>${item.strIngredient7}</li>
        <li>${item.strIngredient8}</li>
        <li>${item.strIngredient9}</li>
        <li>${item.strIngredient10}</li>
        </ul>
        </div>
        </div>`;
     ingredientList.appendChild(itemDiv);
    })
}