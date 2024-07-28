// JavaScript function to handle showing and hiding sections
function showAccordion(sectionId) {
    // List of all section IDs
    const sections = ['full-menu', 'burger-section', 'sides-section', 'drinks-section'];
  
    // Loop through each section
    sections.forEach(section => {
      const element = document.getElementById(section);
      // Check if the current section matches the sectionId
      if (section === sectionId) {
        // Toggle the visibility of the current section
        if (element.classList.contains('hidden')) {
          element.classList.remove('hidden');
        } else {
          element.classList.add('hidden');
        }
      } else {
        // Hide other sections
        element.classList.add('hidden');
      }
    });
  }
  