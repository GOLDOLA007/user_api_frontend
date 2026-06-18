const urls = ['http://localhost:8080/users/status-javaconfig'];

setInterval(testAPI, 60000); // Call testAPI every 1min
let i =0;
function testAPI() {
    fetch(urls[0])
    .then(response => response.text())
        //.then(text => console.log(text))
        .then(text => document.getElementById('response').textContent = text)
        .then(text => document.getElementById('counter').textContent = 'API called (1min intervals): ' + i + ' times')
        .catch(error => document.getElementById('response').textContent = 'Error: ' + error);    
        i=i+1;
}