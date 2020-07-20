const room = document.querySelector('#room');
const selectRoom = document.querySelector('.message-body');
const joinRoom = document.querySelector('.chats-body');

const toggler = (id) =>{
    selectRoom.classList.add('hide');
    joinRoom.classList.add('hide');
    id.classList.remove('hide');
}
//function for selection Room
const availableRoom = document.querySelector('.rooms');
availableRoom.addEventListener('click', (e) =>{
    e.preventDefault();
    if(e.target.value !==''){
        room.value = e.target.parentElement.textContent;
    }
});
//Creating new Room
const createRoom = document.querySelector('#createRoom');
createRoom.addEventListener('click', (e) =>{
    e.preventDefault();
    const newRoom = document.querySelector('#new-room');
    const HTML = `<li><p class="lead">${'#'+newRoom.value.trim()}</p></li>`
    if(newRoom.value.trim() !==''){
        availableRoom.innerHTML += HTML;
        room.value = '#'+newRoom.value.trim();
        newRoom.value ='';
    }
})
//Joining selected Room
const join = document.querySelector('#join');
join.addEventListener('click', (e) =>{
    e.preventDefault();
    if(room.value !==''){
        toggler(joinRoom);
    }
    
});
//function Go back and change room
const back = document.querySelector('#back');
back.addEventListener('click', (e) =>{
    toggler(selectRoom);
});
//Exiting chat room
const exit = document.querySelector('#close');
exit.addEventListener('click', (e) =>{
    e.preventDefault();
    console.log('ok')
    location.assign('/index.html')
})