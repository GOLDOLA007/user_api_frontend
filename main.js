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
    .then(response => response.text())
        .then(text => document.getElementById('register-response').textContent = document.getElementById('register-response').textContent  + text)
    .catch(error => document.getElementById('register-response').textContent = document.getElementById('register-response').textContent + "Error: " + error);
}

async function loginAPI_Response(){
    if(!(document.getElementById("login-response").textContent === "Request Response: ")){
        document.getElementById("login-response").textContent = "Request Response: ";
    }

    await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email: document.getElementById("Username_L").value,
            password: document.getElementById("Password_L").value,
        })
    })
    .then(response => response.text())
            .then(text => document.getElementById('login-response').textContent = document.getElementById('login-response').textContent  + text)
        .catch(error => document.getElementById('login-response').textContent = document.getElementById('login-response').textContent + "Error: " + error);
}

setInterval(testAPI, 60000); // Call testAPI every 1min
let i =0;
async function testAPI() {
    try{
        const response = await fetch("http://localhost:8080/auth/status")
        
        if(!response.ok){
            throw new Error(`Server responded with status: ${response.status}`)
            document.getElementById('response').textContent = response.status;
        }

        const data = await response.text();

        document.getElementById('response').textContent = data + " | API called: " + i + " times";
        console.log("API Status: " + response.status);
    }
    catch(error){
        console.log("Error: " + error);
    }  
    i=i+1;
}