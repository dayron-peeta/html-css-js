//guardando en constantes los elementos con determinadas clases
const menu= document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

//al hacer click sobre el elemento que posea esa clase, se pone/quita la nueva clase especificada
menu.addEventListener('click', function(){
    menuList.classList.toggle('nav__list--show')
})

//al hacer click sobre el elemento que posea esa clase, se quita la  clase especificada
links.forEach(function(link){
    link.addEventListener('click', function(){
        menuList.classList.remove('nav__list--show')
    })
});