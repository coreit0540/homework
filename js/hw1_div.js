const form = document.getElementsByTagName('form');



const inputAll = document.querySelectorAll('input');
const optionAll = document.querySelectorAll('option');


inputAll.keydown(nosubmit());
optionAll.keydown(function(event){
    if (event.keyCode === 13) {
        event.preventDefault();
    }
})

function nosubmit(event){
    event.preventDefault();
}