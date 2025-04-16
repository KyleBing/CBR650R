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
