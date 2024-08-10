function calculateRhombusArea(){
    const diagonal_1 = getInputValueById('diagonal-1');
    const diagonal_2 = getInputValueById('diagonal-2');
    const area = 0.5 * diagonal_1 * diagonal_2;
    setInnerTextById('rhombus-area', area);
}