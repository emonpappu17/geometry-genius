// function calculateParallelogramArea() {
//     // base
//     // const BInput = document.getElementById('parallelogram-base');
//     // const BText = BInput.value;
//     // const base = parseFloat(BText);
//     // console.log(base);

//     const base = getParallelogramBase();
//     console.log(base);
// }

// function getParallelogramBase(){
//     const BInput = document.getElementById('parallelogram-base');
//     const BText = BInput.value;
//     const base = parseFloat(BText);
//     return base;
// }

function calculateParallelogramArea() {
    const base = getInputValueById('parallelogram-base');
    // console.log(base);

    const height = getInputValueById('parallelogram-height')
    // console.log(height);

    const area = base * height;
    console.log(area);

    setInnerTextById('parallelogram-area', area);
}

function getInputValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const inputValue = parseFloat(inputValueText);
    // console.log(inputValue);
    return inputValue;
}

function setInnerTextById(elementId, area) {
    const element = document.getElementById(elementId);
    element.innerText = area;
}