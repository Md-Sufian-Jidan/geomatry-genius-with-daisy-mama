// console.log('connected');
// function rectangleCalculate(){
//     const rectangleWidthInput = document.getElementById('rectangle-width')
//     const rectangleWidthText = rectangleWidthInput.value;
//     const Width = parseFloat(rectangleWidthText);
//     // console.log(Width);
    
//     // get the rectangle length
//     const rectangleLengthInput = document.getElementById('rectangle-length')
//     const rectangleLengthText = rectangleLengthInput.value;
//     const length = parseFloat(rectangleLengthText);
//     // console.log(Length);
//      // Rectangle Area calculate
//      const rectangleArea = Width* length;
//      console.log('total rectangle area is:', rectangleArea);

//      const rectangleAreaSpan = document.getElementById('rectangle-area');
//      rectangleAreaSpan.innerText = rectangleArea;
// }
function rectangleCalculate(){;
    const base = getInputValueById('rectangle-width')
    // console.log(base);
    const length = getInputValueById('rectangle-length');
    // console.log(length);
    const area = base * length;
    const areaDisplay = setInnerTextById('rectangle-area', area);
    return areaDisplay
}
function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    console.log(inputField);
    const inputText = inputField.value;
    const value = parseFloat(inputText);
    return value;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}