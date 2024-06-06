"use strict"


const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="


let category


window.onload = function(){ 

let urlParams = new URLSearchParams(location.search)
console.log(urlParams)

for(let urlParam of urlParams){
    console.log(urlParam)
}

if( urlParams.has ("category") === true){

    category = urlParams.get("category")
    console.log(category)
}


    const getresultsButton = document.getElementById("getResultsButton")
    getresultsButton.onclick = onGetResultsButtonClick
}

function onGetResultsButtonClick(){
    console.log("clicked")

    const category = document.getElementById("categoryInput")
    const categoryHeader = document.getElementById("categoryHeader")
    const resultsOutput = document.getElementById("resultsOutput")

categoryHeader.innerHTML = "Meals in Category" + category

    
    let actualUrl = apiBaseUrl + category

    console.log ("URL: " + actualUrl)

fetch(actualUrl).then(response => response.json()).then( data =>  {
    console.log(data)

    for(let meal of data.meals){
        let p = document.createElement("p")
        p.innerHTML = meal.strMeal

        resultsOutput.appendChild(p)
    }
})

}