const email = document.getElementById("email");
const text = document.querySelector('.input-valid-text');
function ValidateEmail() {
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    text.style.display="none"
  }else{
    text.style.display = "block"
  }
}
   