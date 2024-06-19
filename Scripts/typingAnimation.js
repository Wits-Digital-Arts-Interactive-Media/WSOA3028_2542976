document.addEventListener('DOMContentLoaded', function () {
    const lines = [
      { element: document.getElementById('line1'), text: 'Dream.' },
      { element: document.getElementById('line2'), text: 'Create.' },
      { element: document.getElementById('line3'), text: 'Innovate.' }
    ];
  
    function typeLine(line, callback) {
      const { element, text } = line;
      element.textContent = '';
      element.style.opacity = 1; // Make the line visible
      let i = 0;
  
      function typeCharacter() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(typeCharacter, 100); // Adjust typing speed here (lower is faster)
        } else {
          element.style.borderRight = 'none'; // Remove caret after typing
          if (callback) callback();
        }
      }
  
      typeCharacter();
    }
  
    function startTyping() {
      let currentLine = 0;
  
      function nextLine() {
        if (currentLine < lines.length) {
          typeLine(lines[currentLine], function () {
            currentLine++;
            nextLine();
          });
        }
      }
  
      nextLine();
    }
  
    startTyping();
  });
  