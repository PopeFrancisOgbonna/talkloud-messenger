//Function to toggle visibility
const toggleVisibility = (div) =>{
    const login = document.querySelector('.login');
    const register = document.querySelector('.register');
    login.classList.add('hide');
    register.classList.add('hide');
    div.classList.remove('hide')
}
//visibility toggling
const log = document.querySelector('#log');
const reg = document.querySelector('#reg');
const login = document.querySelector('.login');
const register = document.querySelector('.register');

log.addEventListener('click', (e) =>{
    e.preventDefault();
    toggleVisibility(login);
});
reg.addEventListener('click', (e) =>{
    e.preventDefault();
    toggleVisibility(register);
});
//Register New User
const newUser = document.querySelector('#create');
newUser.addEventListener('click', (e) =>{
    e.preventDefault();
    const warning = document.querySelector('.regWarning');
    const name = document.querySelector('#regName');
    const userName = document.querySelector('#regUserName');
    const password = document.querySelector('#regPassword');
    const confirm = document.querySelector('#regConfirm');

    //Creating user account
    if(name.value || userName.value || password.value || confirm.value){
       
        warning.innerHTML = 'Account Created Successfully!';
        warning.style.color = 'green';

        setTimeout(() => {
        warning.innerHTML ='';
        toggleVisibility(login); 
        }, 4000);
    }else if(password.value !== confirm){
        warning.innerHTML ="Password do not Match.";
        warning.style.color = 'red';
    }else{
        warning.innerHTML ="Please fill out all Fields.";
        warning.style.color = 'red';
    }

    
})
//login 
const loginBtn = document.querySelector('#loginBtn');
loginBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const warning = document.querySelector('.warning');
    const name = document.querySelector('#userName');
    const password = document.querySelector('#password');
    //authenticate user
    if(name.value && password.value){

        name.value = '';
        password.value ="";
        location.assign('/chat.html');
    }else{
        warning.innerHTML = 'Invalid Username and Password.';
        warning.style.color = 'red';
    }
    
})
