var images = document.querySelectorAll('img[loading="lazy"]')

images.forEach(function (image) {
    image.addEventListener('load', function onLoad() {
        if (image.complete) {
            image.setAttribute('data-loaded', true)
        }
    })
})
