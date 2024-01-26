//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

// fetch inside this function because we only want it to run after we have taken the value out of the input
let getDrink = () => {
    let search = document.querySelector('input').value
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
    .then(res => res.json()) // parse response as JSON
    .then((data) => {
        // save DOM elements in variables
        const drinks = data.drinks[0]
        const name = document.querySelector('#name')
        const img = document.querySelector('img')
        const instructions = document.querySelector('#instructions')
        const ingredientList = document.querySelector('#ingredientsList')

        console.table(drinks)
      
        // place name of drink in DOM
        name.innerText = drinks.strDrink

        // place instructions in DOM
        instructions.innerText = drinks.strInstructions

        // place image into DOM
        img.src = drinks.strDrinkThumb

        // show the ingredients title
        document.querySelector('.hidden').classList.toggle('hidden')
        
        // place ingredients into DOM
        // use a for loop and change the number ending of the property (strIngredient1 through strIngredient15). If the value is null, don't print it otherwise do
        for (let i = 1; i < 16; i++) {
            if (drinks[`strIngredient${i}`] !== null) {
                let li = document.createElement('li')
                // create a list item with the ingredient name
                li.appendChild(document.createTextNode(drinks[`strIngredient${i}`]))
                // add item to ol
                ingredientList.appendChild(li)
            }
        }

    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

// event listener
document.querySelector('button').addEventListener('click', getDrink)

// try it without a template literal and see if you can get it to work with a space in it
// see if you can make it cycle through the drinks, rotating/automatic carousel
// make ingredients list show up
// make it pretty
// try to get NASA picture of the day working
// try the different URLs in the cocktail api
// build some simple apps and make them truly pretty so you could put on portfolio
