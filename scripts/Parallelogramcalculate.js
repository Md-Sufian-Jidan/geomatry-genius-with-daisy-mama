// function ParallelogramCalculate(){ const parallelogramBInput = document.getElementById('Parallelogram-base');
// const ParallelogramBText = parallelogramBInput.value
// const b = parseFloat(ParallelogramBText);
// // console.log(b);

// //get the h
// const ParallelogramHInput = document.getElementById('Parallelogram-height');
// const ParallelogramHText = ParallelogramHInput.value;
// const h = parseFloat(ParallelogramHText);

// const ParallelogramArea = b * h;
// //now display it 
// const ParallelogramDisplay = document.getElementById('Parallelogram-area');
// ParallelogramDisplay.innerText = ParallelogramArea;
// }

// Reusable code making

function calculateParallelogramArea(){
    const base = getInputValueId('Parallelogram-base');
    console.log('Parallelogram-base : ',base);
    const height = getInputValueId('Parallelogram-height');
    console.log('Parallelogram-height : ',height);
    const area = base * height;
    console.log('area of the Parallelogram is : ', area);
    setInnerTextById('Parallelogram-area',area);
}

function getInputValueId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value
    const inputValue = parseFloat(inputValueText);
    return inputValue;
}
function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}