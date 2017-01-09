window.addEventListener('load', function() {
    for (let i = 0; i < food.length; i++) {
        showFood(food[i]);
    };

    addFood(food);
});

let food = [
    {
        foodName: "Cheeseburger",
        description: "1/2lb beef patty w/ cheddar cheese, lettuce, tomato, and onion on a sesame seed bun",
        price: "$8.59",
    },
    {
        foodName: "Smoked Wings",
        description: "10 smoked chicken wings tossed in your choice of wing sauce",
        price: "$9.59",
    },
    {
        foodName: "BLT",
        description: "Bacon, lettuce, tomato, mayonaise on your choice of bread",
        price: "$5.59",
    }
];

function showFood(food) {
    let parent = document.querySelector('#show-food ul');
    let child = document.createElement('li');
    let template = document.querySelector('#food-template');

    child.innerHTML = Mustache.render(template.innerHTML, {
        foodName: food.foodName,
        description: food.description,
        price: food.price,
    });

    parent.appendChild(child);
}

/* this doesn't work yet */
function addFood(food) {
    let input = document.querySelector('#add-food-item');
    
    let addButton = document.querySelector('#submit');
    addButton.addEventListener('click', function() {
        console.log('hi');

    });
}