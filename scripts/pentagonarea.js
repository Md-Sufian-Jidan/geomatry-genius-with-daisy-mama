// console.log('pentagon gone gone');
function pentagonCalculate(){;
    const base = getInputValueById('pentagon-perimeter')
    // console.log(base);
    const length = getInputValueById('pentagon-apothem');
    // console.log(length);
    const area = base * length;
    const areaDisplay = setInnerTextById('pentagon-area', area);
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