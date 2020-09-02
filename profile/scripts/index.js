let para = document.querySelector('button');
var userEmail = document.getElementsByName('email').values;
para.addEventListener('click', confirmEmail);
function confirmEmail(){
    var name = confirm("Your email address: " + userEmail);
}