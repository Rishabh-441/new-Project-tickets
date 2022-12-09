let add = document.getElementsByClassName('add')[0];
// alert(add);
let create = document.getElementsByClassName('create')[0];
create.style.display = 'none';
add.addEventListener('click', function() {
    if (create.style.display == 'none') {
        create.style.display = 'flex';
        let div = document.getElementsByClassName('write')[0];
        div.innerText = "";
        div.contentEditable = 'true';
        // alert(create.style.display);
    }
    else {
        create.style.display = 'none';
        // alert(create.style.display);
    }
})

let colors = document.getElementsByClassName('selcol');
console.log(colors);
for (let i = 0; i < colors.length; i++) {
    const element = colors[i];
    element.addEventListener('click', function() {
        let color = element.id;
        console.log(color);
        createTicket(color);
    })
}

function createTicket(color) {
    let ticket = document.createElement('div');
    let ticketHead = document.createElement('div');
    ticketHead.style.backgroundColor = color;
    ticketHead.innerText = generateHex();
    let ticketContent = document.createElement('div');
    ticketContent.innerText = document.getElementById('input').innerText;
    ticket.appendChild(ticketHead);
    ticket.appendChild(ticketContent);
    ticket.classList.add('ticket');
    ticketHead.classList.add('tickHead');
    ticketContent.classList.add('tickContent');

    let content = document.getElementsByClassName('content')[0];
    content.appendChild(ticket);

    let createBox = document.getElementsByClassName('create')[0];
    createBox.style.display = 'none';

    let div = document.getElementsByClassName('write')[0];
    div.innerHTML = "";

}

function generateHex() {
    var letters = "0123456789ABCDEF";
    var code = '#';
    for (var i = 0; i < 6; i++)
       code += letters[(Math.floor(Math.random() * 16))];
    return code;
}

