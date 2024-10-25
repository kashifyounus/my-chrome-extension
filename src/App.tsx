import { useEffect } from "react";

function App() {
  //const [state, setState] = useState({});
  //console.log("chrome in page", chrome);
  useEffect(() => {
    //console.log("chrome in useEffect", chrome);
    // chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    //   console.log("tabs", tabs);
    //   const tabID = tabs[0].id || 0;
    //   console.log("tabID", tabID);
    //   chrome.tabs.sendMessage(
    //     tabID,
    //     { greeting: "hello" },
    //     function (response) {
    //       console.log("response", response);
    //     }
    //   );
    // });
    // Your code
  }, []);
  return (
    <div>
      <h1>My New Extension</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nihil
        quas cupiditate omnis dignissimos praesentium aspernatur, velit mollitia
        dicta aliquam voluptas libero sequi excepturi dolor non nisi eius!
        Quisquam, asperiores?
      </p>
    </div>
  );
}

export default App;
