document.addEventListener('DOMContentLoaded', function(){
    const myButton = document.getElementById('login-button');
    myButton.addEventListener('click', function(){
        /* opens discord Oauth2 window to add bot in server */
        window.open('https://discord.com/oauth2/authorize?client_id=1399197025970688070&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A5500&integration_type=0&scope=bot+identify+guilds+applications.commands&permissions=84992', '_blank').focus();

        /* sends to closing page */
        fetch('http://localhost:5500')
.then(response => response.text())
.then(html => {
    console.log(html);
})
.catch(err => console.error('fetch failed:', err));
window.open('http://localhost:5500', '_blank');
    });
})
