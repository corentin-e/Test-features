const stepsWizardArea = document.querySelector("#stepsWizardArea");

const buttonStepTemplate = document.querySelector("#buttonStepTemplate");

steps.forEach(step => {
    const clone = document.importNode(buttonStepTemplate.content, true);
    const buttonClone = clone.querySelector(".button-step-wizard");
    buttonClone.textContent = step.name;
    buttonClone.id = step.id;
    buttonClone.value = step.value;
    stepsWizardArea.appendChild(clone);
})




