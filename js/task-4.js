const credentials = {
    login: "",
    password: ""
    };

const formSubmit = document.querySelector(".login-form");

formSubmit.addEventListener("submit", (event) => {
    event.preventDefault();
    const form = event.target;
    const login = form.elements.email.value;
    const password = form.elements.password.value;
    if (login === "" || password === "") { alert('All form fields must be filled in') }
    else {
        credentials.login = login;
        credentials.password = password;
        console.log(`Login: ${credentials.login}`);
        console.log(`Passowrd: ${credentials.password}`);
        form.reset();
    }
 } )

