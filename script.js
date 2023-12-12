let container = document.querySelector(".container")
let body = document.querySelector("body")
let form = document.querySelector("form")
let plus = document.querySelector(".fa-plus")
let error = document.querySelector(".error")
let plusIcon = document.getElementById("plus")
let crossIcon = document.getElementById("cross")

// Getting Details From Form

let title = document.getElementById("title") 
let link = document.getElementById("link") 


function ShowForm() {
    form.classList.toggle("show-form")
    plus.classList.toggle("rotate")
    container.classList.toggle("filter")
    error.textContent = ""
    title.value = ""
    link.value = ""
    return true
}


function HideForm() {
    form.classList.remove("show-form")
    plus.classList.remove("rotate")
    container.classList.remove("filter")
    error.textContent = ""
    title.value = ""
    link.value = ""
    return true
}


plusIcon.addEventListener("click", ShowForm)
crossIcon.addEventListener("click", HideForm)


// Creating Link

function CreateLink() {
    let div = document.createElement("div")
    div.classList.add("links")

    let a = document.createElement("a")
    a.textContent = title.value
    a.setAttribute("href", link.value)

    let i = document.createElement("i")
    i.classList.add("fa-solid")
    i.classList.add("fa-x")

    div.appendChild(a)
    div.appendChild(i)

    container.appendChild(div)
}

container.addEventListener("click", (e) => {
    if (e.target.tagName === "I") {
        e.target.parentElement.remove(),
        SaveLink()
    }
}, false)


function Create() {
    if(title.value === "" || link.value === "") {
        error.textContent = "Fill The Required Details"
    }
    else{
        CreateLink(),
        SaveLink(),
        HideForm()
    }
}

let addLinkButton = document.getElementById("addLink")

addLinkButton.addEventListener("click", (e) => {
    e.preventDefault(),
    Create()
})

 // Function to Save Links in Local Storage

 function SaveLink() {
    localStorage.setItem("link", container.innerHTML)
}

function ShowLink() {
    container.innerHTML = localStorage.getItem("link")
}

window.addEventListener("load", ShowLink)