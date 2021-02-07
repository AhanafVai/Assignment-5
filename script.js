
function searchButton() {
    const searchMenu = document.getElementById("search-menu").value;
    getMenu(searchMenu);
} 

const getMenu = name =>{
    const url =`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
    .then(data => displayMenu(data))
}

const displayMenu = foods =>{
    const mainMenu = document.getElementById("menu-list");
    foods.forEach(food => {
      const foodDiv = document.createElement('div');
      foodDiv.className = 'country'
      const Info = `<h3 class="food-name">${food.strMeal}</h3>`
      foodDiv.innerHTML = Info;
      mainMenu.appendChild(foodDiv);
    });
}