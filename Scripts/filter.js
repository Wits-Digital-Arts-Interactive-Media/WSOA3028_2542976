document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const blocks = document.querySelectorAll(".block");
    let currentFilter = null;

    filterButtons.forEach(button => {
      button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        if (currentFilter === filter) {
          // If the same filter is clicked again, reset to show all
          currentFilter = null;
          filterButtons.forEach(btn => btn.classList.remove("active"));
        } else {
          // Set the new filter and update active state
          currentFilter = filter;
          filterButtons.forEach(btn => btn.classList.remove("active"));
          button.classList.add("active");
        }

        blocks.forEach(block => {
          block.classList.add('hide');
          if (!currentFilter || currentFilter === "all" || block.getAttribute("data-tag") === currentFilter) {
            setTimeout(() => {
              block.style.display = "block";
              block.classList.remove('hide');
            }, 300);
          } else {
            setTimeout(() => {
              block.style.display = "none";
            }, 300);
          }
        });
      });
    });
  });