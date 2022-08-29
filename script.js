
function notReadyAlert() {
    alert( 'Part is not ready yet! \n Раздел не готов!' );
    return false;
}

function search() {
    let name = document.getElementById('search').value;
    let productNumber = null;
    if (name == 'НСК') {
        productNumber = 0;
    } 
    else if (name == 'Президент') {
        productNumber = 1;
    } 
    else if (name == 'Судья') {
        productNumber = 2;
    }
    else {
        alert("Товар не найден!!!");
    }
    let cards = document.getElementsByClassName('card');
    let card = cards[productNumber];
    card.style.border = '1px dashed red';
    card.style.backgroundColor = 'yellow';
    
    setTimeout(function() {
    card.style.border = 'none';
    card.style.backgroundColor = '';
}, 2000);
}

function loaded() {
    let searchbox = document.getElementById('search');
    searchbox.addEventListener('keydown', function (key){
        if (key.key == 'Enter')
        search();
    });
}