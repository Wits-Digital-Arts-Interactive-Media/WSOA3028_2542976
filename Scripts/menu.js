// menu.js

document.getElementById("menu-button").addEventListener("click", function() {
    const overlayNav = document.getElementById("overlay-nav");
    overlayNav.innerHTML = ""; // Clear existing content
  
    const nav = document.querySelector("header nav");
    const clonedNav = nav.cloneNode(true);
    clonedNav.style.display = "block";
    
    overlayNav.appendChild(clonedNav);
    document.getElementById("overlay-menu").style.display = "block";
  });
  
  document.getElementById("close-button").addEventListener("click", function() {
    document.getElementById("overlay-menu").style.display = "none";
  });