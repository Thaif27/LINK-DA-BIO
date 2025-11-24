
function moveRandomly(element) {
    const duration = 6000 + Math.random() * 4000; // entre 6 e 10s por movimento

    const maxX = window.innerWidth - element.clientWidth;
    const maxY = window.innerHeight - element.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    element.style.transition = `${duration}ms linear`;
    element.style.transform = `translate(${newX}px, ${newY}px)`;

    setTimeout(() => moveRandomly(element), duration);
}

window.onload = () => {
    const imgs = document.querySelectorAll(".floating-images img");
    imgs.forEach(img => moveRandomly(img));
};
