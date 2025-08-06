
// Gets URL from current active tab
document.addEventListener('DOMContentLoaded', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Log the current tab's URL to the consolef
  console.log("Current tab URL:", tab.url);

  var button = document.getElementById('send-message-button')
  
  button.addEventListener('click', async () =>
    {
        const data = {url: tab.url };
        const options = {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
        };
        const response = await fetch('http://localhost:5500/api', options);
        const json = await response.json();
            console.log('Response', json);
        })
    });




