const stepsWizzard = document.getElementsByClassName('button-step-wizard');
const elem = document.getElementById('myBar');
const buttonStep = document.getElementById('step_button');


function stepWizard1() {
    elem.style.width = 25 + "%";
    buttonStep.innerHTML = 'step 2'
}

function stepWizard2() {
    elem.style.width = 50 + "%";
    buttonStep.innerHTML = 'step 3'
}

function stepWizard3() {
    elem.style.width = 100 + "%";
    buttonStep.innerHTML = 'Terminé'
}


function nextButton() {
    if (buttonStep.innerHTML === "step 1") {
        elem.style.width = 25 + "%";
        buttonStep.innerHTML = 'step 2'
    } else if (buttonStep.innerHTML === "step 2") {
        elem.style.width = 50 + "%";
        buttonStep.innerHTML = 'step 3'
    } else if (buttonStep.innerHTML === "step 3") {
        elem.style.width = 100 + "%";
        buttonStep.innerHTML = 'Terminé'
    } 
}