// console.log('connected');
/**
 * Objective - get base, height of a triangle. calculate the area by using the provided formula and then display the area.
 *  step-1: get base value of the triangle
 *  step-2:added an id in the base input field
 *  step-3:use getElementById to access the input field
 * 
 */

function calculateTriangleArea(){
    // get triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value
    const base = parseFloat(triangleBaseText);
    // console.log(typeof base)

    // get triangle height value
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText = triangleHeightInput.value
    const height = parseFloat(triangleHeightText);
    // console.log(height);

    //calculate triangle area
    const triangleArea = 0.5 * base * height;
    console.log('Area of the triangle is',triangleArea);

    // display the area
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = triangleArea;
}