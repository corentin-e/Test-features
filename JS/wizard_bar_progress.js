const stepsWizzard = document.getElementsByClassName('button-step-wizard');
const progessBar = document.getElementById('myBar');
const buttonStep = document.getElementById('step_button');


function stepWizard1() {
    progessBar.style.width = 25 + "%";
    buttonStep.innerHTML = 'step 2'
}

function stepWizard2() {
    progessBar.style.width = 50 + "%";
    buttonStep.innerHTML = 'step 3'
}

function stepWizard3() {
    progessBar.style.width = 100 + "%";
    buttonStep.innerHTML = 'Terminé'
}


function nextButton() {
    if (buttonStep.innerHTML === "step 1") {
        progessBar.style.width = 25 + "%";
        buttonStep.innerHTML = 'step 2'
    } else if (buttonStep.innerHTML === "step 2") {
        progessBar.style.width = 50 + "%";
        buttonStep.innerHTML = 'step 3'
    } else if (buttonStep.innerHTML === "step 3") {
        progessBar.style.width = 100 + "%";
        buttonStep.innerHTML = 'Terminé'
    } 
}