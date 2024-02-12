// console.log('pentagon gone gone');
function calculatePentagonArea(){
    const perimeter = getInputValueId('pentagon-perimeter');
    const apothem = getInputValueId('pentagon-apothem');
    const area = 0.5 * perimeter * apothem;
    // console.log(area);
    setInnerTextById('Pentagon-area' , area);
}
function getInputValueId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}