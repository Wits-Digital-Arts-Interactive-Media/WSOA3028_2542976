const fs = require('fs');
const path = require('path');

const folderPath = '/path/to/your/folder'; // Specify the path to your folder here

fs.readdir(folderPath, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  const pages = files
    .filter(file => file.endsWith('.html')) // Filter only HTML files
    .map(file => {
      const fileName = path.basename(file, '.html'); // Extract file name without extension
      return `<li><a href="${fileName}.html">${fileName}</a></li>`; // Generate list item with link
    });

  const pageList = `<ul>${pages.join('')}</ul>`; // Join list items into a single string

  console.log(pageList); // Output the generated page list
});
