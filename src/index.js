import { addNumGoal, addNumToArray, createArray, getError, initSumToArray } from "./modulo.js"

const btnCreateArray = document.getElementById("btnArray")
btnCreateArray.addEventListener("click",()=>{

    let arraySize = document.getElementById("arraySize").value
    let messageError1 = document.getElementById("messageError1")
    let result = createArray(arraySize)

    if(result==true){

        messageError1.innerText = "Error el tamaño debe ser mayor a 3"
        messageError1.style.color = "red"
        messageError1.style.fontWeigth = "bold"

    }else{
        messageError1.innerText = ""
    }
    
})

const btnAddNumGoal = document.getElementById("addNum")
btnAddNumGoal.addEventListener("click",()=>{

    let numToGoal = document.getElementById("numToGoal").value
    let messageError2 = document.getElementById("messageError2")
    let outNumGoal = document.getElementById("numObj")

    let result = addNumGoal(numToGoal,outNumGoal)
    if(result == true){

        messageError2.innerText = "Favor de ingresar caracteres numericos"
        messageError2.style.color = "red"
        messageError2.style.fontWeigth = "bold"

    }else{
        messageError2.innerText = ""
    }
})

const addNumArray = document.getElementById("addNumber")
addNumArray.addEventListener("click", () => {

    let numToCatch = document.getElementById("numbers").value
    let outArray = document.getElementById("out")
    let messageError3 = document.getElementById("messageError3")

    let result = addNumToArray(numToCatch, outArray);

    if (getError(result) != 0) {
        if (result == 1) {
            messageError3.innerText = "El arreglo está lleno, no se pueden agregar más elementos"
        } else if (result == 2) {
            messageError3.innerText = "Primero debes crear un array antes de agregar números"
        } else if (result == 3) {
            messageError3.innerText = "Error, ingrese caracteres numéricos"
        }

        messageError3.style.color = "red"
        messageError3.style.fontWeight = "bold"
    } else {
        messageError3.innerText = ""
    }
})

const initSum = document.getElementById("initSum")
initSum.addEventListener("click",()=>{

    let numToGoal = document.getElementById("numToGoal").value
    let result = document.getElementById("resultContainer")
    
    let closestSum = initSumToArray(numToGoal,result)
    let combinationElement = document.createElement("div")
        combinationElement.textContent = `Número que se acerca al objetivo: ${closestSum}`
        resultContainer.appendChild(combinationElement)
})