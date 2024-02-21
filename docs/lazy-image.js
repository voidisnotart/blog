var images = document.querySelectorAll('img[data-src]')

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(function (entry) {
//         if (!entry.isIntersecting) return 

//         entry.target.src = entry.target.getAttribute('data-src')
//         observer.unobserve(image)
//     })
// }, {
//     rootMargin: '0px 0px 512px 0px',
// })

// images.forEach(function (image) {
//     observer.observe(image)
// })

images.forEach(function (image) {
    image.addEventListener('load', function onLoad() {
        if (image.complete) {
            image.setAttribute('data-loaded', true)
        }
    })
})
