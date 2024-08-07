function rhombusCalculate(){;
    const base = getInputValueById('rhombus-d1')
    // console.log(base);
    const length = getInputValueById('rhombus-d2');
    // console.log(length);
    const area = base * length;
    const areaDisplay = setInnerTextById('rhombus-area', area);
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