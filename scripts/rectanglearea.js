// console.log('connected');
function rectangleCalculate(){
    const rectangleWidthInput = document.getElementById('rectangle-width')
    const rectangleWidthText = rectangleWidthInput.value;
    const Width = parseFloat(rectangleWidthText);
    // console.log(Width);
    
    // get the rectangle length
    const rectangleLengthInput = document.getElementById('rectangle-length')
    const rectangleLengthText = rectangleLengthInput.value;
    const length = parseFloat(rectangleLengthText);
    // console.log(Length);
     // Rectangle Area calculate
     const rectangleArea = Width* length;
     console.log('total rectangle area is:', rectangleArea);

     const rectangleAreaSpan = document.getElementById('rectangle-area');
     rectangleAreaSpan.innerText = rectangleArea;
}