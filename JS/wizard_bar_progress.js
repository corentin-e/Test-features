const progessBar = document.getElementById('myBar');
const buttonStep = document.getElementById('step_button');

function stepWizard(stepWizzard) {
    if (stepWizzard.innerHTML === "step 1") {
        progessBar.style.width = 25 + "%";
        buttonStep.innerHTML = 'step 2'
    } else if (stepWizzard.innerHTML === "step 2") {
        progessBar.style.width = 50 + "%";
        buttonStep.innerHTML = 'step 3'
    } else if (stepWizzard.innerHTML === "step 3") {
        progessBar.style.width = 100 + "%";
        buttonStep.innerHTML = 'Terminé'
    } 
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