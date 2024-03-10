document.addEventListener("DOMContentLoaded", function () {
    console.log("DOMContentLoaded event fired");
    // Your animation code here
    const content = document.querySelector(".main-content");
    const loadingContainer = document.querySelector(".loading-container");

    // Calculate total animation duration
    const animationDuration = 2000; // 2s

    // Show main content after animation completes with a small delay
    setTimeout(() => {
        console.log("Main content will be displayed");
        content.style.display = "block";
        loadingContainer.style.display = "none";
    }, animationDuration );
});