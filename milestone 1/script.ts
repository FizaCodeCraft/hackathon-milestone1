
// Get the button and the skills section
const toggleSkillButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillSection = document.getElementById('skills') as HTMLElement;

// Add an event listener to the button
toggleSkillButton.addEventListener('click', () => {
    // Check if the skills section is currently visible
    if (skillSection.style.display === 'none' || skillSection.style.display === '') {
        // Show the skills section
        skillSection.style.display = 'block';
        toggleSkillButton.innerHTML = '<b>Hide Skills</b>'; // Change button text
    } else {
        // Hide the skills section
        skillSection.style.display = 'none';
        toggleSkillButton.innerHTML = '<b>Show Skills</b>'; // Change button text
    }
});

// Initially hide the skills section
if (skillsSection) {
    skillsSection.style.display = 'none';
}
