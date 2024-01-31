let array = []

export const createArray = (arraySize)=>{
    let isError = false

    if(!isNaN(arraySize) && Number(arraySize) > 3){
        array = new Array(Number(arraySize)).fill(0)
        console.log(array)
        return array
    }else{
        isError = true        
    }

    return isError
}

export const addNumGoal = (numToGoal,outNumGoal)=>{
    let isError = false

    if(!isNaN(numToGoal)){
        outNumGoal.innerText = numToGoal
    }else{
        isError = true
    }

    return isError
}

export const addNumToArray = (numToCatch, outArray) => {
    let error = 0;

    if (!isNaN(numToCatch)) {
        if (array.length > 0) {
            const emptyIndex = array.indexOf(0);
            if (emptyIndex !== -1) {
                array[emptyIndex] = Number(numToCatch);
                console.log(array);
                updateArray(array,outArray)
            } else {
                error = 1;
            }
        } else {
            error = 2;
        }
    } else {
        error = 3;
    }
    return error;
}

export const getError = (error) => {
    return error != 0;
}


function updateArray(array, outArray) {
    let output = array.map(num => `${num}`).join(', ')
    outArray.textContent = `[ ${output} ]`
}

export const initSumToArray = (numToGoal, result) => {
    let combination = findSum(array, numToGoal)
    let closestSum = displayCombinations([combination], result, numToGoal)

    
    return closestSum
}

function findSum(array, target) {
    let closestSum = Infinity
    let closestCombination = []

    for (let i = 0; i < array.length - 2; i++) {
        for (let j = i + 1; j < array.length - 1; j++) {
            for (let k = j + 1; k < array.length; k++) {
                let currentSum = array[i] + array[j] + array[k]

                if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                    closestSum = currentSum
                    closestCombination = [array[i], array[j], array[k]]
                }
            }
        }
    }

    return closestCombination
}


function displayCombinations(combinations, numToGoal) {
    if (combinations.length > 0) {
        let closestSum = combinations[0].reduce((acc, num) => acc + num, 0)

        combinations.forEach(combination => {
            let currentSum = combination.reduce((acc, num) => acc + num, 0)

            if (Math.abs(currentSum - numToGoal) < Math.abs(closestSum - numToGoal)) {
                closestSum = currentSum
            }
        })
        

        return closestSum
    } 
}