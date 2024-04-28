// Define your menu items array with their corresponding page URLs
const menuItems = [
    { name: "Index", url: "index.html" },
    { name: "Portfolio", url: "../WSOA3028_2542976/Pages/Portfolio/portfolio.html" },
    { name: "About Me", url: "../WSOA3028_2542976/Pages/About Me/about.html" },
    { name: "Essays", url: "../WSOA3028_2542976/Pages/Essays/essay.html" },
    { name: "Blogposts", url: "../WSOA3028_2542976/Pages/Blogs/blog.html" },
    { name: "Playground", url: "../WSOA3028_2542976/Pages/TheHub/playground.html" }
];


const currentPage = "index.html"; 


function generateMenu(menuItems, currentPage) {
    const navMenu = document.createElement("ul");

    
    menuItems.forEach(item => {
        const listItem = document.createElement("li");
        const link = document.createElement("a");

    
        link.textContent = (item.url === currentPage) ? item.name : "";

     
        if (item.url !== currentPage) {
            link.setAttribute("href", item.url);
            link.textContent = item.name;
        }

       
        listItem.appendChild(link);
      
        navMenu.appendChild(listItem);
    });

    
    document.getElementById("navMenuContainer").appendChild(navMenu);
}


document.addEventListener("DOMContentLoaded", function() {
    generateMenu(menuItems, currentPage);
});
