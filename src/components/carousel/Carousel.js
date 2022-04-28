import { useState } from 'react';

const slides = ["Slide 1", "Slide 2", "Slide 3"]

const carouselStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
}


const Carousel = () => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleLeft = () => {
        let current = currentSlide;
        if (current - 1 >= 0)
            setCurrentSlide(current - 1);
        else
            setCurrentSlide(slides.length - 1);
    }

    const handleRight = () => {
        let current = currentSlide;
        if (current + 1 <= slides.length - 1)
            setCurrentSlide(current + 1);
        else
            setCurrentSlide(0);
    }

    return (
        <div id="carousel" style={carouselStyle}>
            {slides.map((slide, index) => {
                return (
                    slides[currentSlide] === slide &&
                    <span key = { index } > { slide } </span>
                )
            })}
            <div>
                <button onClick={() => handleLeft()}> Left </button>
                <button onClick={() => handleRight()}> Right </button>
            </div>
        </div >
    )
}

export default Carousel;
