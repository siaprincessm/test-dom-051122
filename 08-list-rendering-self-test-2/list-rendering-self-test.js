let meal = [
    {
        'value':'beef bulgogi',
        'name':'Beef Bulgogi Rice Topping'
    },
    {
        'value':'japchae',
        'name':'Japchae'
    },
    {
        'value':'chicken karaage',
        'name':'Chicken Karaage'
    },
    {
        'value':'Sashimi',
        'name':'Sashimi'
    },
    {
        'value':'Kebab',
        'name':'Beef Kebab'
    }
]

let selectedMeal = document.querySelector('#selectMeal');
    for (let hereMeal of meal){
        selectedMeal.innerHTML += `
            <option value="${hereMeal.value}"> ${hereMeal.name}</option>
        `
    }

let drink = [
    {
        'value':'passionfruit',
        'name':'Passion Fruit'
    },
    {
        'value':'strawberry milk',
        'name':'Strawberry Milk'
    },
    {
        'value':'2 Ladies',
        'name':'2 Ladies'
    },
    {
        'value':'Lemonade',
        'name':'Lemonade'
    },
    {
        'value':'Matcha Latte',
        'name':'Matcha Latte'
    }
]

let selectedDrink = document.querySelector('#selectDrink');
    for ( let hereDrink of drink){
        selectedDrink.innerHTML += `
            <option value="${hereDrink.value}">${hereDrink.name}</option>
        `
    }