const slides = ["Slide 1", "Slide 2", "Slide 3"];
let currentIndex = 0;
let carousel = document.querySelector("#carousel");

createSlides();
createButtons();

function createSlides() {
    slides.map((slide, index) => {
        let child = document.createElement("span");
        child.setAttribute("class", "slide")
        // have first element as the initial slide
        if (index === 0) {
            child.classList.add("current")
        }
        child.innerText = slide;
        carousel.appendChild(child);
    })
}

function createButtons() {
    let wrapper = document.createElement("div");
    let leftButton = document.createElement("button");
    leftButton.innerText = "left";
    leftButton.addEventListener("click", () => {
        slideLeft();
    });


    let rightButton = document.createElement("button");
    rightButton.addEventListener("click", () => {
        slideRight();
    });
    rightButton.innerText = "right";


    wrapper.append(leftButton, rightButton);
    carousel.appendChild(wrapper);
}

function slideLeft() {

    let currentSlide = document.querySelector(".current")
    currentSlide.classList.remove("current")
    if (currentIndex - 1 >= 0)
        currentIndex -= 1;
    else
        currentIndex = slides.length - 1;

    updateSlide();
}

function slideRight() {

    let currentSlide = document.querySelector(".current")
    currentSlide.classList.remove("current")
    if (currentIndex + 1 <= slides.length - 1)
        currentIndex += 1;
    else
        currentIndex = 0;

    updateSlide();
}

function updateSlide() {
    let nodes = document.querySelectorAll(".slide")

    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].innerText === slides[currentIndex]) {
            nodes[i].classList.add("current");
        }
    }
}
