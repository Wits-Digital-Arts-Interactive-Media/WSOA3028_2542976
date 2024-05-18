const root = "/WSOA3028_2542976";
const pages = [
  { name: "Index", href: `${root}/index.html` },
  {
    name: "Portfolio",
    href: `${root}/Pages/Portfolio/portfolio.html`,
    subPages: [
      { name: "People Solutions Hub", href: `https://peoplesolutionshub.com.au/` },
      { name: "GitHub", href: `https://github.com/Wits-Digital-Arts-Interactive-Media/WSOA3028_2542976` }
    ]
  },

  { 
    name: "About Me", 
    href: `${root}/Pages/About Me/about.html`,
    subPages: [
    { name: "About Me", href: `${root}/Pages/About Me/about.html` },
    { name: "Contact Page", href: `${root}/Pages/About Me/about.html` },
    ]
  },

  { name: "Essays", href: `${root}/Pages/Essays/essay.html` },
  {
    name: "Blogposts",
    href: `${root}/Pages/Blogs/blog.html`,
    subPages: [
      { name: "Blog 1", href: `${root}/Pages/Blogs/blog1.html` },
      { name: "Blog 2", href: `${root}/Pages/Blogs/blog2.html` },
      { name: "Blog 3", href: `${root}/Pages/Blogs/blog3.html` },
      { name: "Blog 4", href: `${root}/Pages/Blogs/blog4.html` },
      { name: "Blog 5", href: `${root}/Pages/Blogs/blog5.html` },
      { name: "Blog 6", href: `${root}/Pages/Blogs/blog6.html` },
      { name: "Blog 7", href: `${root}/Pages/Blogs/blog7.html` },
      { name: "Blog 8", href: `${root}/Pages/Blogs/blog8.html` }
    ]
  },
  { name: "Design", href: `${root}/Pages/Design/design.html` },
  {
    name: "Playground",
    href: `${root}/Pages/TheHub/playground.html`,
    subPages: [
      {
        name: "Quote Generator",
        href: `${root}/Pages/TheHub/playground.html`,
              },
      {
        name: "Sub-menu 2",
        href: `${root}/Pages/TheHub/submenu2.html`,
        
      }
    ]
  }
];

export function initialise(currentPageName) {
  const nav = document.querySelector("header > nav");
  const ul = document.createElement("ul");

  pages.forEach(page => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.innerText = page.name;
    if (page.name === currentPageName) {
      anchor.classList.add('current-page');
    } else {
      anchor.setAttribute('href', page.href);
    }
    li.appendChild(anchor);

    if (page.subPages) {
      const subUl = document.createElement("ul");
      page.subPages.forEach(subPage => {
        const subLi = document.createElement("li");
        const subAnchor = document.createElement("a");
        subAnchor.innerText = subPage.name;
        subAnchor.setAttribute('href', subPage.href);
        subLi.appendChild(subAnchor);

        if (subPage.subPages) {
          const subSubUl = document.createElement("ul");
          subPage.subPages.forEach(subSubPage => {
            const subSubLi = document.createElement("li");
            const subSubAnchor = document.createElement("a");
            subSubAnchor.innerText = subSubPage.name;
            subSubAnchor.setAttribute('href', subSubPage.href);
            subSubLi.appendChild(subSubAnchor);
            subSubUl.appendChild(subSubLi);
          });
          subLi.appendChild(subSubUl);
        }
        subUl.appendChild(subLi);
      });
      li.appendChild(subUl);
    }
    ul.appendChild(li);
  });

  nav.appendChild(ul);
}
