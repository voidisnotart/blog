function main() {
    var images = document.querySelectorAll('img[loading="lazy"]')
    console.log(images)
    function onLoad(e) {
        const image = e.target
        console.log(image)
        if (image.complete) {
            image.setAttribute('data-loaded', true)
            image.removeEventListener('load', onLoad)
        }
    }

    images.forEach(function (image) {
        console.log(image)
        if (image.complete) {
            image.setAttribute('data-loaded', true)
        }
        
        image.addEventListener('load', onLoad)
    })
}

main()
window.addEventListener('DOMContentLoaded', main)
window.addEventListener('load', main)