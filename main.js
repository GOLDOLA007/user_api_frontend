async function registerAPI(){

    const response = await fetch("http://localhost:8080/auth/register", {
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

    if(!response.ok){
        document.getElementById('register-response').textContent = "Request Response: ERROR " + response.status;
        throw new Error(`Server responded with status: ERROR  + ${response.status}`);
    }

    const data = await response.text();

    document.getElementById('register-response').textContent = "Request Response: " + data;
}

async function loginAPI_Response(){

    const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            email: document.getElementById("Username_L").value,
            password: document.getElementById("Password_L").value,
        })
    })

    if(!response.ok){
        document.getElementById('login-response').textContent = "Request Response: ERROR " + response.status;
        throw new Error(`Server responded with status: ERROR  + ${response.status}`);
    }

    const data = await response.text();

    document.getElementById('login-response').textContent = "Request Response: " + data;
}

setInterval(testAPI, 60000); // Call testAPI every 1min
let i =0;
async function testAPI() {
    try{
        const response = await fetch("http://localhost:8080/auth/status")
        
        if(!response.ok){ 
            document.getElementById('response').textContent = "Request Response: ERROR " + response.status;
            throw new Error(`Server responded with status: ERROR ${response.status}`)
        }

        const data = await response.text();

        document.getElementById('response').textContent = "Request Response: " + data;
        console.log("API Status: " + response.status);
    }
    catch(error){
        console.log("Error: " + error);
    }  
}