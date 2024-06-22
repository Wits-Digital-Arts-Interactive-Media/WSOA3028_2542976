document.addEventListener('DOMContentLoaded', function() {
    // Get all movable images
    const images = document.querySelectorAll('.movable-image, .movable-image2, .movable-image3');

    let currentIndex = 0;
    const intervalTime = 5000; // 10 seconds

    // Function to hide all images
    function hideImages() {
      images.forEach(image => {
        image.style.display = 'none';
      });
    }

    // Function to show current image
    function showCurrentImage() {
      hideImages();
      images[currentIndex].style.display = 'block';
      currentIndex = (currentIndex + 1) % images.length; // Move to the next image index
    }

    // Initial setup
    hideImages();
    showCurrentImage();

    // Automatically switch images every intervalTime milliseconds
    setInterval(showCurrentImage, intervalTime);
  });