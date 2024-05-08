//document.addEventListener("DOMContentLoaded", function() {
    // Define pages and their corresponding file names

   /* const pages = [
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
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load page');
                }
                return response.text();
            })
            .then(html => {
                const contentDiv = document.getElementById('content');
                if (contentDiv) {
                    contentDiv.innerHTML = html;
                } else {
                    console.error('Error: #content element not found');
                }
            })
            .catch(error => console.error('Error loading page:', error));
    }

    // Function to create navigation links
    function createLinks() {
        const nav = document.querySelector('nav ul');
        if (!nav) {
            console.error('Error: <nav> <ul> element not found');
            return;
        }
        pages.forEach(page => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = page.fileName;
            link.textContent = page.name;
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior
                loadPage(page.fileName);
            });
            listItem.appendChild(link);
            nav.appendChild(listItem);
        });
    }

    createLinks();
    loadPage(pages[0].fileName);
}); */

const root = "/WSOA3028_2542976";

const pages = [
    { name: "Index", href: `${root}/index.html` },
    { name: "Portfolio", href: `${root}/Pages/Portfolio/portfolio.html` },
    { name: "About Me", href: `${root}/Pages/About Me/about.html` },
    { name: "Essays", href: `${root}/Pages/Essays/essay.html` },
    { name: "Blogposts", href: `${root}/Pages/Blogs/blog.html` },
    { name: "Playground", href: `${root}/Pages/TheHub/playground.html` }
];

export function initialise(currentPageName) {
    const nav = document.querySelector("header > nav");
    const ul = document.createElement("ul");

    for (const page of pages) {
        const li = document.createElement("li");
        const anchor = document.createElement("a");
        anchor.innerText = page.name;
        if (page.name !== currentPageName) {
            anchor.setAttribute('href', page.href);
        }

        li.appendChild(anchor);
        ul.appendChild(li);
    }
    nav.appendChild(ul);
}