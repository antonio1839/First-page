document.addEventListener("DOMContentLoaded", function() {
    let flores = document.querySelector(".flores-img");
    setInterval(() => {
        flores.style.transform = `rotate(${Math.random() * 4 - 2}deg) translateX(${Math.random() * 10 - 5}px)`;
    }, 1000);
});
