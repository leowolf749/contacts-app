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

function addFood(food) {
    let input = document.querySelector('#add-food-item');
    
    let addButton = document.querySelector('#submit');
    addButton.addEventListener('click', function() {
        console.log('hi');

    });
}