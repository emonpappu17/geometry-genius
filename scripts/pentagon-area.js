function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter');
    console.log(perimeter);
    
    const apothem = getInputValueById('pentagon-apothem');
    console.log(apothem);

    const area = 0.5 * perimeter * apothem;

    setInnerTextById('pentagon-area', area);
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