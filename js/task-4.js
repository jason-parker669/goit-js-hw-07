const credentials = {
    email: "",
    password: ""
    };

const formSubmit = document.querySelector(".login-form");

formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    if (email === "" || password === "")
        alert('All form fields must be filled in');
    else {
        credentials.email = email;
        credentials.password = password;
        console.log(credentials);
        form.reset();
    }
 } )

