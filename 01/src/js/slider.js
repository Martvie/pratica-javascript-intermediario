const slides = document.querySelectorAll(".slide")
const backArrow = document.getElementById('back-arrow')
const advanceArrow = document.getElementById('advance-arrow')

let currentSlide = 0

advanceArrow.addEventListener('click', function () {
    if (currentSlide === slides.length - 1) {
        return
    }
    hideImage()

    currentSlide++
    slides[currentSlide].classList.add('show')

    hideOrShowArrows()
})

backArrow.addEventListener('click', function () {
    if (currentSlide === 0) {
        return
    }
    hideImage()

    currentSlide--
    slides[currentSlide].classList.add('show')

    hideOrShowArrows()
})

function hideImage() {
    let openImage = document.querySelector('.show')
    openImage.classList.remove('show')
}

function hideOrShowArrows() {
    let notFirstImage = currentSlide !== 0
    let notLastImage = currentSlide !== slides.length - 1

    if (notFirstImage) {
        backArrow.classList.remove('opacity')
    } else {
        backArrow.classList.add('opacity')
    }

    if (notLastImage) {
        advanceArrow.classList.remove('opacity')
    } else {
        advanceArrow.classList.add('opacity')
    }
}