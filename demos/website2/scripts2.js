"use strict"


const apiBaseUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c="


window.onload = function(){
    const getresultsButton = document.getElementById("getResultsButton")
    getresultsButton.onclick = onGetResultsButtonClick
}

function onGetResultsButtonClick(){
    console.log("clicked")

    const categoryInput = document.getElementById("categoryInput")
    const resultsOutput = document.getElementById("resultsOutput")

    let actualUrl = apiBaseUrl + categoryInput.value 

    console.log ("URL: " + actualUrl)

fetch(doWhenResponseBegins)


}

function doWhenResponseBegins(response){
    response.json().then(processResultDataFromApi)
}


function processResultDataFromApi(data){
    doStuffWithArrayOfMeals(datameals)
    console.log(data)
}

function doStuffWithArrayOfMeals(meals){
    for(let meal of data.meals){
    doStuffWtithMeal(meal)
    }

}


function doStuffWtithMeal(){
    let p = document.createElement("p")
    p.innerHTML = meal.strMeal

    resultsOutput.appendChild(p)
}