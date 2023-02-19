let toggler=document.getElementById('toggler');
console.log(toggler)
toggler.addEventListener('click',() => {
    document.getElementById('menu').classList.toggle('hide')
})
