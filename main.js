async function registerAPI(){

    if(!(document.getElementById("register-response").textContent === "Request Response: ")){
        document.getElementById("register-response").textContent = "Request Response: ";
    }

    await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: document.getElementById('Username_R').value,
            email: document.getElementById('Email_R').value,
            password: document.getElementById('Password_R').value
        })
    })
    .then(response => console.log('Response: ' + response))
    .catch(error => console.log('Error: ' + error))
}

setInterval(testAPI, 60000); // Call testAPI every 1min
let i =0;
async function testAPI() {
    await fetch("http://localhost:8080/auth/status-javaconfig")
    .then(response => response.text())
        .then(text => document.getElementById('response').textContent = text)
        .then(text => document.getElementById('counter').textContent = 'API called (1min intervals): ' + i + ' times')
        .catch(error => document.getElementById('response').textContent = 'Error: ' + error);    
        i=i+1;
}