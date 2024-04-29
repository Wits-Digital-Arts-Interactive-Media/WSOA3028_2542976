// Define pages and their corresponding file names
const pages = [
    { name: "Index", fileName: "index.html" },
    { name: "Portfolio", fileName: "../WSOA3028_2542976/Pages/Portfolio/portfolio.html" },
    { name: "About Me", fileName: "../WSOA3028_2542976/Pages/About Me/about.html" },
    { name: "Essays", fileName: "../WSOA3028_2542976/Pages/Essays/essay.html" },
    { name: "Blogposts", fileName: "../WSOA3028_2542976/Pages/Blogs/blog.html" },
    { name: "Playground", fileName: "../WSOA3028_2542976/Pages/TheHub/playground.html" }
];

// Function to load page content
function loadPage(fileName) {
    fetch(fileName)
        .then(response => response.text())
        .then(html => {
            const contentDiv = document.getElementById('content');
            contentDiv.innerHTML = html;
        })
        .catch(error => console.error('Error loading page:', error));
}

// Function to create navigation links
function createLinks() {
    const nav = document.getElementById('menu');
    pages.forEach(page => {
        const link = document.createElement('a');
        link.href = page.fileName;
        link.textContent = page.name;
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default link behavior
            loadPage(page.fileName);
        });
        nav.appendChild(link);
        nav.appendChild(document.createTextNode(' | ')); // Add a separator
    });
}

// Initialize links and load the first page
createLinks();
loadPage(pages[0].fileName);
