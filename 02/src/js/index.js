let itemAcordeon = document.querySelectorAll('.item')

itemAcordeon.forEach(item => {
    item.addEventListener("click", function () {
        let active = document.querySelector('.active')

        if(active){
        active.classList.remove('active')
        }

        item.classList.add('active')
    })
}
)