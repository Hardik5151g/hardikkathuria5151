var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right= "0";
}
function closemenu(){
    sidemenu.style.right= "-200px";
}
         // form-start

const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Message: ${message.value}`
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "hardik5151g@gmail.com",
        Password : "6658473484B0665FC082483AD4B6BDDD9B2A",
        To : 'hardik5151g@gmail.com',
        From : "hardik5151g@gmail.com",
        Subject : "Portfolio message",
        Body : bodyMessage
    }).then(
      message => {
        if(message == "OK") {
            Swal.fire({
                title: "Success!",
                text: "Message Sent Successfully!",
                icon: "success"
              });
        }
      }
    );
}


form.addEventListener("submit",(e) => {
    e.preventDefault();

    sendEmail() ;
})