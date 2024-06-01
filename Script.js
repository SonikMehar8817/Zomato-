let login = document.getElementById('log_in')
let loginn = document.querySelector(".login");
let cut_login = document.getElementById("cut_login");

login.addEventListener('click',()=>{
    loginn.style.display = 'block';
})
cut_login.addEventListener('click',()=>{
    loginn.style.display = "none";
})
