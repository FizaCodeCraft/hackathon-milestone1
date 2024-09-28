/*const togglebutton = document.getElementById('toggle-skills') as HTMLButtonElement
const skill = document.getElementById('skills') as HTMLElement

togglebutton.addEventListener('click', ()=>{
    if(skill.style.display === 'none') {
        skill.style.display = 'block'
    } else{
        skill.style.display = 'none'
    }
})*/
// Get the button and the skills section
var toggleSkillsButton = document.getElementById('toggle-skills');
var skillsSection = document.getElementById('skills');
// Add an event listener to the button
toggleSkillsButton.addEventListener('click', function () {
    // Check if the skills section is currently visible
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        // Show the skills section
        skillsSection.style.display = 'block';
        toggleSkillsButton.innerHTML = '<b>Hide Skills</b>'; // Change button text
    }
    else {
        // Hide the skills section
        skillsSection.style.display = 'none';
        toggleSkillsButton.innerHTML = '<b>Show Skills</b>'; // Change button text
    }
});
// Initially hide the skills section
if (skillsSection) {
    skillsSection.style.display = 'none';
}
