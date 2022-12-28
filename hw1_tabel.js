const form = document.getElementsByTagName('form');

const id = document.querySelector('#userid');


form.addEventListener('submit', (event)=>{
    event.preventDefault(); // form제출시 새로고침 되는거 막자
    console.log(id);
})