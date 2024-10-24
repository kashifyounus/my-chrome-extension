// contentScript.js
console.log("Content script injected");

// // Example: Get the current URL
const currentUrl = window.location.href;
console.log("Current URL:", currentUrl);
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "SCRAPE_PAGE") {
    console.log("Scraping page data...");
    sendResponse({ data: "sending to App.tsx" });
    
  }

  if (message.type === "FILE_UPLOAD") {
    console.log("FILE_UPLOAD file:");
  }
});
// // Example: Get the entire HTML of the page
// const pageContent = document.documentElement.innerHTML;

// // Example: Get the text content of all paragraphs
// const paragraphs = [...document.querySelectorAll('p')].map(p => p.innerText);

// // Send data back to the popup or background script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === 'SCRAPE_PAGE') {
//     const pageData = {
//       html: pageContent,
//       paragraphs: paragraphs
//     };
//     console.log('Scraped data:', pageData); // Log the scraped data
//     //sendResponse(pageData); // Send the scraped data back
//   }
//   if (message.type === 'FILE_UPLOAD') {
//     console.log('Received file:', message.name);

//     // Process the file data (for example, send it to your API)
//     //sendFileToAPI(request.data, request.name);
//   }
// });

// // Example: Listen for clicks on the page
// document.addEventListener('click', (event) => {
//   console.log('Clicked:', event.target);
// });

// Example function to fetch data from an API endpoint
async function fetchData() {
  const apiUrl = "https://fakestoreapi.com/products"; // Change to your API endpoint

  try {
    const response = await fetch(apiUrl, {
      method: "GET", // or 'POST', etc.
      //credentials: 'include', // Include cookies in the request
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Fetched data:", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

// Run fetchData when the content script is loaded
//fetchData();

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "FILE_UPLOAD") {
    console.log("Received file:", request.name);

    // Process the file data (for example, send it to your API)
    //sendFileToAPI(request.data, request.name);
  }
});

// // Function to send the file data to your API
// async function sendFileToAPI(fileData, fileName) {
//   console.log('Uploading file:', fileName);
//   console.log('File data:', fileData);
//   // const apiUrl = 'https://www.mysite.com/api/upload'; // Your API endpoint

//   // const formData = new FormData();
//   // formData.append('file', fileData, fileName); // Create a blob from the file data

//   // try {
//   //   const response = await fetch(apiUrl, {
//   //     method: 'POST',
//   //     body: formData,
//   //     credentials: 'include', // Include cookies for authentication
//   //   });

//   //   if (!response.ok) {
//   //     throw new Error(`HTTP error! status: ${response.status}`);
//   //   }

//   //   const data = await response.json();
//   //   console.log('Upload response:', data);
//   // } catch (error) {
//   //   console.error('Error uploading file:', error);
//   // }
// }
