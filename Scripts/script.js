const root = "/WSOA3028_2542976";
const pages = [
  { name: "Home", href: `${root}/index.html` },
  { name: "Portfolio", href: `${root}/Pages/Portfolio/portfolio.html` },
  { name: "About Me", href: `${root}/Pages/About Me/about.html` },
  { name: "Essays", href: `${root}/Pages/Essays/essay.html` },
  { name: "Blogposts", href: `${root}/Pages/Blogs/blog.html` },
  { name: "Design", href: `${root}/Pages/Design/design.html` },
  { name: "Playground", href: `${root}/Pages/TheHub/playground.html` }
];

export function initialise(currentPageName) {
  const nav = document.querySelector("header nav");
  const ul = document.createElement("ul");

  pages.forEach(page => {
    const li = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.innerText = page.name;
    if (page.name === currentPageName) {
      anchor.classList.add('current-page');
    } else {
      anchor.setAttribute('href', page.href);
      anchor.setAttribute('onclick', 'window.location.reload()');
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
