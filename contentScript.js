// contentScript.js
console.log("Content Script is running");

// Send a message to the background script
// define chrome.runtime.sendMessage() method and describe about the method what it does
// and what it takes as arguments
// chrome.runtime.sendMessage(extensionId, message, options, responseCallback)
// extensionId: (optional) string
// message: any
// options: object
// responseCallback: function
// The message is sent to the extension identified by the extensionId.
// If the extensionId is omitted, the message will be sent to your own extension.
// If you have the 'tabs' permission, you can send a message to a specific tab, identified by its tabId.
// If you do not have the 'tabs' permission, you can only send a message to your own extension.
// what does tabs mean ..
// tabs: Use the chrome.tabs API to interact with the browser's tab system. You can use this API to create, modify, and rearrange tabs in the browser.
// lets create a tab and send a message to the tab
const currentTab = window.location.href;
chrome.runtime.sendMessage(
  { message: "Hello from the content script" },
  (response) => {
    console.log("response got from background", response);
    const data = response.data;
    console.log(`Name: ${data.name}, Age: ${data.age}`);
    const xpath =
      "/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/div";
    const centerDiv =
      "/html/body/div[1]/div[3]/form/div[1]/div[1]/div[4]/center";
    const addButton = `<input id="kashif_input_id" class="gNO89b" value="Kashif Search" aria-label="Google Search" name="btnK" role="button" tabindex="0" type="submit" data-ved="0ahUKEwin88io4KmJAxW0EVkFHUn9J0EQ4dUDCB0">`;
    // append the button to the center div
    document.evaluate(
      centerDiv,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue.innerHTML += addButton;
    // get the element by xpath and update the text
    const element = document.evaluate(
      xpath,
      document,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    // set span in element.innerHTML
    element.innerHTML = `<span style="color: white;">${`Name: ${data.name}, Age: ${data.age}`}</span>`;
    console.log("Element updated", element);
  }
);
