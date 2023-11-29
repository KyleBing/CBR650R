window.onload = () => {
    $$('.car-item').forEach(item => {
        item.addEventListener('click', (event) => {
            toggleImageFullScreen(event.target.parentNode)
            console.log(event)
        }, true)
    })
}

function toggleImageFullScreen(el){
    if (el.classList.contains('fullscreen')){
        el.classList.remove('fullscreen')
    } else {
        el.classList.add('fullscreen')
    }
}

function $(selector){
    return document.querySelector(selector)
}

function $$(selector){
    return document.querySelectorAll(selector)
}
