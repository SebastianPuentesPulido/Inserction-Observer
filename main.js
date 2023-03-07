const historia = document.getElementById('story');
const buying = document.getElementById("buying");

function loadElement(entradas,observer) {
    entradas.forEach((e) => {
        if (e.isIntersecting) {
            console.log("executed");
            e.target.classList.add("visible");
        } else {
            // e.target.classList.remove("visible");
        }
    });
}

const observer = new IntersectionObserver(loadElement, {
    root:null,
    rootMargin:'0px 0px 0px 0px',
    threshold:1.0
});

observer.observe(historia);
observer.observe(buying);