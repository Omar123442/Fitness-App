document.addEventListener("DOMContentLoaded", () => {
    let submit = document.getElementById("submit"); 

    if (submit) {
        submit.addEventListener("click", (event) => {
            let email = document.getElementById("email").value; 
            let password = document.getElementById("password").value;
            let repassword = document.getElementById("repassword").value; 
            event.preventDefault(); 

            if (email === "") {
                alert("Bitte Email ausfüllen");
                return;
            }

            if (password.length < 8) {
                alert("Das Passwort muss mindestens 8 Zeichen lang sein");
                return; 
            }

            if (password !== repassword) {
                alert("Passwörter stimmen nicht überein");
                return; 
            }

            localStorage.setItem(email, password);
            alert("Registrierung erfolgreich!");
            window.location.href = "SignIn.html";

        });
    }

    let Signbtn = document.getElementById("Signbtn"); 

    if (Signbtn) {
        Signbtn.addEventListener("click", (event) => {
            event.preventDefault(); 
            console.log("Sign In Button clicked"); 

            let Semail = document.getElementById("Semail").value;
            let Spassword = document.getElementById("Spassword").value;

            let password = localStorage.getItem(Semail); 

            if (password === null) {
                alert("Falscher Benutzername"); 
                return; 
            }

            if (password !== Spassword) {
                alert("Falscher Passwort");
                return;
            }
            localStorage.setItem("currentuser", Semail);

            alert("Anmeldung erfolgreich"); 
            alert(`Hello ${Semail}`); 
            window.location.href="Home.html"

        
        });
    }




});
