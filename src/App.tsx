
import React from "react";
// function App() {
//   const [scrapedData, setScrapedData] = useState({ html: '', paragraphs: [] });

//   //  upload a file from input field and send to content script
//   const uploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onload = (e) => {
//         const content = e.target?.result;
//         if (content && chrome && chrome.tabs) {
//           // Query the active tab and send a message to the content script
//           chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
//             if (tabs[0]?.id) {
//               chrome.tabs.sendMessage(
//                 tabs[0].id,
//                 { type: 'UPLOAD_FILE', content },
//                 (response) => {
//                   if (response) {
//                     console.log('app.tsx Uploaded file:', response);
//                   }
//                 }
//               );
//             }
//           });
//         }
//       };
//       reader.readAsText(file);
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1>Scrape Current Page</h1>
//       <button onClick={scrapePage}>Scrape Page Content</button>

//       <h2>Scraped HTML:</h2>
//       <pre>{scrapedData.html}</pre>

//       <h2>Paragraph Texts:</h2>
//       <ul>
//         {scrapedData.paragraphs.map((text, index) => (
//           <li key={index}>{text}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

function App() {
  //const [file, setFile] = useState<File | null>(null);
  //const [uploadResponse, setUploadResponse] = useState<string | null>(null);

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null;
    console.log("selected file:", selectedFile);
    //setFile(selectedFile);
  };
  const buttuon1Click = () => {
    if (chrome && chrome.tabs) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        // send message to content script
        const tabId = tabs[0]?.id || 0;
        console.log("tabId:", tabId);
        chrome.tabs.sendMessage(
          tabId,
          { type: "SCRAPE_PAGE" },
          (response) => {
            if (response) {
              console.log("response from contentScript: ", response);
            }
          }
        );
      });
    }
  };

  // const scrapePage = () => {
  //   if (chrome && chrome.tabs) {
  //     // Query the active tab and send a message to the content script
  //     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //       if (tabs[0]?.id) {
  //         chrome.tabs.sendMessage(
  //           tabs[0].id,
  //           { type: 'SCRAPE_PAGE' },
  //           (response) => {
  //             if (response) {
  //               // get the page content and url
  //               console.log('app.tsx Scraped data:', response);
  //               //console.log('app.tsx Scraped data:', response);
  //               //setScrapedData(response); // Update state with the scraped data
  //             }
  //           }
  //         );
  //       }
  //     });
  //   }
  // };
  // // Function to send file to content script
  // const sendFileToContentScript = () => {
  //   console.log('sending file ');
  //   if (!file) {
  //     console.error('No file selected');
  //     return;
  //   }
  //   console.log('file selected:', file);
  //   setUploadResponse('test data');
  //   if (chrome && chrome.tabs) {
  //     // Query the active tab and send a message to the content script
  //     chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  //       console.log('tabs:', tabs);
  //       if (tabs[0]?.id) {
  //         chrome.tabs.sendMessage(
  //           tabs[0].id,
  //           { type: 'FILE_UPLOAD' },
  //           (response) => {
  //             if (response) {
  //               // get the page content and url
  //               console.log('app.tsx Scraped data:', response);
  //               //console.log('app.tsx Scraped data:', response);
  //               //setScrapedData(response); // Update state with the scraped data
  //             }
  //           }
  //         );
  //       }
  //     });
  //   }

  //   // const reader = new FileReader();
  //   // reader.onload = function () {
  //   //   const fileData = reader.result as string;
  //   //   // Send the file data to content script
  //   //   chrome.runtime.sendMessage({
  //   //     type: 'FILE_UPLOAD',
  //   //     name: file.name,
  //   //     data: fileData,
  //   //   });
  //   // };
  //   // reader.readAsDataURL(file); // Read the file as a data URL
  //   // // set read file to setUploadResponse
  //   // setUploadResponse("test data");
  //   // reader.onloadend = function () {
  //   // };
  // };

  return (
    <div>
      <h1>Upload a File</h1>
      <input type="file" onChange={handleFileChange} />
      {/* <button onClick={sendFileToContentScript}>Send to Content Script</button> */}
      <button onClick={buttuon1Click}>Scrape Page Content</button>
      {/* {uploadResponse && <p>{uploadResponse}</p>} */}
    </div>
  );
}

export default App;
