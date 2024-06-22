        // Function to check if an element is in the viewport
        function isInViewport(element) {
            const rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to handle the animation of the line and content
        function animateElements() {
            const lines = document.querySelectorAll('.line');
            lines.forEach(line => {
                if (isInViewport(line)) {
                    line.style.display = 'block';
                    line.style.animation = 'growLine 1.5s ease forwards';
                }
            });

            const contents = document.querySelectorAll('.timeline-content');
            contents.forEach(content => {
                if (isInViewport(content)) {
                    content.classList.add('show');
                }
            });
        }

        // Event listener for scrolling
        window.addEventListener('scroll', animateElements);

        // Initial animation check
        animateElements();

        // Function to toggle read more content and adjust width
function toggleReadMore(contentId) {
    const content = document.getElementById(contentId);
    content.classList.toggle('show');
    
    // Adjust width based on content visibility
    if (content.classList.contains('show')) {
        content.style.width = '200%'; // Set desired width
    } else {
        content.style.width = '100%'; // Reset width when content is hidden
    }
}


        // Initialize script
        initialise("Blogposts");