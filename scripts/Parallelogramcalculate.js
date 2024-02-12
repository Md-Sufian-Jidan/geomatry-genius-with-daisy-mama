function ParallelogramCalculate(){ const parallelogramBInput = document.getElementById('ParallelogramB');
const ParallelogramBText = parallelogramBInput.value
const b = parseFloat(ParallelogramBText);
// console.log(b);

//get the h
const ParallelogramHInput = document.getElementById('ParallelogramH');
const ParallelogramHText = ParallelogramHInput.value;
const h = parseFloat(ParallelogramHText);

const ParallelogramArea = b * h;
//now display it 
const ParallelogramDisplay = document.getElementById('ParallelogramDisplay');
ParallelogramDisplay.innerText = ParallelogramArea;
}