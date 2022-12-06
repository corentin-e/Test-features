const progessBar = document.getElementById('myBar');
const buttonStep = document.getElementById('step_button');

function stepWizard(stepWizard) {
    progessBar.style.width = (stepWizard.value/steps.length)*100 + "%";
    buttonStep.innerHTML = 'step 2'
}


function nextButton() {
    progessBar.style.width = (stepWizard.id/steps.length)*100 + "%";
    buttonStep.innerHTML = 'step 2'

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