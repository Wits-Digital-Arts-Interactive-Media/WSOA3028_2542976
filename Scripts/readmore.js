// Function to handle toggling of read more content
$(document).ready(function() {
    $('.read-more-link').click(function(e) {
        e.preventDefault();
        $(this).siblings('.read-more-content').toggleClass('show');
        $(this).text(function(_, text) {
            return text === 'Read More' ? 'Read Less' : 'Read More';
        });
    });
});
