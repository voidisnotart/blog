function main() {
    var images = document.querySelectorAll('img[loading="lazy"]')

    function onLoad(e) {
        const image = e.target
        if (image.complete) {
            image.setAttribute('data-loaded', true)
            image.removeEventListener('load', onLoad)
        }
    }

    images.forEach(function (image) {
        if (image.complete) {
            image.setAttribute('data-loaded', true)
        }
        
        image.addEventListener('load', onLoad)
    })
}

main()
window.addEventListener('DOMContentLoaded', main)
window.addEventListener('load', main)