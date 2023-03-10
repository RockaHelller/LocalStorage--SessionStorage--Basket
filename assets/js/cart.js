"use strict";

let tableBody = document.querySelector("tbody")

let products = JSON.parse(localStorage.getItem("basket"))

if (products != null && products.length != 0) {
    products.forEach(product => {

        tableBody.innerHTML += `<tr>
        <td style="text-align:center;"><img src="${product.image}}" style="height: 200px;" alt=""></th>
        <td>${product.name}</td>
        <td>${product.desc}</td>
        <td style="width: 200px;"><button type="button" class="decrease" style="border: none; background-color: transparent; font-size: 24px;">-</button> ${product.count} <button type="button" class="increase" style="border: none; background-color: transparent; font-size: 20px;">+</button></td>
        <td style="width: 200px;">${product.price * product.count} <i class="fa-solid fa-dollar-sign"></i> </td>
        <td style="width: 200px; border: none; padding: 94px 0px"><i class="fa-solid fa-xmark deleteButton" style="font-size: 26px; color: red;"></i></td>
        </tr>`

    });
} else {
    tableBody.parentNode.parentNode.previousElementSibling.classList.remove("d-none");
    tableBody.parentNode.parentNode.classList.add("d-none");
}

//Basket count changes
let basketCount = document.querySelector(".basket-num");

if (products != null) {
    getBasketCount(products);
}



function getBasketCount(arr) {
    let counter = 0;
    for (const item of arr) {
        counter += item.count;
    }
    basketCount.innerHTML = counter;
}




//increase decrease
let decreaseButton = document.querySelectorAll(".decrease");
let increaseButton = document.querySelectorAll(".increase");

decreaseButton.forEach(button => {
    button.addEventListener("click", function () {
        let name = button.parentElement.previousElementSibling.previousElementSibling.textContent.trim();
        let product = products.find(p => p.name === name);
        if (product.count < 2) {
            return;
        } else {
            product.count--;
            localStorage.setItem("basket", JSON.stringify(products));
        }
        window.location.reload();
    });
});

increaseButton.forEach(button => {
    button.addEventListener("click", function () {
        let name = button.parentElement.previousElementSibling.previousElementSibling.textContent.trim();
        let product = products.find(p => p.name === name);
        product.count++;
        localStorage.setItem("basket", JSON.stringify(products));
        window.location.reload();

    });
});

//delete item

let deleteButton = document.querySelectorAll(".deleteButton");

deleteButton.forEach(btn => {
    btn.addEventListener("click", function () {
        let name = btn.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent.trim();
        let product = products.find(m => m.name === name);
        // let storedArray = JSON.parse(localStorage.getItem("basket"));

        let indexDeleted = products.indexOf(product)
        if (indexDeleted > -1) {
            products.splice(indexDeleted, 1)
        }

        localStorage.setItem("basket", JSON.stringify(products));

        let tr = btn.closest("tr")
        tr.style.display = "none"
        window.location.reload();

    })
});


//total price

if (products != null) {
    let totalPrice = document.querySelector(".total-price");

    let sum = 0
    products.forEach(product => {
        sum += product.price * product.count

    });
    totalPrice.innerHTML = sum + "$"

}


































