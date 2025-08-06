document.addEventListener('DOMContentLoaded', async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  // Log the current tab's URL to the console
  console.log("Current tab URL:", tab.url);
});

	