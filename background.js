// background.js
console.log('Background script is running');
chrome.action.onClicked.addListener((tab) => {
    console.log('tab', tab);
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: changeBackgroundColor,
    });
  });
  
  function changeBackgroundColor() {
    document.body.style.backgroundColor = 'lightblue';
  }
  