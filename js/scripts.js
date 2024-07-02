document.addEventListener("DOMContentLoaded", function() {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const thumbnails = document.querySelectorAll(".thumbnail");
    const closeBtn = document.querySelector(".close");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    let currentIndex = 0;

    thumbnails.forEach((thumbnail, index) => {
        thumbnail.addEventListener("click", () => {
            modal.style.display = "flex";
            modalImage.src = thumbnail.src;
            currentIndex = index;
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex === 0) ? thumbnails.length - 1 : currentIndex - 1;
        modalImage.src = thumbnails[currentIndex].src;
    });

    nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex === thumbnails.length - 1) ? 0 : currentIndex + 1;
        modalImage.src = thumbnails[currentIndex].src;
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
