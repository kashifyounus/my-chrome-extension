console.log("Background script is running");

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Background script received a message");
  console.log(request);

  // Send a response back to the content script
  sendResponse({
    message: "Hello from the background script",
    data: {
      name: "John Doe",
      age: 25,
    },
  });
});
