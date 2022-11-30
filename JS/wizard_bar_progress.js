const elem = document.getElementById('myBar');
const buttonStep = document.getElementById('step_button');
console.log(buttonStep.innerHTML)
function move() {
    if (buttonStep.innerHTML === "step 1") {
        elem.classList.add('step_1');
        buttonStep.innerHTML = 'step 2'
    } else if (buttonStep.innerHTML === "step 2") {
        elem.classList.remove('step_1');
        elem.classList.add('step_2');
        buttonStep.innerHTML = 'step 3'
    } else if (buttonStep.innerHTML === "step 3") {
        elem.classList.remove('step_2');
        elem.classList.add('step_3');
        buttonStep.innerHTML = 'Terminé'
    } 
}