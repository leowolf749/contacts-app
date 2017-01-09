(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1]);
