function ellipseCalculate(){;
    const base = getInputValueById('ellipse-a')
    // console.log(base);
    const length = getInputValueById('ellipse-b');
    // console.log(length);
    const pi  = 3.1416;
    const area = pi * base * length;
    const areaDisplay = setInnerTextById('ellipse-area', area);
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