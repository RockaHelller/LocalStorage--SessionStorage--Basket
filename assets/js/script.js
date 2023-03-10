"use strict";


// let createBtn = document.querySelector(".createButton")
// let tableBody = document.querySelector("tbody")

// let dataArr = [];



// createBtn.addEventListener("click", function (e) {

//     e.preventDefault();



//     let name = document.querySelector(".nameInput").value
//     let author = document.querySelector(".authorInput").value

//     tableBody.innerHTML += `<tr>
//     <td>${name}</td>
//     <td>${author}</td>
//     </tr>`

//     dataArr = JSON.parse(localStorage.getItem("dataArr"))


//     dataArr.push({
//         name: name,
//         author: author
//     })

//     localStorage.setItem("dataArr", JSON.stringify(dataArr))




// })

///////////////////////////////////////////////////////////////////////////////////////////////////////////Session
// localStorage.setItem("name", "Murad")
// localStorage.removeItem("name")
// localStorage.setItem("name", "Murad")

// console.log(localStorage.getItem("name"));


// let names = ["Resul", "Gultac", "Lale", "Novreste", "Orxan"]

// localStorage.setItem("students", JSON.stringify(names))

// let students = JSON.parse(localStorage.getItem("students"));

// for (const stu of students) {
//     console.log(stu);
// }





// let stu1 = {
//     name: "Nihad",
//     surname: "Veliyev",
// }

// let stu2 = {
//     name: "Nicat",
//     surname: "Novruzzade",
// }

// let stu3 = {
//     name: "Anar",
//     surname: "Huseynov",
// }

// let students = [stu1, stu2, stu3]

// localStorage.setItem("students", JSON.stringify(students))

// let dbStudents = JSON.parse(localStorage.getItem("students"));

// dbStudents.forEach(student => {
//     console.log(student.name + " " + student.surname);
// });



// sessionStorage.setItem("name", "Murad")


//////////////////////////////////////////////////////////////////////////Cart


let basketBtns = document.querySelectorAll(".add-basket")

let basket = [];

if (JSON.parse(localStorage.getItem("basket")) != null) {
    basket = JSON.parse(localStorage.getItem("basket"));
}



basketBtns.forEach(btn => {
    btn.addEventListener("click", function (e) {


        e.preventDefault();
        let productDesc = e.target.parentNode.previousElementSibling.innerText;
        let productImg = e.target.parentNode.parentNode.previousElementSibling.getAttribute("src")
        let productName = e.target.parentNode.parentNode.firstElementChild.innerText
        let productPrice = e.target.nextElementSibling.innerText
        let productId = parseInt(this.closest(".card").getAttribute("data-id"))
        let existingProduct = basket.find(m => m.id == productId)

        if (existingProduct != undefined) {
            existingProduct.count += 1;
        } else{
            basket.push({
                id: productId,
                name: productName,
                desc: productDesc,
                image: productImg,
                price: productPrice,
                count: 1
            })
        }

        localStorage.setItem("basket", JSON.stringify(basket))


        getBasketCount(basket);

        
    })
});



let basketCount = document.querySelector(".basket-num");

getBasketCount(basket);

function getBasketCount(arr) {
    let counter = 0;
    for (const item of arr) {
        counter += item.count;
    }
    basketCount.innerHTML = counter;
}







