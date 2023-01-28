let inrervalId;

document.querySelectorAll('.button').forEach(event => 
    event.addEventListener('click', event => {
   const menu = event.target.dataset.path;
//    console.log(menu);
   document.querySelectorAll('.dropdown-menu').forEach(event => {
    if (!document.querySelector(`[data-target = ${menu}]`).classList.contains('open')) {
        event.classList.remove('open');
        event.classList.remove('active');
        document.querySelector(`[data-target = ${menu}]`).classList.add('active');
        inrervalId = setTimeout(() => {
            document.querySelector(`[data-target = ${menu}]`).classList.add('open')
        }, 0);
    }
    
    if (document.querySelector(`[data-target = ${menu}]`).classList.contains('open')) {
        clearTimeout(inrervalId);
        document.querySelector(`[data-target = ${menu}]`).classList.remove('active');
        inrervalId = setTimeout(() => {
            document.querySelector(`[data-target = ${menu}]`).classList.remove('open')
        }, 0)
    }

    window.addEventListener('click', e => {
        if (e.target === document.querySelector(`[data-target = ${menu}]`) || 
        e.target === document.querySelector(`[data-path = ${menu}]`)) {
            return;
        } else {
            document.querySelector(`[data-target = ${menu}]`).classList.remove('active');
            document.querySelector(`[data-target = ${menu}]`).classList.remove('open')
        }
    })

    })
    
    
   
}));




