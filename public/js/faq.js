function showAccordion(sectionId) {
    // Hide all accordion sections
    document.querySelectorAll('.accordion-section').forEach(section => {
      section.classList.add('hidden');
    });
  
    // Show the selected accordion section
    document.getElementById(sectionId).classList.remove('hidden');
  }
  
  function toggleAccordionContent(header) {
    // Find the next sibling element which should be the accordion-content
    const content = header.nextElementSibling;
    if (content && content.classList.contains('accordion-content')) {
      content.classList.toggle('active');
    }
  }
  
