// Reusable code making

function parallelogramCalculate(){;
    const base = getInputValueById('Parallelogram-base')
    // console.log(base);
    const length = getInputValueById('Parallelogram-height');
    // console.log(length);
    const area = base * length;
    const areaDisplay = setInnerTextById('Parallelogram-area', area);
    return areaDisplay
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    // console.log(inputField);
    const inputText = inputField.value;
    const value = parseFloat(inputText);
    return value;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}