function _(el) {return document.getElementById(el)}

let how__page = _('how__page');
let how__link = _('how__link');
let close__link = _('close__link');

function checkMe() {
    if (how__page.className = 'how__page how__page--close') {
        how__page.className = 'how__page how__page--open';
    }
}
function closeMe() {
    if (how__page.className = 'how__page how__page--open') {
        how__page.className = 'how__page how__page--close';
    }
}

how__link.addEventListener('click',()=> {
    checkMe();
})

close__link.addEventListener('click',()=> {
    closeMe();
})