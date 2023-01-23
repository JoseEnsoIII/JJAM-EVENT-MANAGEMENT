window.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle
  ('window-scroll', window.scrollY > 0 )
})

document.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY >= navbar.offsetTop) {
      navbar.classList.add('sticky');
    } else {
      navbar.classList.remove('sticky');
    }
  });

var button = document.getElementById("scroll-button");

// Function to change button text
function changeButtonText() {
    if (window.pageYOffset > 0) {
        button.innerHTML = "Scroll Up";
    } else {
        button.innerHTML = "Scroll Down";
    }
}

// Detect when the page is scrolled
window.onscroll = function() {
    changeButtonText();
};

button.addEventListener("click", function() {
    if (button.innerHTML === "Scroll Down") {
        window.scrollTo({top: 0, behavior: 'smooth'});
    } else {
        window.scrollTo({top:document.body.scrollHeight, behavior: 'smooth'});
    }
});

var button = document.getElementById("scroll-button");

button.addEventListener("click", function() {
    if (button.innerHTML === "Scroll Down") {
        window.scrollTo(0, 0);
        button.innerHTML = "Scroll Up";
    } else {
        window.scrollTo(0, document.body.scrollHeight);
        button.innerHTML = "Scroll Down";
    }
});

//javascript for contact us page //
function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    return true;
  }
  // for login form//
  document.addEventListener('DOMContentLoaded', function () {
    var loginForm = document.getElementById("login-form");
    var popupContainer = document.getElementById("popup-container");
    var popupMessage = document.getElementById("popup-message");
    var popupCloseButton = document.getElementById("popup-close-button");
    var registerLink = document.getElementById("register-link");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        if (username === "validuser" && password === "validpassword") {
            popupMessage.innerHTML = "Successful login!";
            popupContainer.style.display = "flex";
        } 
        else if (username === "" || password === "") {
            popupMessage.innerHTML = "Please fill in all fields.";
            popupContainer.style.display = "flex";
        } 
        else {
            popupMessage.innerHTML = "Incorrect username or password. ";
            registerLink.style.display = "block";
            popupContainer.style.display = "flex";
        }
    });

    popupCloseButton.addEventListener("click", function() {
        popupContainer.style.display = "none";
        registerLink.style.display = "none";
    });

    registerLink.addEventListener("click", function(event) {
        event.preventDefault();
        window.location.href = "register.html";
    });
});
