window.onload = () => {
    $$('.car-item').forEach(item => {
        item.addEventListener('click', (event) => {
            if(event.target.tagName === 'IMG'){
                toggleImageFullScreen(event.target.parentNode)
            }
        }, true)
    })
}

function toggleImageFullScreen(el){
    const isFullscreen = el.classList.contains('fullscreen')
    
    if (isFullscreen) {
        el.classList.remove('fullscreen')
        document.body.classList.remove('modal-open')
    } else {
        // Remove fullscreen from any other elements first
        $$('.car-item.fullscreen').forEach(item => {
            item.classList.remove('fullscreen')
        })
        el.classList.add('fullscreen')
        document.body.classList.add('modal-open')
    }
}

function $(selector){
    return document.querySelector(selector)
}

function $$(selector){
    return document.querySelectorAll(selector)
}
