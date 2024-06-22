function embedPdf(url) {
    const pdfContainer = document.getElementById('pdf-container');
    const pdfEmbed = document.getElementById('pdf-embed');
    pdfContainer.style.display = 'block';
    pdfEmbed.innerHTML = `<embed src="${url}" type="application/pdf" width="100%" height="100%">`;
}

function closePdf() {
    const pdfContainer = document.getElementById('pdf-container');
    const pdfEmbed = document.getElementById('pdf-embed');
    pdfContainer.style.display = 'none';
    pdfEmbed.innerHTML = '';
}