function scrollToSection(id) {
    const element = document.getElementById(id);
    const offset = 100; // Adjust this value to change how far above the element it scrolls
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
    
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  function scrollToBottom() {
window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
}
  
  function toggleWeeksMenu() {
    const weeksMenu = document.getElementById('weeks-menu');
    weeksMenu.classList.toggle('active');
  }