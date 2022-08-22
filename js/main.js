const accordionBtns = document.querySelectorAll('.accordion__button')

accordionBtns.forEach(accordion => {
    accordion.onclick = function () {

        let content = this.nextElementSibling

        if (content.style.maxHeight) {
            this.innerHTML = 'Show'
            content.style.maxHeight = null
        } else {
            this.innerHTML = 'Hide'
            content.style.maxHeight = content.scrollHeight + 'px'
        }
    }
})